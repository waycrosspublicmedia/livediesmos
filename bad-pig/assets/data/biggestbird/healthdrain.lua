function opponentNoteHit(id, direction, noteType, isSustainNote)
	-- Works the same as goodNoteHit, but for Opponent's notes being hit
	-- Function called when you hit a note (after note hit calculations)
	-- id: The note member id, you can get whatever variable you want from this note, example: "getPropertyFromGroup('notes', id, 'strumTime')"
	-- noteData: 0 = Left, 1 = Down, 2 = Up, 3 = Right
	-- noteType: The note type string/tag
	-- isSustainNote: If it's a hold note, can be either true or false
		if getProperty('health') > 0.1 then
			setProperty('health', getProperty('health')-0.02);
		end
end