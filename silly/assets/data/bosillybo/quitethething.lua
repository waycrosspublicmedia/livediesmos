function onCreate()
    makeLuaSprite('darkness', 'blackBox', 0, 0)
	addLuaSprite('darkness', true)
    scaleObject('darkness', 40, 40, true)
    setObjectCamera('darkness', 'camhud')
    screenCenter('darkness', 'xy')
    setProperty("darkness.alpha", 0)

    makeLuaSprite('bro', 'brosconfused', 0, 0)
	addLuaSprite('bro', true)
    setObjectCamera('bro', 'camhud')
    screenCenter('bro', 'xy')
    setProperty("bro.alpha", 0)


end

function onStepHit()
    if curStep == 128 then
        setProperty("defaultCamZoom",0.7)
        doTweenZoom('camz','camGame', 0.7, 0.000001,'linear')
    end
    if curStep == 320 then
        setProperty("defaultCamZoom",0.8)
        doTweenZoom('camz2','camGame', 0.8, 0.00000001,'linear')
    end
    if curStep == 352 then
        setProperty("defaultCamZoom",1)
        doTweenZoom('camz1','camGame', 1, 0.0000001,'linear')
    end
    if curStep == 380 then
        doTweenAlpha("byebye", "darkness", 1, 0.00001, "linear")
    end
    if curStep == 382 then
        doTweenAlpha("bye", "bro", 1, 0.00001, "linear")
    end
    if curStep == 384 then
        setProperty("defaultCamZoom",0.7)
        doTweenZoom('camz','camGame', 0.7, 0.000001,'linear')
        doTweenAlpha("yello", "bro", 0, 0.00001, "linear")
        doTweenAlpha("yell", "darkness", 0, 0.00001, "linear")
    end
end

function onTweenCompleted(name)
    if name == 'camz' then
        setProperty("defaultCamZoom",getProperty('camGame.zoom')) 
    end
    if name == 'camz1' then
        setProperty("defaultCamZoom",getProperty('camGame.zoom')) 
    end
    if name == 'camz2' then
        setProperty("defaultCamZoom",getProperty('camGame.zoom')) 
    end
end

