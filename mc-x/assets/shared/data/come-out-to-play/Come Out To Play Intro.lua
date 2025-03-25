introCam = true
camX = 1280
camY = 500
 
ScrollSpeed = 4
function onCreate()
    
    setProperty('defaultCamZoom', 0.55) -- 0.55
    setProperty('camZoomingMult', 0)
    --setProperty('cameraSpeed', 1000)
    setProperty('bloodyhillback.alpha', 1)
    setProperty('bloodyhillgeysers.alpha', 1)
    setProperty('bloodyhillwaterfall.alpha',1)
    setProperty('bloodyhillfront.alpha', 1)
    setProperty('camHUD.alpha', 0)
    setProperty('dad.alpha', 0)
    setProperty('boyfriend.alpha', 0)
   setProperty('gf.alpha', 0)

    makeLuaSprite('RedGradient', 'intro/IMG_2406', 0, -200)
    addLuaSprite('RedGradient', false)

    makeLuaSprite('Clouds', 'intro/IMG_2407', 0, -200)
    addLuaSprite('Clouds', false)
    doTweenX('CloudsScroll', 'Clouds', -2560, ScrollSpeed)

    makeLuaSprite('Clouds2', 'intro/IMG_2407', 2550, -200)
    addLuaSprite('Clouds2', false)
    doTweenX('Clouds2Scroll', 'Clouds2', 0, ScrollSpeed)

    makeLuaSprite('Rocks', 'intro/IMG_2408', 0, -200)
    addLuaSprite('Rocks', false)
    doTweenX('RocksScroll', 'Rocks', -2560, ScrollSpeed + 1)

    makeLuaSprite('Rocks2', 'intro/IMG_2408', 2550, -200)
    addLuaSprite('Rocks2', false)
    doTweenX('Rocks2Scroll', 'Rocks2', 0, ScrollSpeed + 1 )

    makeAnimatedLuaSprite('geysers', 'intro/geysers', 0, -200)
    addAnimationByPrefix('geysers', 'idle', 'idle', 6, true)
    addLuaSprite('geysers', false)
    doTweenX('geysersScroll', 'geysers', -2560, ScrollSpeed + 2)

    makeAnimatedLuaSprite('geysers2', 'intro/geysers', 2550, -200)
    addAnimationByPrefix('geysers2', 'idle', 'idle', 6, true)
    addLuaSprite('geysers2', false)
    doTweenX('geysers2Scroll', 'geysers2', 0, ScrollSpeed + 2)

    makeAnimatedLuaSprite('introwaterfall', 'intro/introwaterfall', 0, -200)
    addAnimationByPrefix('introwaterfall', 'idle', 'introwaterfall idle', 6, true)
    addLuaSprite('introwaterfall', false)
    doTweenX('introwaterfallScroll', 'introwaterfall', -2560, ScrollSpeed + 1.5)

    makeAnimatedLuaSprite('introwaterfall2', 'intro/introwaterfall', 2550, -200)
    addAnimationByPrefix('introwaterfall2', 'idle', 'introwaterfall idle', 6, true)
    addLuaSprite('introwaterfall2', false)
    doTweenX('introwaterfall2Scroll', 'introwaterfall2', 0, ScrollSpeed + 1.5)


    makeLuaSprite('Water', 'intro/IMG_2409', 0, -200)
    addLuaSprite('Water', false)

    makeAnimatedLuaSprite('waterhighlights', 'intro/waterhighlights', 0, -200)
    addAnimationByPrefix('waterhighlights', 'idle', 'waterhighlights idle', 6, true)
    addLuaSprite('waterhighlights', false)
    doTweenX('waterhighlightsScroll', 'waterhighlights', -2560, ScrollSpeed + 3)

    makeAnimatedLuaSprite('waterhighlights2', 'intro/waterhighlights', 2550, -200)
    addAnimationByPrefix('waterhighlights2', 'idle', 'waterhighlights idle', 6, true)
    addLuaSprite('waterhighlights2', false)
    doTweenX('waterhighlights2Scroll', 'waterhighlights2', 0, ScrollSpeed + 3)

    makeLuaSprite('ring', 'intro/IMG_2425', 280, -400)
    addLuaSprite('ring', false)
    scaleObject('ring', .65, .65)

    
    makeAnimatedLuaSprite('fingerwagring', 'intro/fingerwagring', 280, -400)
    addAnimationByPrefix('fingerwagring', 'idle', 'fingerwag wag', 8, true)
    addLuaSprite('fingerwagring', false)
    scaleObject('fingerwagring', 1.3, 1.3)

    makeAnimatedLuaSprite('jumpfromring1', 'intro/sonicexejumpfromring', 280, -400)
    --addAnimationByPrefix('jumpfromring', 'idle', 'jumpfromring idle', 8, true)
    setProperty('jumpfromring1.alpha', 0.0001)
    addLuaSprite('jumpfromring1', false)
    scaleObject('jumpfromring1', 1.3, 1.3)

    makeLuaSprite('Text', 'intro/IMG_2434', 630, 240)
    addLuaSprite('Text', false)
    scaleObject('Text', .65, .65)
    setProperty('Text.alpha', 1)

    makeAnimatedLuaSprite('sonicexeland', 'intro/sonicexeland', 520, -100)
    --addAnimationByPrefix('sonicexeland', 'land', 'sonicexeland land', 12, true)
    addAnimationByPrefix('sonicexeland', 'land', 'xland land', 12, false)
    addLuaSprite('sonicexeland', false)
    scaleObject('sonicexeland', .8, .8)
    setProperty('sonicexeland.alpha', 0.0001)

    addAnimationByPrefix('jumpfromring1', 'idle1', 'jumpfromring jump', 12, false)
        addAnimationByPrefix('jumpfromring1', 'idle2', 'jumpfromring offscreen',11, false)
   

        precacheImage('intro/IMG_2406') 
    precacheImage('intro/IMG_2407') 
    precacheImage('intro/IMG_2408') 
    precacheImage('intro/IMG_2409') 
    precacheImage('intro/IMG_2425') 
    precacheImage('intro/IMG_2434') 
    precacheImage('intro/geysers') 
    precacheImage('intro/introwaterfall') 
    precacheImage('intro/waterhighlights') 
    precacheImage('intro/fingerwagring')
    precacheImage('intro/sonicexejumpfromring') 
    precacheImage('intro/sonicexeland') 
end

function onTweenCompleted(tag)
    if tag == 'introwaterfallScroll' then 
        setProperty('introwaterfall.x', 2550)
        doTweenX('introwaterfallScroll2', 'introwaterfall', 0, ScrollSpeed + 1.5)
    end 
    if tag == 'introwaterfallScroll2' then 
        doTweenX('introwaterfallScroll', 'introwaterfall', -2560, ScrollSpeed + 1.5)
    end
    if tag == 'introwaterfall2Scroll' then 
        --setProperty('introwaterfall2.x', 2550)
        doTweenX('introwaterfall2Scroll2', 'introwaterfall2',-2560, ScrollSpeed + 1.5)
    end 
    if tag == 'introwaterfall2Scroll2' then 
        setProperty('introwaterfall2.x', 2550)
        doTweenX('introwaterfall2Scroll', 'introwaterfall2', 0, ScrollSpeed + 1.5)
    end

    if tag == 'geysersScroll' then 
        setProperty('geysers.x', 2550)
        doTweenX('geysersScroll2', 'geysers', 0, ScrollSpeed + 2)
    end 
    if tag == 'geysersScroll2' then 
        doTweenX('geysersScroll', 'geysers', -2560, ScrollSpeed + 2)
    end
    if tag == 'geysers2Scroll' then 
        --setProperty('introwaterfall2.x', 2550)
        doTweenX('geysers2Scroll2', 'geysers2',-2560, ScrollSpeed + 2)
    end 
    if tag == 'geysers2Scroll2' then 
        setProperty('geysers2.x', 2550)
        doTweenX('geysers2Scroll', 'geysers2', 0, ScrollSpeed + 2)
    end

    if tag == 'RocksScroll' then 
        setProperty('Rocks.x', 2550)
        doTweenX('RocksScroll2', 'Rocks', 0, ScrollSpeed + 1)
    end 
    if tag == 'RocksScroll2' then 
        doTweenX('RocksScroll', 'Rocks', -2560, ScrollSpeed + 1)
    end
    if tag == 'Rocks2Scroll' then 
        --setProperty('introwaterfall2.x', 2550)
        doTweenX('Rocks2Scroll2', 'Rocks2',-2560, ScrollSpeed + 1)
    end 
    if tag == 'Rocks2Scroll2' then 
        setProperty('Rocks2.x', 2550)
        doTweenX('Rocks2Scroll', 'Rocks2', 0, ScrollSpeed + 1)
    end

    if tag == 'CloudsScroll' then 
        setProperty('Clouds.x', 2550)
        doTweenX('CloudsScroll2', 'Clouds', 0, ScrollSpeed)
    end 
    if tag == 'CloudsScroll2' then 
        doTweenX('CloudsScroll', 'Clouds', -2560, ScrollSpeed)
    end
    if tag == 'Clouds2Scroll' then 
        --setProperty('introwaterfall2.x', 2550)
        doTweenX('Clouds2Scroll2', 'Clouds2',-2560, ScrollSpeed)
    end 
    if tag == 'Clouds2Scroll2' then 
        setProperty('Clouds2.x', 2550)
        doTweenX('Clouds2Scroll', 'Clouds2', 0, ScrollSpeed)
    end

    if tag == 'waterhighlightsScroll' then 
        setProperty('waterhighlights.x', 2550)
        doTweenX('waterhighlightsScroll2', 'waterhighlights', 0, ScrollSpeed + 3)
    end 
    if tag == 'waterhighlightsScroll2' then 
        doTweenX('waterhighlightsScroll', 'waterhighlights', -2560, ScrollSpeed + 3)
    end
    if tag == 'waterhighlights2Scroll' then 
        --setProperty('introwaterfall2.x', 2550)
        doTweenX('waterhighlights2Scroll2', 'waterhighlights2',-2560, ScrollSpeed + 3)
    end 
    if tag == 'waterhighlights2Scroll2' then 
        setProperty('waterhighlights2.x', 2550)
        doTweenX('waterhighlights2Scroll', 'waterhighlights2', 0, ScrollSpeed + 3)
    end
end


function onUpdatePost()
    --setProperty('camZooming', true)
  if introCam then
  setProperty('camFollow.x', camX)
  setProperty('camFollow.y', camY)
  end
end

function onStepHit()
    if curStep == 44 then
        playAnim('jumpfromring1', 'idle1', true) 
        removeLuaSprite('fingerwagring',true)
    setProperty('jumpfromring1.alpha', 1)
    setProperty('Text.alpha', 0)
    runTimer('textflash', .05)
    end 
    if curStep == 49 then 
        setProperty('jumpfromring1.y', -225)
        playAnim('jumpfromring1', 'idle2', true)
        runTimer('handgoaway', .15)
        cancelTimer('textflash')
        cancelTimer('textflash2')
        setProperty('Text.alpha', 0)
    end
    if curStep == 50 then 
        setProperty('isCameraOnForcedPos', true)
        setProperty('cameraSpeed', 1)
        camY = 480

    end
    if curStep == 52 then 
        setProperty('camGame.alpha', 1)
      
       runHaxeCode([[
          game.defaultCamZoom = 1.1;
    game.camGame.setScrollBounds();
    game.camGame.zoom = 1.1; 
    ]])
        --introCam = false
        introCam = false
        setProperty('isCameraOnForcedPos', true)
        doTweenX('tweenX', 'camFollow',900, .3, 'expoInOut')
        doTweenY('tweenY', 'camFollow',480,1, 'sineInOut')
        setProperty('camHUD.alpha', 0.0001)
        setProperty('dad.alpha', 0.0001)
        setProperty('boyfriend.alpha', 1)
        setProperty('gf.alpha', 1)
        setProperty('camGame.alpha', 1)
    setProperty('camHUD.alpha', 0.0001)
    setProperty('boyfriend.alpha', 1)
    setProperty('gf.alpha', 1)

    local spritesToRemove = {
        'waterhighlights2', 'waterhighlights', 'Clouds2', 'Clouds', 
        'Rocks', 'Rocks2', 'geysers2', 'geysers', 'Water', 
        'introwaterfall', 'introwaterfall2', 'jumpfromring', 
        'RedGradient', 'ring'
    }
    for _, sprite in ipairs(spritesToRemove) do
        removeLuaSprite(sprite, true)
    end
        setProperty('sonicexeland.alpha', 1)
        --addAnimationByPrefix('sonicexeland', 'land', 'xland land', 12, false)
        playAnim('sonicexeland', 'land', true) 
    end
    if curStep == 53 then 
        setProperty('cameraSpeed', 1)
        --doTweenX('tweenX', 'camFollow',900, .3, 'expoInOut')
    end
    if curStep == 56 then 
        setProperty('dad.alpha', 1)
        setProperty('sonicexeland.alpha', 0.0001)
        runHaxeCode([[
               FlxTween.tween(game, {defaultCamZoom: 1.2}, .5, {ease: FlxEase.expoOut});
              ]])
    end
    if curStep == 64 then 
        setProperty('dad.alpha', 1)
        setProperty('sonicexeland.alpha', 0.0001)
        setProperty('isCameraOnForcedPos', false)
        introCam = false
        setProperty('cameraSpeed', .35)
        runHaxeCode([[
               FlxTween.tween(game, {defaultCamZoom: .8}, 2, {ease: FlxEase.quadInOut});
              ]])
              doTweenAlpha('TheHud', 'camHUD', 1, 2, 'sineInOut')
    end
    if curStep == 96 then 
        setProperty('cameraSpeed', 1)
    end



end

function onTimerCompleted(tag)
    if tag == 'handgoaway' then 
        setProperty('jumpfromring1.y', 140)
    end
    if tag == 'textflash' then 
        setProperty('Text.alpha', 1)
        runTimer('textflash2', .05)
    end
    if tag == 'textflash2' then 
        setProperty('Text.alpha', 0)
        runTimer('textflash', .05)
    end
        
end