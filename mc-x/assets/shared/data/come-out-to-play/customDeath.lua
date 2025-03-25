                                    -- SCRIPT BY RORUTOP -- 
                                    -- Modified by AppleJuice 
local Assets = { -- feel free to customize
    character = {
        name = 'BOYFRIEND_DEAD',
        idle = 'BF dies',
        loop = 'BF Dead Loop',
        confirm = 'BF Dead confirm'
    },
    sounds = {
        loss = 'gameOverSonic',
        music = 'gameOver',
        confirm = 'gameOverEnd'
    }
}
local gameoverBPM = 100

function unsetShader()
    runHaxeCode([[trace(ShaderFilter);
    game.camGame.setFilters([]);]])

    runHaxeCode([[trace(ShaderFilter);
    game.camHUD.setFilters([]);]])

    runHaxeCode([[trace(ShaderFilter);
    game.camOther.setFilters([]);]])
end

function lerp(a,b,t) return a * (1-t) + b * t end

function onCreatePost()
    setPropertyFromClass('flixel.FlxG','save.data.isFuckingDead', false) -- ignore this just for stopping the custom pause menu i made
    makeLuaSprite('Ded', 'Ded', 1340, 50)
    scaleObject('Ded', .4, .4)
    addLuaSprite('Ded', true)
    setProperty('Ded.alpha', 0)

    
   
end



local debounce = {}
local freezedPos = 0
local vol = 0.8
local zoomt = 0

function onGameOver()
    if not debounce.alreadyded then
        openCustomSubstate('death', false)
        setProperty('paused',true)
        freezedPos = getPropertyFromClass('Conductor', 'songPosition')
        setPropertyFromClass('flixel.FlxG','save.data.isFuckingDead', true)
        -- getPropertyFromClass('flixel.FlxG','save.data.isFuckingDead')
        debounce.alreadyded = true
    end
    return Function_Stop
end
function onGameOverConfirm(retry)
    makeLuaSprite('Black', 'Black', 0, 0)
    scaleObject('Black', 3, 2)
    addLuaSprite('Black', false)
    setObjectCamera('Black', 'camOther')
    screenCenter('Black')
    --setProperty('Black.alpha', 0)
    doTweenAlpha('BlackA', 'Black', 1, .5, 'linear')
end

function onPause()
  if debounce.alreadyded then
    return Function_Stop
  end

end

local onLoop = false
local isConFirm = false
local isExit = false
function onUpdatePost()
    if debounce.alreadyded then
        if onLoop or isConFirm or isExit then
            runHaxeCode([[ game.vocals.pause(); ]])
            setPropertyFromClass('flixel.FlxG','camera.zoom', zoomt)
        end
        setPropertyFromClass('Conductor', 'songPosition', freezedPos)
    end
end

local timer = {startdelay = {t = 0,max = 1},beat = {t = 0,m = 0,loop = 0},confirm = {time = 0,max = 2.7,fadingdelay = 0,fadingdelaymax = 0.7}}
bank = {"BeepBoo", "AltF4", "Freak", "EyesChecked", "NiceHat", "NotVery", "StupidName", "TrueForm", "UglyGF"}
function onCustomSubstateCreate(tag)
	if tag == 'death' then
        makeLuaSprite('GAME', 'GAME', -450, 0) --150
        scaleObject('GAME', .5, .5)
        addLuaSprite('GAME', false)
        setObjectCamera('GAME', 'camOther')
        --setProperty()
        screenCenter('GAME', 'y')
    
        makeLuaSprite('OVER', 'OVER', 1240, 0) -- 640
        scaleObject('OVER', .5, .5)
        addLuaSprite('OVER', false)
        setObjectCamera('OVER', 'camOther')
        --setProperty('OVER.alpha', 0)
        screenCenter('OVER', 'y')

        runTimer('VoiceLines', 1)
        runTimer('Text', 1)
        

        setPropertyFromClass('flixel.FlxG','save.data.setFollowBool', false) -- ignore this just using this for disabling my cam follow per note hit script
        zoomt = getPropertyFromClass('flixel.FlxG','camera.zoom')

        setProperty('boyfriend.visible',false)
        setProperty('cameraSpeed', 2)
        
setProperty('camFollow.x',getGraphicMidpointX('boyfriend'))
        setProperty('camFollow.y',getGraphicMidpointY('boyfriend'))


        doTweenY('DedY', 'Ded',-290, .4, 'sineOut')
        setProperty('Ded.alpha', 1)
       
        playSound(Assets.sounds.loss,1,'losssfx')
        soundCallBack('losssfx',function()
            if not onLoop then
                onLoop = true
                playAnim('dead','loop',true)
                playSound(Assets.sounds.music,1,'gameoverSound')
                soundCallBack('gameoverSound',function()
                    playAnim('dead','loop',true)
                    playSound(Assets.sounds.music,1,'gameoverSound')
                    timer.beat.m = 0
                end)
            end
        end)

        unsetShader()
    end
end

function onCustomSubstateUpdate(tag,elapsed)
	if tag == 'death' then
        if keyboardJustPressed('ENTER') or keyboardJustPressed('ESCAPE') then
            if not onLoop then
                stopSound('losssfx')
                onLoop = true
                playAnim('dead','loop',true)
                playSound(Assets.sounds.music,1,'gameoverSound')
                soundCallBack('gameoverSound',function()
                    playAnim('dead','loop',true)
                    playSound(Assets.sounds.music,1,'gameoverSound')
                    timer.beat.m = 0
                end)
                onLoop = true
            elseif not debounce.confirm and keyboardJustPressed('ENTER') then
                stopSound('gameoverSound')
                playSound(Assets.sounds.confirm,1,'gameoverEndSound')
                playAnim('dead','confirm',true)
                isConFirm = true
                debounce.confirm = true
            elseif not debounce.confirm and keyboardJustPressed('ESCAPE') then
                isExit = true
                exitSong()
                setPropertyFromClass('flixel.FlxG', 'sound.music.volume', 1)
                stopSound('gameoverSound')
                debounce.confirm = true
            end
        end
        if onLoop and not (isConFirm or isExit) then
            runHaxeCode([[ gameOverSoundTime = game.modchartSounds.get('gameoverSound').time; game.setOnLuas('gameOverSoundTime',gameOverSoundTime); ]])
            local bps = 60/gameoverBPM
            timer.beat.t = (gameOverSoundTime / 1000) - timer.beat.m
            if timer.beat.t >= bps then
                --debugPrint('bop '..gameOverSoundTime / 1000)
                playAnim('dead','loop',true)
                timer.beat.m = (gameOverSoundTime / 1000)
            end
        elseif not onLoop then
            setProperty('cameraSpeed', 0.5)
            timer.startdelay.t = timer.startdelay.t + elapsed
            if timer.startdelay.t >= timer.startdelay.max then
                setProperty('camFollow.x',getGraphicMidpointX('boyfriend'))
                setProperty('camFollow.y',getGraphicMidpointY('boyfriend'))
            end
        elseif isConFirm then
            timer.confirm.time = timer.confirm.time + elapsed
            if timer.confirm.time >= timer.confirm.max then restartSong() end
            if timer.confirm.time >= timer.confirm.fadingdelaymax and not debounce.fading then
               
                debounce.fading = true
            end
        end

        zoomt = lerp(zoomt,1.1,elapsed * 2)
        setPropertyFromClass('flixel.FlxG','camera.zoom', zoomt)

        vol = lerp(vol,0,elapsed * 4)
        if not isExit then setPropertyFromClass('flixel.FlxG', 'sound.music.volume', vol); setProperty('camOther.alpha', 1) else setProperty('camOther.alpha', 1) end
        setProperty('vocals.volume', vol)
        setProperty('camHUD.alpha', vol)
    
        setProperty('persistentUpdate',true)
        setPropertyFromClass('Conductor', 'songPosition', freezedPos)
    end
end

local soundtbl = {}
function soundCallBack(name,func)
    table.insert(soundtbl,{name,func})
end

function onSoundFinished(tag)
    for i,v in ipairs(soundtbl) do
        if tag == v[1] then
            v[2]()
        end
    end
end

function onTweenCompleted(tag)
    if tag == 'DedY' then 
        doTweenY('DedY2', 'Ded',960, .9, 'quadInOut')
    end
end

function onTimerCompleted(tag)
    if tag == 'VoiceLines' then 
        playSound(bank[getRandomInt(1,#bank)])
    end
    if tag == 'Text' then 
        doTweenX('GAMEX', 'GAME', 150, .5, 'linear')
        doTweenX('OVERX', 'OVER', 640, .5, 'linear')
    end
end