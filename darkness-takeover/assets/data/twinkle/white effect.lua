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
if dadName == 'CorruptStewiePh1' then
setProperty('health', getProperty('health') - 0.01)
elseif dadName == 'CorruptStewiePh2' then
setProperty('health', getProperty('health') - 0.02)
elseif dadName == 'CorruptStewiePh3' then

setProperty('health', getProperty('health') - 0.03)
end
end
end

function onCreatePost()
			for i = 0, getProperty('unspawnNotes.length')-1 do
				if getPropertyFromGroup('unspawnNotes', i, 'mustPress') == true then
				setPropertyFromGroup('unspawnNotes', i, 'texture', 'GiggityNotes');
end
        if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'StewieShotNotes' then
            setPropertyFromGroup('unspawnNotes', i, 'texture', 'StewieShotNotes'); --Change texture
end
end
end