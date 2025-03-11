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
    opponentNoteSkin('terence')
    end
end