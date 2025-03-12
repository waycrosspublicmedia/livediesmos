local singgf = {"singLEFT", "singDOWN", "singUP", "singRIGHT"}
function onUpdatePost(elapsed)
	for a = 0, getProperty('notes.length') - 1 do
      local noteData = getPropertyFromGroup('notes', a, 'noteData');
      local strumTime = getPropertyFromGroup('notes', a, 'strumTime');
      if getPropertyFromGroup('notes', a, 'noteType') == 'GiggityNotes' then
         setPropertyFromGroup('notes', a, 'alpha', 0.5);
         setPropertyFromGroup("notes", a, "mustPress", true)
if getPropertyFromGroup("notes", a, "isSustainNote") then
setPropertyFromGroup('notes', a, 'offset.y', -30);
end
         if strumTime - getSongPosition() < -30 then
            removeFromGroup("notes" , a , false)
        characterPlayAnim("gf", singgf[(noteData % 4) + 1], false)
setProperty('health', getProperty('health') + 0.01)
	for i = 0, getProperty('playerStrums.length')-1 do
	setPropertyFromGroup('playerStrums', i, 'texture', 'NOTE_assets');
end
         end
      end
end
end