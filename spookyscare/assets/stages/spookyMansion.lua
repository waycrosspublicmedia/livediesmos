function onCreate()
--bg
	makeLuaSprite('backWall', 'song specific and bgs/spooky/spookyback02-background', 0, 0);
	scaleObject('backWall', 1.3, 1.3);

    makeLuaSprite('midGround', 'song specific and bgs/spooky/spookyback08-midground', 0, 0);
	scaleObject('midGround', 1.3, 1.3);
	
	makeLuaSprite('floor', 'song specific and bgs/spooky/spookyback01-floor', 0, 0);
	scaleObject('floor', 1.3, 1.3);

    makeLuaSprite('carpet', 'song specific and bgs/spooky/spookyback09-carpet', 0, 0)
    scaleObject('carpet', 1.3, 1.3)

    makeAnimatedLuaSprite('torchLight', 'song specific and bgs/spooky/backLight', 0, 0)
        addAnimationByIndices('torchLight', 'idle', 'idle', '1,2,3,4,0', 12)
    scaleObject('torchLight', 1.3, 1.3)

    makeAnimatedLuaSprite('torch', 'song specific and bgs/spooky/backTorch', 0, 0)
        addAnimationByPrefix('torch', 'idle', 'idle', 10, true)
    scaleObject('torch', 1.3, 1.3)

    makeLuaSprite('frontStairs', 'song specific and bgs/spooky/spookyback16-foreground', 50, -200)
    setScrollFactor('frontStairs', 1.15, 1.15)
    scaleObject('frontStairs', 1.3, 1.3)


    addLuaSprite('floor', false);
	addLuaSprite('backWall', false);
    addLuaSprite('torchLight', false);
    addLuaSprite('torch', false);
    addLuaSprite('midGround', false);
    addLuaSprite('carpet', false);
    addLuaSprite('frontStairs', true);
end

function onBeatHit()
    if songName == 'Chills' then
        if curBeat % 2 == 0 and curBeat < 24 then
            objectPlayAnimation('torchLight', 'idle')
        elseif curBeat >= 24 and curBeat <= 38 then
            objectPlayAnimation('torchLight', 'idle')
        elseif curBeat % 2 == 0 and curBeat >= 40 then
            objectPlayAnimation('torchLight', 'idle')
        end
    else
        objectPlayAnimation('torchLight', 'idle')
    end
end

