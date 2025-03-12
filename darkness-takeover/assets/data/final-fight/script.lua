function onCreatePost()
setProperty('camGame.alpha', 0)
setProperty('camHUD.alpha', 0)
setProperty('gf.y', getProperty('gf.y') - 50)
setProperty('gf.x', getProperty('gf.x') + 900)
setProperty('gf.color', getColorFromHex('7B7B7B'))
addCharacterToList('peterCorruptFF', 'boyfriend')
addCharacterToList('peterFF', 'boyfriend')

addCharacterToList('peterCorruptErnieDark', 'boyfriend')
addCharacterToList('ErnieDarkFF', 'dad')

	makeLuaSprite('1Bar', nil, 0, -190)
	makeGraphic('1Bar', 1280, 180, '000000')
	setObjectCamera('1Bar', 'other')
	addLuaSprite('1Bar', false)

	makeLuaSprite('2Bar', nil, 0, 750)
	makeGraphic('2Bar', 1280, 180, '000000')
	setObjectCamera('2Bar', 'other')
	addLuaSprite('2Bar', false)

cameraSetTarget('gf')
end
follow = false
eventchang = false
function onSongStart()
setProperty('camGame.alpha', 1)
setProperty('camHUD.alpha', 1)
cameraFlash('camOther', 'ffffff', 1, true)
end

bet = false
function onBeatHit()
if curBeat == 64 then
bet = 1
end

if bet == 1 then
if curBeat %2 == 0 then
triggerEvent('Add Camera Zoom', 0.04,0.05)
else
triggerEvent('Add Camera Zoom', 0.04,0.05)
end
end

if bet == 2 then
if curBeat %2 == 0 then
triggerEvent('Add Camera Zoom', 0.04,0.05)
cameraShake('camHUD', getRandomFloat(0.01, 0.05), 0.05)
cameraShake('camGame', getRandomFloat(0.01, 0.05), 0.05)
else
triggerEvent('Add Camera Zoom', 0.04,0.05)
cameraShake('camHUD', getRandomFloat(0.01, 0.05), 0.05)
cameraShake('camGame', getRandomFloat(0.01, 0.05), 0.05)
end
end
end
followgf = false
function onStepHit()
if curStep == 768 then
bet = false
doTweenY('i', '1Bar', -90, 2, 'linear')
doTweenY('i2', '2Bar', 640, 2, 'linear')
triggerEvent('Change Character', 'boyfriend', 'peterCorruptFF')
	for i = 0, getProperty('playerStrums.length')-1 do
	setPropertyFromGroup('playerStrums', i, 'texture', 'CorruptedNotes');
end
cameraFlash('camOther', 'ffffff', 3, true)
noteTweenAlpha('DADX1',0, 0, 2, 'linear');
noteTweenAlpha('DADX2',1, 0, 2, 'linear');
noteTweenAlpha('DADX3',2, 0, 2, 'linear');
noteTweenAlpha('DADX4',3, 0, 2, 'linear');
setProperty('defaultCamZoom', getProperty('defaultCamZoom') + 0.1)
if downscroll then
noteTweenY('BFX',4, getPropertyFromGroup('strumLineNotes', 4, 'y') - 50, 2, 'linear');
noteTweenY('BFX2',5, getPropertyFromGroup('strumLineNotes', 5, 'y') - 50, 2, 'linear');
noteTweenY('BFX3',6, getPropertyFromGroup('strumLineNotes', 6, 'y') - 50, 2, 'linear');
noteTweenY('BFX4',7, getPropertyFromGroup('strumLineNotes', 7, 'y') - 50, 2, 'linear');

else

noteTweenY('BFX',4, getPropertyFromGroup('strumLineNotes', 4, 'y') + 50, 2, 'linear');
noteTweenY('BFX2',5, getPropertyFromGroup('strumLineNotes', 5, 'y') + 50, 2, 'linear');
noteTweenY('BFX3',6, getPropertyFromGroup('strumLineNotes', 6, 'y') + 50, 2, 'linear');
noteTweenY('BFX4',7, getPropertyFromGroup('strumLineNotes', 7, 'y') + 50, 2, 'linear');

end

elseif curStep == 784 or curStep == 832 or curStep == 848 then
setProperty('defaultCamZoom', getProperty('defaultCamZoom') + 0.1)

elseif curStep == 800 or curStep == 864 then
setProperty('defaultCamZoom', getProperty('defaultCamZoom') - 0.1)

elseif curStep == 896 or curStep == 912 or curStep == 928 or curStep == 944 or curStep == 960 or curStep == 976 or curStep == 992 or curStep == 1008 then

setProperty('defaultCamZoom', getProperty('defaultCamZoom') + 0.05)

elseif curStep == 1024 or curStep == 1040 or curStep == 1056 or curStep == 1072 or curStep == 1088 or curStep == 1104 or curStep == 1120 or curStep == 1136 then

setProperty('defaultCamZoom', getProperty('defaultCamZoom') - 0.05)

elseif curStep == 1152 then

setProperty('defaultCamZoom', 0.6)
doTweenY('i', '1Bar', -190, 2, 'linear')
doTweenY('i2', '2Bar', 750, 2, 'linear')
triggerEvent('Change Character', 'boyfriend', 'peterFF')
cameraFlash('camOther', 'ffffff', 3, true)
if middlescroll then
noteTweenAlpha('DADX1',0, 0.5, 2, 'linear');
noteTweenAlpha('DADX2',1, 0.5, 2, 'linear');
noteTweenAlpha('DADX3',2, 0.5, 2, 'linear');
noteTweenAlpha('DADX4',3, 0.5, 2, 'linear');
else
noteTweenAlpha('DADX1',0, 1, 2, 'linear');
noteTweenAlpha('DADX2',1, 1, 2, 'linear');
noteTweenAlpha('DADX3',2, 1, 2, 'linear');
noteTweenAlpha('DADX4',3, 1, 2, 'linear');
end

if downscroll then
noteTweenY('BFX',4, getPropertyFromGroup('strumLineNotes', 4, 'y') + 50, 2, 'linear');
noteTweenY('BFX2',5, getPropertyFromGroup('strumLineNotes', 5, 'y') + 50, 2, 'linear');
noteTweenY('BFX3',6, getPropertyFromGroup('strumLineNotes', 6, 'y') + 50, 2, 'linear');
noteTweenY('BFX4',7, getPropertyFromGroup('strumLineNotes', 7, 'y') + 50, 2, 'linear');

else
noteTweenY('BFX',4, getPropertyFromGroup('strumLineNotes', 4, 'y') - 50, 2, 'linear');
noteTweenY('BFX2',5, getPropertyFromGroup('strumLineNotes', 5, 'y') - 50, 2, 'linear');
noteTweenY('BFX3',6, getPropertyFromGroup('strumLineNotes', 6, 'y') - 50, 2, 'linear');
noteTweenY('BFX4',7, getPropertyFromGroup('strumLineNotes', 7, 'y') - 50, 2, 'linear');


end

elseif curStep == 1408 then
setProperty('cameraSpeed', 2)
follow = true
elseif curStep == 1536 then
setProperty('cameraSpeed', 0.3)
follow = false

elseif curStep == 1664 or curStep == 1680 then
setProperty('defaultCamZoom', 0.7)
cameraShake('camHUD', 1, 0.03)

elseif curStep == 1696 or curStep == 1712 then
setProperty('defaultCamZoom', 0.6)
cameraShake('camHUD', 1, 0.03)

elseif curStep == 1728 or curStep == 1744 then
setProperty('defaultCamZoom', 0.7)
cameraShake('camHUD', 1, 0.03)

elseif curStep == 1760 or curStep == 1776 then
setProperty('defaultCamZoom', 0.6)
cameraShake('camHUD', 1, 0.03)
elseif curStep == 1920 then
doTweenAlpha('dudu', 'camGame', 0, 1, 'linear')
doTweenAlpha('duvdu', 'camHUD', 0, 1, 'linear')

elseif curStep == 1951 then

eventchang = true
elseif curStep == 1984 then
triggerEvent('Change Character', 'boyfriend', 'peterCorruptFF')
removeLuaSprite('Airport', true)
setProperty('FuckedAirport.visible', true)
cameraFlash('camOther', 5, '000000', true)

elseif curStep == 1985 then
setProperty('boyfriend.color', getColorFromHex('7B7B7B'))
setProperty('dad.color', getColorFromHex('7B7B7B'))


elseif curStep == 2112 then
setProperty('camGame.alpha', 1)
setProperty('camHUD.alpha', 1)
doTweenAlpha('dudu', 'camGame', 1, 0.5, 'linear')
doTweenAlpha('duvdu', 'camHUD', 1, 0.5, 'linear')
bet = 2
eventchang = false
elseif curStep == 2490 then

elseif curStep == 2496 then
setProperty('defaultCamZoom', 0.8)
setProperty('cameraSpeed', 2)
doTweenX('getoverhere', 'gf', getProperty('gf.x') - 800, 1, 'linear')
followgf = true
elseif curStep == 2498 then
setProperty('cameraSpeed', 0.3)
elseif curStep == 2510 then
followgf = false
elseif curStep == 3236 then
setProperty('camGame.alpha', 0)
setProperty('camHUD.alpha', 0)

end
end

function onEvent(name, value1, value2)
if eventchang then
if name == 'Add Camera Zoom' then
setProperty('camGame.alpha', 1)
setProperty('camHUD.alpha', 1)
doTweenAlpha('dudu', 'camGame', 0, 0.5, 'linear')
doTweenAlpha('duvdu', 'camHUD', 0, 0.5, 'linear')

end
end
end

ot = true
local shakethatass = 0
function onUpdate()
shakethatass = getRandomInt(-2,5)
if follow then
if mustHitSection then
cameraSetTarget('boyfriend')
else
cameraSetTarget('dad')
end
end
if followgf then
cameraSetTarget('gf')
end

if ot and boyfriendName == 'peterCorruptFF' then
ot = false
	for i = 0, getProperty('playerStrums.length')-1 do
	setPropertyFromGroup('playerStrums', i, 'texture', 'CorruptedNotes');
end

elseif not ot and boyfriendName == 'peterFF' then
ot = true
	for i = 0, getProperty('playerStrums.length')-1 do
	setPropertyFromGroup('playerStrums', i, 'texture', 'NOTE_assets');

end
end

end


function opponentNoteHit(id, direction, noteType, isSustainNote)
    health = getProperty('health')


if shakethatass > 2 then
cameraShake('camGame',getRandomFloat(0.01, 0.05), 0.05)
triggerEvent('Add Camera Zoom', 0.02,0.03)
end

if shakethatass > 4 then
cameraShake('camHUD', getRandomFloat(0.01, 0.05), 0.05)
triggerEvent('Add Camera Zoom', 0.02,0.03)
end

    if getProperty('health') > 0.1 then
        setProperty('health', health- 0.015);
    end
end
