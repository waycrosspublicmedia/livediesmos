function onCreate()
	makeLuaSprite('background', 'white', -600,-300)
	addLuaSprite('background', false)
	setLuaSpriteScrollFactor('background', 0, 0)

	makeLuaText('You_text', 'YOU', 150, 235, 150)
	addLuaText('You_text')
	setTextSize('You_text', 80)
	setTextFont('You_text', 'CCBattleCry Regular.ttf')
end

function onCreatePost()
	doTweenAlpha('textdisappear', 'You_text', 0, 0.001, 'linear')
	setPropertyFromGroup('playerStrums', 0, 'x', defaultOpponentStrumX0)
	setPropertyFromGroup('playerStrums', 1, 'x', defaultOpponentStrumX1)
	setPropertyFromGroup('playerStrums', 2, 'x', defaultOpponentStrumX2)
	setPropertyFromGroup('playerStrums', 3, 'x', defaultOpponentStrumX3)
	setPropertyFromGroup('playerStrums', 4, 'x', defaultOpponentStrumX4)
	setPropertyFromGroup('opponentStrums', 0, 'x', defaultPlayerStrumX0)
	setPropertyFromGroup('opponentStrums', 1, 'x', defaultPlayerStrumX1)
	setPropertyFromGroup('opponentStrums', 2, 'x', defaultPlayerStrumX2)
	setPropertyFromGroup('opponentStrums', 3, 'x', defaultPlayerStrumX3)
	setPropertyFromGroup('opponentStrums', 4, 'x', defaultPlayerStrumX4)

	doTweenAlpha('realblack.alpha', 'realblack', 1, 0.0001, 'linear');
end

function onStepHit()
	if curStep == 48 then
		doTweenAlpha('textdisappear', 'You_text', 0, 1, 'quadOut')
	end
end

function onSongStart()
	doTweenAlpha('textdisappear', 'You_text', 1, 1, 'quadOut')
end

function onUpdatePost(elapsed)
	if downscroll then
		setProperty('You_text.y', 480);
	end
	if middlescroll then
		setProperty('You_text.visible', false);
		setPropertyFromGroup('playerStrums', 0, 'x', defaultPlayerStrumX0)
		setPropertyFromGroup('playerStrums', 1, 'x', defaultPlayerStrumX1)
		setPropertyFromGroup('playerStrums', 2, 'x', defaultPlayerStrumX2)
		setPropertyFromGroup('playerStrums', 3, 'x', defaultPlayerStrumX3)
		setPropertyFromGroup('playerStrums', 4, 'x', defaultPlayerStrumX4)
		setPropertyFromGroup('opponentStrums', 0, 'x', defaultOpponentStrumX0)
		setPropertyFromGroup('opponentStrums', 1, 'x', defaultOpponentStrumX1)
		setPropertyFromGroup('opponentStrums', 2, 'x', defaultOpponentStrumX2)
		setPropertyFromGroup('opponentStrums', 3, 'x', defaultOpponentStrumX3)
		setPropertyFromGroup('opponentStrums', 4, 'x', defaultOpponentStrumX4)
	end
end