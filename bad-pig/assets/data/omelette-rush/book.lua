
local allowCountdown = false
local book = true

function onStartCountdown()
    if not allowCountdown then
        playMusic('buildingcontraptions', 0, true)
        --playSound('BookAppears', 1)
        musicFadeIn(2)

        setProperty('camHUD.alpha', 0)
        makeAnimatedLuaSprite('book', 'book')
        addAnimationByPrefix('book', 'idle', 'idle', 24, false)
        addLuaSprite('book', true)
        setObjectCamera('book', 'other')
        screenCenter('book')
        setProperty('book.offset.y', 50)
        playAnim('book', 'idle')
        runTimer('stupid', 5)

        makeLuaText('stupid', 'PRESS [SPACE] TO CLOSE', screenWidth, 0, screenHeight-100)
        setTextAlignment('stupid', 'center')
        setObjectCamera('stupid', 'camOther')
        setTextSize('stupid', 25)
        setProperty('stupid.alpha', 0)
        addLuaText('stupid')
        --
        return Function_Stop
    end
end
function onTimerCompleted(tag, loops, loopsLeft)
    if tag == 'stupid' and book then
        doTweenAlpha('stupidIn', 'stupid', 1, 1)
    end
end
function onUpdate(elapsed)
    if book then
        if keyJustPressed('space') then
            book = false
            playSound('BookDisappears', 1)
            doTweenAlpha('bookOut', 'book', 0, 1)
            doTweenAlpha('stupidOut', 'stupid', 0, 1)
            doTweenAlpha('hudIn', 'camHUD', 1, 1)
            musicFadeOut(1)
            allowCountdown = true
            startCountdown()
        end
    end
end