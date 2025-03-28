function onCreate()
    makeLuaSprite('darkness', 'blackBox', 0, 0)
	addLuaSprite('darkness', true)
    scaleObject('darkness', 40, 40, true)
    setObjectCamera('darkness', 'camgame')
    screenCenter('darkness', 'xy')

	makeLuaSprite('bfcard', 'bfcard', -1400, 0)
	addLuaSprite('bfcard', true)
    setObjectCamera('bfcard', 'camhud')
    screenCenter('bfcard', 'y')

    makeLuaSprite('dadcard', 'dadcard', 1400, 0)
	addLuaSprite('dadcard', true)
    setObjectCamera('dadcard', 'camhud')
    screenCenter('dadcard', 'y')
end

function onStepHit()
    if curStep == 4 then
        doTweenX('track', 'bfcard', 0, 0.1, 'linear');
    end
    if curStep == 8 then
        doTweenAlpha("sfdfg", "darkness", 0, 0.00001, "linear")
        doTweenAlpha("asdgfs", "dadcard", 0, 0.00001, "linear")
        doTweenAlpha("dfgfgh", "bfcard", 0, 0.00001, "linear")
    end
    if curStep == 263 then
        setProperty("defaultCamZoom",0.9)
        doTweenZoom('camz','camGame', 0.9, 0.000000001,'linear')
        doTweenAlpha("yelloghgh", "smoke", 0.5, 10, "linear")
        doTweenAlpha("yefghgfllo", "smoke1", 0.3, 10, "linear")
        doTweenX('fgfhfgf', 'smoke', -350, 40, 'linear');
        doTweenX('fgfhhjghnvfgf', 'smoke1', -150, 40, 'linear');
        doTweenX('fgfhncxcxbv', 'smoke2', 750, 40, 'linear');
        doTweenX('fgfhhjfdsfzxcvfgf', 'smoke3', 550, 40, 'linear');
        doTweenAlpha("lighthgh", "light", 0.3, 1, "linear")
        doTweenAlpha("lighto", "light1", 0.0, 1, "linear")
        doTweenAlpha("zxczvzxcsfds", "smok2", 0.5, 10, "linear")
        doTweenAlpha("dfgsaxcz", "smoke3", 0.3, 10, "linear")
    end
    if curStep == 326 then
        doTweenAlpha("lighdfggh", "light", 0.1, 0.5, "linear")
        doTweenAlpha("lightfghc", "light1", 0.3, 0.5, "linear")
    end
    if curStep == 390 then
        setProperty("defaultCamZoom",0.7)
        doTweenZoom('camz','camGame', 0.7, 0.000000001,'linear')
        doTweenAlpha("fgmbcnmn", "smoke", 0, 0.0000000001, "linear")
        doTweenAlpha("yefghgfcxvvbzxcllo", "smoke1", 0, 0.000000001, "linear")
        doTweenAlpha("fgmbxbvbvccnmn", "smoke3", 0, 0.0000000001, "linear")
        doTweenAlpha("yefghgfcxvvbxcvxllo", "smoke2", 0, 0.000000001, "linear")
        doTweenAlpha("lightbye", "light", 0, 0.00001, "linear")
        doTweenAlpha("lightbyee", "light1", 0, 0.000000001, "linear")
    end
end