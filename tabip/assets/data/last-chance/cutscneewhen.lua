local endthefuckingsong = false

function onCreate()
    precacheSound("genocidecutscene")
    precacheSound("picoGasp")
end

function onEndSong()
    if not endthefuckingsong then
        playSound("genocidecutscene", 1, "cutscene")
        runTimer("HUHWHATUH", 3.5)

        return Function_Stop
    else
        return Function_Continue
    end
end

function onTimerCompleted(tag, loops, loopsLeft)
    if tag == "HUHWHATUH" then
        playSound("picoGasp", 1, "WTF")
        endthefuckingsong = true
    end
end

function onSoundFinished(tag)
    if tag == "cutscene" then
        endSong()
    end
end