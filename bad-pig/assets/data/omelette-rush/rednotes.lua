function opponentNoteSkin(path)
    if not customrossskin then
    local texture = path

    if checkFileExists('images/'..path..'.png', false) and checkFileExists('images/'..path..'.xml', false) then
        --for i = 0, 3 do setPropertyFromGroup('opponentStrums', i, 'texture', texture) end
        for i = 0, getProperty('unspawnNotes.length') - 1 do
            if not getPropertyFromGroup('unspawnNotes', i, 'mustPress') then
                if getPropertyFromGroup('unspawnNotes', i, 'noteType') == '' then
                    setPropertyFromGroup('unspawnNotes', i, 'texture', texture)
                end
            end
        end
    end
end
end

function onCreatePost()
    if not customrossskin then
        opponentNoteSkin('RedNote')
    end
end

function onCreate()
	--Iterate over all notes
	for i = 0, getProperty('unspawnNotes.length')-1 do
		if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'GF Sing' then --Check if the note on the chart is a Bullet Note
			if not customrossskin then
			setPropertyFromGroup('unspawnNotes', i, 'texture', 'ChuckNote'); --Change texture
			end
			--setPropertyFromGroup('unspawnNotes', i, 'noteSplashHue', 0); --custom notesplash color, why not
			--setPropertyFromGroup('unspawnNotes', i, 'noteSplashSat', -20);
			--setPropertyFromGroup('unspawnNotes', i, 'noteSplashBrt', 1);

			if getPropertyFromGroup('unspawnNotes', i, 'mustPress') then --Doesn't let Dad/Opponent notes get ignored
				setPropertyFromGroup('unspawnNotes', i, 'ignoreNote', false); --Miss has penalties
			end
		end
	end
end
