function onCreatePost()
    makeLuaSprite('wallLeft', 'song specific and bgs/cardboard/Wall', -940, -625)
    scaleObject('wallLeft', 1.4, 2)

    makeLuaSprite('wallRight', 'song specific and bgs/cardboard/Wall', 1620, -625)
    scaleObject('wallRight', 1.4, 2)
    setProperty('wallRight.flipX', true)
    
    makeLuaSprite('bg', 'song specific and bgs/cardboard/bg', -530, -535)
    scaleObject('bg', 0.95, 0.975)

    makeLuaSprite('shadow', 'song specific and bgs/cardboard/shadow', -1050, -1850)
    scaleObject('shadow', 1, 3)

    setScrollFactor('boyfriend', 1.1, 0.95)
    setScrollFactor('dad', 1.3, 1)
    setScrollFactor('wallLeft', 1.3, 0.95)
    setScrollFactor('wallRight', 1.1, 0.95)
    setScrollFactor('bg', 1.1, 0.95)
    setScrollFactor('shadow', 1.1, 0.95)

    addLuaSprite('bg')
    addLuaSprite('wallLeft', true)
    addLuaSprite('wallRight', false)
    addLuaSprite('shadow', true)

    for i = 0,3 do
        setPropertyFromGroup('strumLineNotes', i, 'x', -1000)
    end
end

function onGameOver()
    removeLuaSprite('wallLeft')
    removeLuaSprite('wallRight')
    removeLuaSprite('shadow')
end