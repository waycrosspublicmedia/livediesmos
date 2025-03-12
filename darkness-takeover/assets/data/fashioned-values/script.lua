function opponentNoteHit()
    health = getProperty('health')
    if getProperty('health') > 0.1 then
		if dadName == 'CorruptClevelanddark' then
        setProperty('health', health- 0.005);
		elseif dadName == 'CorruptCleveland' then
        setProperty('health', health- 0.005);
		elseif dadName == 'CorruptCleveland2' then
        setProperty('health', health- 0.005);
		elseif dadName == 'Retep' then
        setProperty('health', health- 0.007);
		elseif dadName == 'Retep and Cleveland' then
        setProperty('health', health- 0.012);


		if noteType == 'GiggityNotes' then
				setProperty('health', health+ 0.0075);
		end
		if noteType == 'JoeNotes' then
				setProperty('health', health+ 0.0075);
		end
		if noteType == 'CleveLandNotes' then
				setProperty('health', health+ 0.0075);
		end


		elseif dadName == 'CorruptCleveland2' then
				setProperty('health', health- 0.002);
		elseif dadName == 'Retep' then
				setProperty('health', health- 0.01);


		if noteType == 'GiggityNotes' then
				setProperty('health', health+ 0.013);
		end
		if noteType == 'JoeNotes' then
				setProperty('health', health+ 0.013);
		end
		if noteType == 'CleveLandNotes' then
				setProperty('health', health+ 0.013);
		end


		end
	end
end


function onCreatePost()
			for i = 0, getProperty('opponentStrums.length')-1 do
				setPropertyFromGroup('opponentStrums', i, 'texture', 'CorruptedNotes');
			end
			for i = 0, getProperty('unspawnNotes.length')-1 do
				if getPropertyFromGroup('unspawnNotes', i, 'mustPress') == false then
				setPropertyFromGroup('unspawnNotes', i, 'texture', 'CorruptedNotes');

				end
        if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'JoeNotes' then
				setPropertyFromGroup('unspawnNotes', i, 'texture', 'JoeNotes');
			end

        if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'CleveLandNotes' then
            setPropertyFromGroup('unspawnNotes', i, 'texture', 'CleveLandNotes'); 
		end
        if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'GiggityNotes' then
            setPropertyFromGroup('unspawnNotes', i, 'texture', 'GiggityNotes'); 
		end
	end
end