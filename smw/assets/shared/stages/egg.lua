function onCreate()
    makeLuaSprite('mic', 'bg/mic', 0, 50)
    scaleObject('mic', 1, 1)
    setScrollFactor('mic', 1, 1)
    setObjectCamera('mic', 'camHUD')
    setProperty('mic.visible', true)
    screenCenter('mic', 'x')

    makeLuaSprite('micno', 'bg/blue', 0, 50)
    setProperty('micno.visible', false)
    scaleObject('micno', 1, 1)
    setScrollFactor('micno', 1, 1)
    setObjectCamera('micno', 'camHUD')
    screenCenter('micno', 'x')

    makeAnimatedLuaSprite('bg', 'bg/background', -740, -170)
    addAnimationByPrefix('bg', 'Bg', 'Back ground', 24, true)
    scaleObject('bg', 1, 1)
    setScrollFactor('bg', 1, 1)

    makeLuaSprite('sky', 'bg/Sky', -730, -220)
    scaleObject('sky', 1, 1)
    setScrollFactor('sky', 1, 1)

    makeLuaSprite('pilar', 'bg/Pillars', -790, 130)
    scaleObject('pilar', 1, 1)
    setScrollFactor('pilar', 1, 1)

    makeLuaSprite('backpil', 'bg/Back Pillars', -630, 80)
    scaleObject('backpil', 1, 1)
    setScrollFactor('backpil', 1, 1)

    makeLuaSprite('shit', 'bg/Front Background', -590, 780)
    scaleObject('shit', 0.8, 0.6)
    setScrollFactor('shit', 1, 1)

    makeLuaSprite('cloud', 'bg/Clouds', -570, -170)
    scaleObject('cloud', 1, 1)
    setScrollFactor('cloud', 1, 1)

    makeAnimatedLuaSprite('bg1', 'bg/Background_Tree_Pixel', -1480, 600)
    addAnimationByPrefix('bg1', 'bg1', 'Front_Backgriund', 24, false)
    scaleObject('bg1', 8.9, 7.1)
    setScrollFactor('bg1', 1, 1)
    setProperty('bg1.visible', false)

    addLuaSprite('sky', false)
    addLuaSprite('backpil', false)
    addLuaSprite('pilar', false)
    addLuaSprite('cloud', false)
    addLuaSprite('bg', false)
    addLuaSprite('shit', true)
    addLuaSprite('mic', true)
    addLuaSprite('micno', true)

end

function onEvent(name, value1, value2)
    if name == 'Change' then
        if value1 == 'Pixel' then

            setProperty('gf.y', 1565)
            setProperty('gf.x', -340)
            setProperty('boyfriend.x', 650)

            setProperty('sky.visible', false)
            setProperty('pilar.visible', false)
            setProperty('backpil.visible', false)
            setProperty('shit.visible', false)
            setProperty('cloud.visible', false)
            setProperty('bg.visible', false)
            setProperty('micno.visible', false)

            makeAnimatedLuaSprite('bg1', 'bg/Background_Tree_Pixel', -1480, 600)
            addAnimationByPrefix('bg1', 'bg1', 'Front_Backgriund', 24, false)
            scaleObject('bg1', 8.9, 7.1)
            setScrollFactor('bg1', 1, 1)

            makeLuaSprite('pixelsky', 'bg/pixel', -1390, -40)
            scaleObject('pixelsky', 6.6, 4.3)
            setScrollFactor('pixelsky', 1, 1)

            makeLuaSprite('pixshit', 'pixelShit', 0, 550)
            scaleObject('pixshit', 2.4, 2.4)
            setScrollFactor('pixshit', 1, 1)
            screenCenter('pixshit', 'x')

            makeLuaSprite('mic3', 'pixmic', 0, 50)
            scaleObject('mic3', 1, 1)
            setScrollFactor('mic3', 1, 1)
            setObjectCamera('mic3', 'camHUD')
            screenCenter('mic3', 'x')

            addLuaSprite('pixelsky', false)
            addLuaSprite('bg1', false)
            addLuaSprite('pixshit', true)
            addLuaSprite('mic3', true)

            setProperty('dad.visible', true)
            setObjectOrder('dadGroup', getObjectOrder('pixshit') + 1)

        end
    end
end

function onStepHit()
    if curStep == 553 then
    setProperty('mic.visible', false)
    setProperty('micno.visible', true)
   end
end
