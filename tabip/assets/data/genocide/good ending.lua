local done = false

function onEndSong()
    if not done then
        playMusic("freakyMenu", 1, true)
        playSound("yeyy", 1 , "yeyyy")
        done = true

        makeLuaSprite("goodending", "tabi/goodending", -150 , 0)
        setObjectCamera("goodending", 'other')
        scaleObject("goodending", 0.8, 0.8)
        setObjectOrder("goodending", 100)
        setProperty("goodending.alpha", 0)
        runTimer("goodendinghey", 0.5)
        addLuaSprite("goodending", true)
        return Function_Stop
    end
end

function onTimerCompleted(tag, loops, loopsLeft)
    if tag == 'goodendinghey' then
        doTweenAlpha("goodendingheyy", "goodending", 1, 1, "linear")
        runTimer("end", 7)
    end
    if tag == 'end' then
    endSong()
    end
end