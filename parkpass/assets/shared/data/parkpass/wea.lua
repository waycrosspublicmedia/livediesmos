
function onSongStart()
doTweenAlpha('permfade','fade', 0, 3, 'cubeIn')

end

function onCreatePost()
    precacheImage('lyric/spritemap1')
    addCharacterToList("i'll",'dad')
    
    runHaxeCode([[
	
    for (no in game.unspawnNotes)
    {
        if(!no.mustPress)
        no.cameras = [game.camGame];
        no.scrollFactor.set(1, 1);
    }

    // opponent and player strums
    for (n in game.opponentStrums)
    {
        n.cameras = [game.camGame];
        n.scrollFactor.set(1, 1);
    }
   
]])
callMethod('noteGroup.remove', {instanceArg('notes')})
end
function onSpawnNote()
    if not getProperty('notes.members[0].mustPress') then
        setObjectOrder('notes.members[0]', 3)
        

    else
        callMethod('add', {instanceArg('notes.members[0]')})
        setObjectCamera('notes.members[0]', 'hud')
    end
end


function onCreate()
	makeLuaSprite('fade', '', 0, 0);
	setObjectCamera('fade', 'hud');
	setProperty('fade.scale.x',2)
	setProperty('fade.scale.y',2)
	setProperty('fade.alpha', 1)
	makeGraphic('fade', 1280, 720, '000000')
	addLuaSprite('fade', false);




setProperty('skipCountdown',true)
setObjectOrder('AA',1)


    setObjectOrder('dadGroup',300)
    setObjectOrder('intro',301)
    
    setObjectOrder('bfhurt',301)
    setObjectOrder('swipe',301)
    
    setObjectOrder('tele',301)
    
    
    
    setObjectOrder('A2',301)
    
    
    setObjectOrder('A1',302)
    
    setObjectOrder('A3',303)
    
    setObjectOrder('A4',304)
    
    setObjectOrder('AA4',305)
    
    setObjectOrder('AAA4',306)
end



function onUpdate()
    if dadName== "i'll" then
    
        setProperty('dad.x',1630)
        setObjectOrder('boyfriendGroup',getObjectOrder('dadGroup')+2)
        setProperty('dad.y',1150)
    end
    for i = 0,3 do
        setPropertyFromGroup('strumLineNotes',i,'x',getProperty('dadGroup.x') + (-10)+ (220 * (i % 4)))
        setPropertyFromGroup('strumLineNotes',i,'y',getProperty('dadGroup.y') - (downscroll and -300 or 300))
end


    for i = 0,3 do
		setPropertyFromGroup('strumLineNotes', i, 'scale.x', 1.1)
		setPropertyFromGroup('strumLineNotes', i, 'scale.y', 1.1)
		setPropertyFromGroup('strumLineNotes', i, 'alpha', 0.5)
		setPropertyFromGroup('strumLineNotes', i, 'alpha', 0.5)
		end
		for i=0, getProperty('notes.length')-1 do
			if not getPropertyFromGroup('notes', i, 'mustPress') then
                if not getPropertyFromGroup('notes',i,'isSustainNote')  then
			if getPropertyFromGroup('notes', i, 'noteType') == '' then
				setPropertyFromGroup('notes', i, 'scale.x', 1.1-0.1)
				setPropertyFromGroup('notes', i, 'scale.y', 1.1-0.1)
            end
			end
		end
	end

end