function onCreate()
	makeLuaSprite("WeAreNumberRoss", "WeAreNumberRoss", 0, 0)
	setProperty("WeAreNumberRoss.scale.x", screenWidth / getProperty("WeAreNumberRoss.width"))
	setProperty("WeAreNumberRoss.scale.y", screenHeight / getProperty("WeAreNumberRoss.height"))
	addLuaSprite("WeAreNumberRoss", true)
	screenCenter("WeAreNumberRoss")
	doTweenAlpha('camerafade', 'camGame', 0, 0.001, 'linear')
	makeLuaText('text', '', 600, 320, 270)
	addLuaText('text')
	setTextSize('text', 80)	
end

function onCreatePost()
	doTweenAlpha('textdisappear', 'text', 0, 0.001, 'linear')
	for i = 0, getProperty('opponentStrums.length')-1 do
		setPropertyFromGroup('opponentStrums',i,'visible',false)
		setPropertyFromGroup('opponentStrums',i,'y',130)
		setPropertyFromGroup('opponentStrums',i,'x',-9999)
	end
end

function onSongStart()
	doTweenAlpha('textdisappear', 'text', 1, 1, 'quadOut')
end

function onStepHit()
	if curStep == 60 then
		doTweenAlpha('textdisappear', 'text', 0, 0.001, 'quadOut')
	end
end