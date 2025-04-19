pewp = curBpm / 400

function onCreate()
	setPropertyFromClass('flixel.FlxG','sound.music.volume',0)
	setProperty('skipCountdown',true)
	setProperty('vocals.time',0)
	setProperty('gf.visible',false)
end

function goodNoteHit(membersIndex, noteData, noteType, isSustainNote)
    if isSustainNote == true or isSustainNote == false then
        runTimer('literally go away dude', pewp)
    end
end

function onTimerCompleted(tag)
    if tag == 'literally go away dude' then
        playAnim('boyfriend', "idle")
    end
end

function onUpdate()
    if botPlay == true then
        cancelTimer('literally go away dude')
    end
end