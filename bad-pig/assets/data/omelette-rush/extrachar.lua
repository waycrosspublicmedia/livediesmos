
local charNote = 'bfbird'

local he_appears = false
-- -- -- -- -- -- -- -- -- -- -- -- -- -- --
dofile('mods/scripts/modules/readJson.lua')

local data = readJson('mods/scripts/modules/dkjson', 'mods/characters/bffly.json')

local onTimer = false

function onCreatePost()
    makeAnimatedLuaSprite('bffly', 'characters/bffly', defaultOpponentX + data.position[1] + -325, defaultOpponentY + data.position[2])
    for i = 1, #data.animations do
        addAnimationByPrefix('bffly', data.animations[i].anim, data.animations[i].name, data.animations[i].fps, data.animations[i].loop)
        addOffset('bffly', data.animations[i].anim, data.animations[i].offsets[1], data.animations[i].offsets[2])
    end
    setProperty('bffly.flipX', data.flip_x)
    scaleObject('bffly', data.scale, data.scale)
    setObjectOrder('bffly', getObjectOrder('dadGroup')+1)
    playAnim('bffly', 'idle', false)
    addLuaSprite('bffly')

    --setObjectOrder('gfGroup', getObjectOrder('dadGroup')+1)

    setProperty('bffly.alpha', 0.00001)
end

function onBeatHit()
    if curBeat % 2 == 0 then
        if not onTimer then
            playAnim('bffly', 'idle', false)
        end
    end
end

function onCountdownTick(swagCounter)
    if not onTimer and swagCounter == 0 then
        playAnim('bffly', 'idle', false)
    end
end

function opponentNoteHit(membersIndex, noteData, noteType, isSustainNote)
    if noteType == charNote then
        cancelTimer('bfflyHold')
        onTimer = true
        runTimer('bfflyHold', 0.5)
        playAnim('bffly', getProperty('singAnimations')[noteData+1], true)
    end
end

function onTimerCompleted(tag, loops, loopsLeft)
    if tag == 'bfflyHold' then
        onTimer = false
    end
end

function onStepHit()
    if curStep == 893 then
        he_appears = true
        setProperty('bffly.alpha', 1)
	end
    if curStep == 2299 then
        he_appears = false
        setProperty('bffly.alpha', 0.00001)
	end	
end

function onUpdate(elapsed)
    if he_appears then
        setProperty('bffly.alpha', 1)
        setProperty('bffly.x', getProperty('bffly.x') + 2 * math.cos(curDecBeat / 4 * math.pi) * elapsed * 40)
        setProperty('bffly.y', getProperty('bffly.y') + 3 * math.sin(curDecBeat / 4 * math.pi) * elapsed * 10)
    end
end