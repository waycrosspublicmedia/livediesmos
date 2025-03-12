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

function opponentNoteHit(id, direction, noteType, isSustainNote)
if getProperty('health') >= 0.4 then
setProperty('health', getProperty('health') - 0.03)

end
end
playvid = 0
function onStepHit()
if curStep %2 == 0 then
playvid = math.random(1, 350)-- 1 out of 100 to order to play the jump scare 

end
end

function onGameOverStart()
if playvid == 1 then--the vid will play if the number is 1
startVideo('brian griffin jumpscare')
end
end

function onGameOver()
if keyjustPressed 'space' or 'enter' then
startVideo('')
end
end