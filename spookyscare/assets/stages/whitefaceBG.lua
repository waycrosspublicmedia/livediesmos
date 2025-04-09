function onCreate()
    makeLuaSprite('bgggggg', 'song specific and bgs/whiteface/IMSCARED-background-03-chairrope', -450, -300)

    makeLuaSprite('bgPixel', 'song specific and bgs/whiteface/bg1', 250, 0)
    scaleObject('bgPixel', 5, 5)

    makeLuaSprite('graveyard', 'song specific and bgs/whiteface/BURY_HER-bg012', -490, -250)
    scaleObject('graveyard', 0.74, 0.7)

    makeLuaSprite('mirror1', 'song specific and bgs/whiteface/MIRROR_DAY', -665, -185)
    scaleObject('mirror1', 1.1, 1)
    setObjectOrder('mirror1', 2)

    makeLuaSprite('mirror2', 'song specific and bgs/whiteface/MIRROR_NIGHT', -500, -185)
    setObjectOrder('mirror2', 3)

    makeLuaSprite('blackRoom', 'song specific and bgs/whiteface/BLACK_ROOM_LAST', -1435, -659)
    scaleObject('blackRoom', 1, 1)

    makeAnimatedLuaSprite('walltext', 'song specific and bgs/whiteface/wallText', -580, 50)
    for i = 1,7 do
        addAnimationByPrefix('walltext', 'text'..i, 'text'..i, 1, true)
    end
    scaleObject('walltext', 1.65, 1.65)

    setProperty('bgPixel.antialiasing', false)
    setProperty('bgggggg.alpha', 0)
    setProperty('mirror1.alpha', 0)
    setProperty('mirror2.alpha', 0)
    setProperty('blackRoom.alpha', 0)
    setProperty('walltext.alpha', 0)
    
    addLuaSprite('bgPixel')
    addLuaSprite('bgggggg')
    addLuaSprite('mirror1')
    addLuaSprite('mirror2')
    addLuaSprite('blackRoom')
    addLuaSprite('walltext')
end

function opponentNoteHit(id, dir, note, sus)
    if not sus and getProperty('blackRoom.scale.x') == 0.6 and curBeat < 704 then
        objectPlayAnimation('walltext', 'text'..getRandomInt(1,7), true)
    elseif curBeat > 703 then
        objectPlayAnimation('walltext', 'text1', true)
    end
end