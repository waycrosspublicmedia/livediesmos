local Invis = true
local Show = false
function onCreate()

    makeLuaSprite('RedParticle', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
    TheNumber = getProperty('RedParticle.x')
    scaleObject('RedParticle', .06, .06)
    doTweenY('RedParticleY', 'RedParticle', -200, getRandomInt(9, 13))
    doTweenX('RedParticleX', 'RedParticle', TheNumber + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle', true);

    makeLuaSprite('RedParticle2', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
    TheNumber2 = getProperty('RedParticle2.x')
    scaleObject('RedParticle2', .06, .06)
    doTweenY('RedParticle2Y', 'RedParticle2', -200, getRandomInt(9, 13))
    doTweenX('RedParticle2X', 'RedParticle2', TheNumber2 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle2', true);

    makeLuaSprite('RedParticle3', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber3 = getProperty('RedParticle3.x')
    scaleObject('RedParticle3', .06, .06)
    doTweenY('RedParticle3Y', 'RedParticle3', -200, getRandomInt(9, 13))
    doTweenX('RedParticle3X', 'RedParticle3', TheNumber3 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle3', true);

    makeLuaSprite('RedParticle4', 'HolyHell/RedParticle', getRandomInt(850, 950), 1200)
    TheNumber4 = getProperty('RedParticle4.x')
    scaleObject('RedParticle4', .06, .06)
    doTweenY('RedParticle4Y', 'RedParticle4', -200, getRandomInt(9, 13))
    doTweenX('RedParticle4X', 'RedParticle4', TheNumber4 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle4', true);

    makeLuaSprite('RedParticle5', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
    TheNumber5 = getProperty('RedParticle5.x')
    scaleObject('RedParticle5', .06, .06)
    doTweenY('RedParticle5Y', 'RedParticle5', -200, getRandomInt(9, 13))
    doTweenX('RedParticle5X', 'RedParticle5', TheNumber5 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle5', true);

    runTimer('New', 3)


    if Invis == true then 
        setProperty('RedParticle.alpha', 0)
        setProperty('RedParticle2.alpha', 0)
        setProperty('RedParticle3.alpha', 0)
        setProperty('RedParticle4.alpha', 0)
        setProperty('RedParticle5.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle.alpha', 1)
        setProperty('RedParticle2.alpha', 1)
        setProperty('RedParticle3.alpha', 1)
        setProperty('RedParticle4.alpha', 1)
        setProperty('RedParticle5.alpha', 1)
    end
end

function onTweenCompleted(tag)
    if tag == 'RedParticleX' then 
            doTweenX('RedParticleX2', 'RedParticle', TheNumber - 50, getRandomInt(2.5, 3), 'sineInOut')
    end 
    if tag == 'RedParticleX2' then 
            doTweenX('RedParticleX', 'RedParticle', TheNumber + 50, getRandomInt(2.5, 3), 'sineInOut')
    end

    if tag == 'RedParticle2X' then 
            doTweenX('RedParticle2X2', 'RedParticle2', TheNumber2 - 50, getRandomInt(2.5, 3), 'sineInOut')
    end 
    if tag == 'RedParticle2X2' then 
            doTweenX('RedParticle2X', 'RedParticle2', TheNumber2 + 50, getRandomInt(2.5, 3), 'sineInOut')
    end

    if tag == 'RedParticle3X' then 
        doTweenX('RedParticle3X2', 'RedParticle3', TheNumber3 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle3X2' then 
        doTweenX('RedParticle3X', 'RedParticle3', TheNumber3 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle4X' then 
        doTweenX('RedParticle4X2', 'RedParticle4', TheNumber4 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle4X2' then 
        doTweenX('RedParticle4X', 'RedParticle4', TheNumber4 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle5X' then 
        doTweenX('RedParticle5X2', 'RedParticle5', TheNumber5 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle5X2' then 
        doTweenX('RedParticle5X', 'RedParticle5', TheNumber5 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle6X' then 
        doTweenX('RedParticle6X2', 'RedParticle6', TheNumber6 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle6X2' then 
        doTweenX('RedParticle6X', 'RedParticle6', TheNumber6 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle7X' then 
        doTweenX('RedParticle7X2', 'RedParticle7', TheNumber7 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle7X2' then 
        doTweenX('RedParticle7X', 'RedParticle7', TheNumber7 + 50, getRandomInt(2.5, 3), 'sineInOut')
end
if tag == 'RedParticle8X' then 
        doTweenX('RedParticle8X2', 'RedParticle8', TheNumber8 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle8X2' then 
        doTweenX('RedParticle8X', 'RedParticle8', TheNumber8 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle9X' then 
        doTweenX('RedParticle9X2', 'RedParticle9', TheNumber9 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle9X2' then 
        doTweenX('RedParticle9X', 'RedParticle9', TheNumber9 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle10X' then 
        doTweenX('RedParticle10X2', 'RedParticle10', TheNumber10 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle10X2' then 
        doTweenX('RedParticle10X', 'RedParticle10', TheNumber10 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle11X' then 
        doTweenX('RedParticle11X2', 'RedParticle11', TheNumber11 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle11X2' then 
        doTweenX('RedParticle11X', 'RedParticle11', TheNumber11 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle12X' then 
        doTweenX('RedParticle12X2', 'RedParticle12', TheNumber12 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle12X2' then 
        doTweenX('RedParticle12X', 'RedParticle12', TheNumber12 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle13X' then 
        doTweenX('RedParticle13X2', 'RedParticle13', TheNumber13 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle13X2' then 
        doTweenX('RedParticle13X', 'RedParticle13', TheNumber13 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle14X' then 
        doTweenX('RedParticle14X2', 'RedParticle14', TheNumber14 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle14X2' then 
        doTweenX('RedParticle14X', 'RedParticle14', TheNumber14 + 50, getRandomInt(2.5, 3), 'sineInOut')
end

if tag == 'RedParticle15X' then 
        doTweenX('RedParticle15X2', 'RedParticle15', TheNumber15 - 50, getRandomInt(2.5, 3), 'sineInOut')
end 
if tag == 'RedParticle15X2' then 
        doTweenX('RedParticle15X', 'RedParticle15', TheNumber15 + 50, getRandomInt(2.5, 3), 'sineInOut')
end


    if tag == 'RedParticleY' then 
            removeLuaSprite('RedParticle', true)
            runTimer('BuckyAgain', .51)
    end

    if tag == 'RedParticle2Y' then 
            removeLuaSprite('RedParticle2', true)
            runTimer('BuckyAgain2', .1)
    end

    if tag == 'RedParticle3Y' then 
        removeLuaSprite('RedParticle3', true)
        runTimer('BuckyAgain3', .1)
end
if tag == 'RedParticle4Y' then 
        removeLuaSprite('RedParticle4', true)
        runTimer('BuckyAgain4', .1)
end
if tag == 'RedParticle5Y' then 
        removeLuaSprite('RedParticle5', true)
        runTimer('BuckyAgain5', .1)
end
if tag == 'RedParticle6Y' then 
        removeLuaSprite('RedParticle6', true)
        runTimer('BuckyAgain6', .1)
end
if tag == 'RedParticle7Y' then 
        removeLuaSprite('RedParticle7', true)
        runTimer('BuckyAgain7', .1)
end
if tag == 'RedParticle8Y' then 
        removeLuaSprite('RedParticle8', true)
        runTimer('BuckyAgain8', .1)
end
if tag == 'RedParticle9Y' then 
        removeLuaSprite('RedParticle9', true)
        runTimer('BuckyAgain9', .1)
end
if tag == 'RedParticle10Y' then 
        removeLuaSprite('RedParticle10', true)
        runTimer('BuckyAgain10', .1)
end
if tag == 'RedParticle11Y' then 
        removeLuaSprite('RedParticle11', true)
        runTimer('BuckyAgain11', .1)
end
if tag == 'RedParticle12Y' then 
        removeLuaSprite('RedParticle12', true)
        runTimer('BuckyAgain12', .1)
end
if tag == 'RedParticle13Y' then 
        removeLuaSprite('RedParticle13', true)
        runTimer('BuckyAgain13', .1)
end
if tag == 'RedParticle14Y' then 
        removeLuaSprite('RedParticle14', true)
        runTimer('BuckyAgain14', .1)
end
if tag == 'RedParticle15Y' then 
        removeLuaSprite('RedParticle15', true)
        runTimer('BuckyAgain15', .1)
end
end

function onTimerCompleted(tag)
    if tag == 'BuckyAgain' then 
            makeLuaSprite('RedParticle', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
            TheNumber = getProperty('RedParticle.x')
            scaleObject('RedParticle', .06, .06)
            doTweenY('RedParticleY', 'RedParticle', -200, getRandomInt(7, 13))
            doTweenX('RedParticleX', 'RedParticle', TheNumber + 50, getRandomInt(3, 6), 'quadInOut')
            addLuaSprite('RedParticle', true);
            if Invis == true then 
                setProperty('RedParticle.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle.alpha', 1)
            end
    end
    if tag == 'BuckyAgain2' then 
        makeLuaSprite('RedParticle2', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
    TheNumber2 = getProperty('RedParticle2.x')
    scaleObject('RedParticle2', .06, .06)
    doTweenY('RedParticle2Y', 'RedParticle2', -200, getRandomInt(9, 13))
    doTweenX('RedParticle2X', 'RedParticle2', TheNumber2 + 50, getRandomInt(1, 3), 'sineInOut')
    addLuaSprite('RedParticle2', true);
    if Invis == true then 
        setProperty('RedParticle2.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle2.alpha', 1)
    end
end
if tag == 'BuckyAgain3' then 
        makeLuaSprite('RedParticle3', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber3 = getProperty('RedParticle3.x')
    scaleObject('RedParticle3', .06, .06)
    doTweenY('RedParticle3Y', 'RedParticle3', -200, getRandomInt(9, 13))
    doTweenX('RedParticle3X', 'RedParticle3', TheNumber3 + 50, getRandomInt(1, 3), 'sineInOut')
    addLuaSprite('RedParticle3', true);
    if Invis == true then 
        setProperty('RedParticle3.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle3.alpha', 1)
    end
end
if tag == 'BuckyAgain4' then 
        makeLuaSprite('RedParticle4', 'HolyHell/RedParticle', getRandomInt(850, 950), 1200)
        TheNumber4 = getProperty('RedParticle4.x')
        scaleObject('RedParticle4', .06, .06)
        doTweenY('RedParticle4Y', 'RedParticle4', -200, getRandomInt(9, 13))
        doTweenX('RedParticle4X', 'RedParticle4', TheNumber4 + 50, getRandomInt(1, 3), 'sineInOut')
        addLuaSprite('RedParticle4', true);
        if Invis == true then 
                setProperty('RedParticle4.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle4.alpha', 1)
            end
end
if tag == 'BuckyAgain5' then 
        makeLuaSprite('RedParticle5', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
        TheNumber5 = getProperty('RedParticle5.x')
        scaleObject('RedParticle5', .06, .06)
        doTweenY('RedParticle5Y', 'RedParticle5', -200, getRandomInt(9, 13))
        doTweenX('RedParticle5X', 'RedParticle5', TheNumber5 + 50, getRandomInt(1, 3), 'sineInOut')
        addLuaSprite('RedParticle5', true);
        if Invis == true then 
                setProperty('RedParticle5.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle5.alpha', 1)
            end
end
if tag == 'BuckyAgain6' then 
        makeLuaSprite('RedParticle6', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
    TheNumber6 = getProperty('RedParticle6.x')
    scaleObject('RedParticle6', .06, .06)
    doTweenY('RedParticle6Y', 'RedParticle6', -200, getRandomInt(9, 13))
    doTweenX('RedParticle6X', 'RedParticle6', TheNumber6 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle6', true);
    if Invis == true then 
        setProperty('RedParticle6.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle6.alpha', 1)
    end
    
end
if tag == 'BuckyAgain7' then 
        makeLuaSprite('RedParticle7', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
    TheNumber7 = getProperty('RedParticle7.x')
    scaleObject('RedParticle7', .06, .06)
    doTweenY('RedParticle7Y', 'RedParticle7', -200, getRandomInt(9, 13))
    doTweenX('RedParticle7X', 'RedParticle7', TheNumber7 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle7', true);
    if Invis == true then 
        setProperty('RedParticle7.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle7.alpha', 1)
    end
end
if tag == 'BuckyAgain8' then 
        makeLuaSprite('RedParticle8', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
        TheNumber8 = getProperty('RedParticle8.x')
        scaleObject('RedParticle8', .06, .06)
        doTweenY('RedParticle8Y', 'RedParticle8', -200, getRandomInt(9, 13))
        doTweenX('RedParticle8X', 'RedParticle8', TheNumber8 + 50, getRandomInt(2.5, 3), 'sineInOut')
        addLuaSprite('RedParticle8', true);
        if Invis == true then 
                setProperty('RedParticle8.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle8.alpha', 1)
            end
end
if tag == 'BuckyAgain9' then 
        makeLuaSprite('RedParticle9', 'HolyHell/RedParticle', getRandomInt(850, 950), 1200)
    TheNumber9 = getProperty('RedParticle9.x')
    scaleObject('RedParticle9', .06, .06)
    doTweenY('RedParticle9Y', 'RedParticle9', -200, getRandomInt(9, 13))
    doTweenX('RedParticle9X', 'RedParticle9', TheNumber9 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle9', true);
    if Invis == true then 
        setProperty('RedParticle9.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle9.alpha', 1)
    end
end
if tag == 'BuckyAgain10' then 
        makeLuaSprite('RedParticle10', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
        TheNumber10 = getProperty('RedParticle10.x')
        scaleObject('RedParticle10', .06, .06)
        doTweenY('RedParticle10Y', 'RedParticle10', -200, getRandomInt(9, 13))
        doTweenX('RedParticle10X', 'RedParticle10', TheNumber10 + 50, getRandomInt(2.5, 3), 'sineInOut')
        addLuaSprite('RedParticle10', true);
        if Invis == true then 
                setProperty('RedParticle10.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle10.alpha', 1)
            end
end
if tag == 'BuckyAgain11' then 
        makeLuaSprite('RedParticle11', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
    TheNumber11 = getProperty('RedParticle11.x')
    scaleObject('RedParticle11', .06, .06)
    doTweenY('RedParticle11Y', 'RedParticle11', -200, getRandomInt(9, 13))
    doTweenX('RedParticle11X', 'RedParticle11', TheNumber11 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle11', true);
    if Invis == true then 
        setProperty('RedParticle11.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle11.alpha', 1)
    end
end
if tag == 'BuckyAgain12' then 
        makeLuaSprite('RedParticle12', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
        TheNumber12 = getProperty('RedParticle12.x')
        scaleObject('RedParticle12', .06, .06)
        doTweenY('RedParticle12Y', 'RedParticle12', -200, getRandomInt(9, 13))
        doTweenX('RedParticle12X', 'RedParticle12', TheNumber12 + 50, getRandomInt(2.5, 3), 'sineInOut')
        addLuaSprite('RedParticle12', true);
        if Invis == true then 
                setProperty('RedParticle12.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle12.alpha', 1)
            end
end
if tag == 'BuckyAgain13' then 
        makeLuaSprite('RedParticle13', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
        TheNumber13 = getProperty('RedParticle13.x')
        scaleObject('RedParticle13', .06, .06)
        doTweenY('RedParticle13Y', 'RedParticle13', -200, getRandomInt(9, 13))
        doTweenX('RedParticle13X', 'RedParticle13', TheNumber13 + 50, getRandomInt(2.5, 3), 'sineInOut')
        addLuaSprite('RedParticle13', true);
        if Invis == true then 
                setProperty('RedParticle13.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle13.alpha', 1)
            end
end
if tag == 'BuckyAgain14' then 
        makeLuaSprite('RedParticle14', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber14 = getProperty('RedParticle14.x')
    scaleObject('RedParticle14', .06, .06)
    doTweenY('RedParticle14Y', 'RedParticle14', -200, getRandomInt(9, 13))
    doTweenX('RedParticle14X', 'RedParticle14', TheNumber14 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle14', true);
    if Invis == true then 
        setProperty('RedParticle14.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle14.alpha', 1)
    end
    
end
if tag == 'BuckyAgain15' then 
        makeLuaSprite('RedParticle15', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
        TheNumber15 = getProperty('RedParticle15.x')
        scaleObject('RedParticle15', .06, .06)
        doTweenY('RedParticle15Y', 'RedParticle15', -200, getRandomInt(9, 13))
        doTweenX('RedParticle15X', 'RedParticle15', TheNumber15 + 50, getRandomInt(2.5, 3), 'sineInOut')
        addLuaSprite('RedParticle15', true);
    
        if Invis == true then 
                setProperty('RedParticle15.alpha', 0)
            end
            if Show == true then 
                setProperty('RedParticle15.alpha', 1)
            end
    
end

if tag == 'New' then 
        makeLuaSprite('RedParticle6', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
    TheNumber6 = getProperty('RedParticle6.x')
    scaleObject('RedParticle6', .06, .06)
    doTweenY('RedParticle6Y', 'RedParticle6', -200, getRandomInt(9, 13))
    doTweenX('RedParticle6X', 'RedParticle6', TheNumber6 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle6', true);

    makeLuaSprite('RedParticle7', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
    TheNumber7 = getProperty('RedParticle7.x')
    scaleObject('RedParticle7', .06, .06)
    doTweenY('RedParticle7Y', 'RedParticle7', -200, getRandomInt(9, 13))
    doTweenX('RedParticle7X', 'RedParticle7', TheNumber7 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle7', true);

    makeLuaSprite('RedParticle8', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber8 = getProperty('RedParticle8.x')
    scaleObject('RedParticle8', .06, .06)
    doTweenY('RedParticle8Y', 'RedParticle8', -200, getRandomInt(9, 13))
    doTweenX('RedParticle8X', 'RedParticle8', TheNumber8 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle8', true);

    makeLuaSprite('RedParticle9', 'HolyHell/RedParticle', getRandomInt(850, 950), 1200)
    TheNumber9 = getProperty('RedParticle9.x')
    scaleObject('RedParticle9', .06, .06)
    doTweenY('RedParticle9Y', 'RedParticle9', -200, getRandomInt(9, 13))
    doTweenX('RedParticle9X', 'RedParticle9', TheNumber9 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle9', true);

    makeLuaSprite('RedParticle10', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
    TheNumber10 = getProperty('RedParticle10.x')
    scaleObject('RedParticle10', .06, .06)
    doTweenY('RedParticle10Y', 'RedParticle10', -200, getRandomInt(9, 13))
    doTweenX('RedParticle10X', 'RedParticle10', TheNumber10 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle10', true);

    runTimer('New2', 3)
    if Invis == true then 
        setProperty('RedParticle6.alpha', 0)
        setProperty('RedParticle7.alpha', 0)
        setProperty('RedParticle8.alpha', 0)
        setProperty('RedParticle9.alpha', 0)
        setProperty('RedParticle10.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle6.alpha', 1)
        setProperty('RedParticle7.alpha', 1)
        setProperty('RedParticle8.alpha', 1)
        setProperty('RedParticle9.alpha', 1)
        setProperty('RedParticle10.alpha', 1)
    end
end
if tag == 'New2' then 
        makeLuaSprite('RedParticle11', 'HolyHell/RedParticle', getRandomInt(550, 750), 1200)
    TheNumber11 = getProperty('RedParticle11.x')
    scaleObject('RedParticle11', .06, .06)
    doTweenY('RedParticle11Y', 'RedParticle11', -200, getRandomInt(9, 13))
    doTweenX('RedParticle11X', 'RedParticle11', TheNumber11 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle11', true);

    makeLuaSprite('RedParticle12', 'HolyHell/RedParticle', getRandomInt(1050, 1350), 1200)
    TheNumber12 = getProperty('RedParticle12.x')
    scaleObject('RedParticle12', .06, .06)
    doTweenY('RedParticle12Y', 'RedParticle12', -200, getRandomInt(9, 13))
    doTweenX('RedParticle12X', 'RedParticle12', TheNumber12 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle12', true);

    makeLuaSprite('RedParticle13', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber13 = getProperty('RedParticle13.x')
    scaleObject('RedParticle13', .06, .06)
    doTweenY('RedParticle13Y', 'RedParticle13', -200, getRandomInt(9, 13))
    doTweenX('RedParticle13X', 'RedParticle13', TheNumber13 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle13', true);

    makeLuaSprite('RedParticle14', 'HolyHell/RedParticle', getRandomInt(250, 450), 1200)
    TheNumber14 = getProperty('RedParticle14.x')
    scaleObject('RedParticle14', .06, .06)
    doTweenY('RedParticle14Y', 'RedParticle14', -200, getRandomInt(9, 13))
    doTweenX('RedParticle14X', 'RedParticle14', TheNumber14 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle14', true);

    makeLuaSprite('RedParticle15', 'HolyHell/RedParticle', getRandomInt(1450, 1650), 1200)
    TheNumber15 = getProperty('RedParticle15.x')
    scaleObject('RedParticle15', .06, .06)
    doTweenY('RedParticle15Y', 'RedParticle15', -200, getRandomInt(9, 13))
    doTweenX('RedParticle15X', 'RedParticle15', TheNumber15 + 50, getRandomInt(2.5, 3), 'sineInOut')
    addLuaSprite('RedParticle15', true);

    if Invis == true then 
        setProperty('RedParticle11.alpha', 0)
        setProperty('RedParticle12.alpha', 0)
        setProperty('RedParticle13.alpha', 0)
        setProperty('RedParticle14.alpha', 0)
        setProperty('RedParticle15.alpha', 0)
    end
    if Show == true then 
        setProperty('RedParticle11.alpha', 1)
        setProperty('RedParticle12.alpha', 1)
        setProperty('RedParticle13.alpha', 1)
        setProperty('RedParticle14.alpha', 1)
        setProperty('RedParticle15.alpha', 1)
    end
    --runTimer('New2', 5)
end
end

function onStepHit()
        if curStep == 1088 then 
                Show = true 
                Invis = false
                setProperty('RedParticle.alpha', 1)
                setProperty('RedParticle2.alpha', 1)
                setProperty('RedParticle3.alpha', 1)
                setProperty('RedParticle4.alpha', 1)
                setProperty('RedParticle5.alpha', 1)
                setProperty('RedParticle6.alpha', 1)
        setProperty('RedParticle7.alpha', 1)
        setProperty('RedParticle8.alpha', 1)
        setProperty('RedParticle9.alpha', 1)
        setProperty('RedParticle10.alpha', 1)
        setProperty('RedParticle11.alpha', 1)
        setProperty('RedParticle12.alpha', 1)
        setProperty('RedParticle13.alpha', 1)
        setProperty('RedParticle14.alpha', 1)
        setProperty('RedParticle15.alpha', 1)
        end
        if curStep == 1344 then 
                Show = false 
                Invis = true
                setProperty('RedParticle.alpha', 0)
                setProperty('RedParticle2.alpha', 0)
                setProperty('RedParticle3.alpha', 0)
                setProperty('RedParticle4.alpha', 0)
                setProperty('RedParticle5.alpha',0)
                setProperty('RedParticle6.alpha', 0)
        setProperty('RedParticle7.alpha', 0)
        setProperty('RedParticle8.alpha', 0)
        setProperty('RedParticle9.alpha', 0)
        setProperty('RedParticle10.alpha', 0)
        setProperty('RedParticle11.alpha', 0)
        setProperty('RedParticle12.alpha', 0)
        setProperty('RedParticle13.alpha', 0)
        setProperty('RedParticle14.alpha', 0)
        setProperty('RedParticle15.alpha', 0)
        end
end

