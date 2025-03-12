function onEvent(n,v1,v2)
	if n == 'Weffect' then
	   makeLuaSprite('flash2', '', 0, 0);
        makeGraphic('flash2',1280,720,'ffffff')
	      addLuaSprite('flash2', true);

	setBlendMode('flash2', 'add')
	setObjectCamera ('flash2', 'other')
	      setProperty('flash2.scale.x',1)
	      setProperty('flash2.scale.y',1)
	      setProperty('flash2.alpha',0)
		setProperty('flash2.alpha',0.2)
		doTweenAlpha('flTw','flash2',0,v1,'linear')
	end
end

-- by latter
YX = false
function onUpdatePost()

setProperty('healthBar.offset.x', getProperty('healthBarBG.offset.x'))

setProperty('healthBar.offset.y', getProperty('healthBarBG.offset.y'))

setProperty('iconP2.offset.x', getProperty('healthBarBG.offset.x'))
setProperty('iconP2.offset.y', getProperty('healthBarBG.offset.y'))

		doTweenAngle('bf', 'iconP1', 0, 0.3, 'linear')
		doTweenAngle('dad', 'iconP2', 0, 0.3, 'linear')
doTweenX('dodo', 'iconP1.scale', 1, 0.2, 'linear')

if YX == true then
doTweenY('dhdY', 'healthBarBG.offset', 0, 0.01, 'linear')
doTweenX('dhdX', 'healthBarBG.offset', 0, 0.01, 'linear')

setProperty('iconP2.offset.y', 0)
setProperty('iconP2.offset.x', 0)
end
end


function onBeatHit()
if curBeat %2 == 0 then
YX = true
runTimer('YXC', 0.1)
	setProperty('iconP1.scale.x', 1.5);
	setProperty('iconP1.angle', 20)
	setProperty('iconP2.scale.x', 1.5);
	setProperty('iconP2.angle', 20)

else
	setProperty('iconP1.scale.x', 0.5);
	setProperty('iconP1.angle', -20)
	setProperty('iconP2.scale.x', 0.5);
	setProperty('iconP2.angle', -20)
YX = true
runTimer('YXC', 0.1)
end
end



function onTimerCompleted(tag)
if tag == 'YXC' then

doTweenY('dhY2', 'healthBarBG.offset',0, 0.01, 'linear')
doTweenX('dhX2', 'healthBarBG.offset',0, 0.01, 'linear')
setProperty('iconP2.offset.y', 0)
setProperty('iconP2.offset.x', 0)
YX = false

end
end

function opponentNoteHit(id, direction, noteType, isSustainNote)
	if Du == getPropertyFromGroup('notes', id, 'strumTime') and not isSustainNote then
cameraShake('camHUD', 0.0, 0.0)
cameraShake('camGame', 0.0, 0.0)
setProperty('camGame.angle', 0)
setProperty('camHUD.angle', 0)
elseif Du == getPropertyFromGroup('notes', id, 'strumTime') and isSustainNote then
cameraShake('camHUD', 0.0, 0.0)
cameraShake('camGame', 0.0, 0.0)

	end
		Du = getPropertyFromGroup('notes', id, 'strumTime')
	end



playvid = 0
function onStepHit()
if curStep %2 == 0 then
playvid = math.random(1, 350)-- 1 out of 100 to order to play the jump scare 

end
end

function onGameOverStart()
if playvid == 1 then--the vid will play if the number is 1
startVideo('Canon darkness takeover ending')
end
end

function onGameOver()
if keyjustPressed 'space' or 'enter' then
startVideo('')
end
end