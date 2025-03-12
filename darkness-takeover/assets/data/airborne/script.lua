function onCreate()
addCharacterToList('Corruptgmire', 'dad')
addCharacterToList('quagmire2', 'boyfriend')
addCharacterToList('quagmirediff', 'boyfriend')

end

function onCreatePost()
makeAnimatedLuaSprite('boo', 'characters/Corruptgmire', getProperty('boyfriend.x') - 200, getProperty('boyfriend.y') - 300);
	addAnimationByPrefix('boo', 'IDLE', 'Idle', 24, true);

doTweenColor('b', 'boo', '000000', 0.01, 'linear')
setProperty('boo.flipX', true)
setProperty('boo.visible', false)
	scaleObject('boo', 1.5, 1.5);
	addLuaSprite('boo', false);

addLuaScript('data/airborne/white effect')
addLuaScript('custom_events/Black effect')
		makeLuaSprite('WBG', nil, 0, 0)
		makeGraphic('WBG',1280,720,'ffffff')
		addLuaSprite('WBG', false)
scaleObject('WBG', 1, 1);
setObjectCamera('WBG', 'other')
setProperty('WBG.alpha',0)
addLuaSprite('WBG', true)

doTweenZoom('cam', 'camGame', 50, 0.01, 'linear')
end

function onSongStart()


originaldadx = getProperty('dad.x')
originaldady = getProperty('dad.y')

originalbfx = getProperty('boyfriend.x')

originalgfx = getProperty('gf.x')
originalgfy = getProperty('gf.y')

originalClevx = getProperty('Cleveland.x')

doTweenZoom('cam', 'camGame', 0.71, 1, 'linear')
setProperty('boo.alpha', 0)
oy1 = getPropertyFromGroup('strumLineNotes', 4, 'y')
ox1 = getPropertyFromGroup('strumLineNotes', 4, 'x')
oy2 = getPropertyFromGroup('strumLineNotes', 5, 'y')
ox2 = getPropertyFromGroup('strumLineNotes', 5, 'x')
oy3 = getPropertyFromGroup('strumLineNotes', 6, 'y')
ox3 = getPropertyFromGroup('strumLineNotes', 6, 'x')
oy4 = getPropertyFromGroup('strumLineNotes', 7, 'y')
ox4 = getPropertyFromGroup('strumLineNotes', 7, 'x')

end

cutscene = 0

function onUpdate()

for n = 0,3 do
setPropertyFromGroup('strumLineNotes', n, 'alpha', 0)
end

if curStep < 1 then
setPropertyFromGroup('strumLineNotes', 4, 'x', 415)
setPropertyFromGroup('strumLineNotes', 5, 'x', 525)
setPropertyFromGroup('strumLineNotes', 6, 'x', 635)
setPropertyFromGroup('strumLineNotes', 7, 'x', 745)
end
if dadName == 'Corruptgmire' then
	setProperty('songLength', getProperty('songLength')+getRandomInt(11000, -10000))
end

if cutscene == 1 then
setProperty('camFollow.x', 2600)
setProperty('camFollow.y', 750)
elseif cutscene == 2 then--peter
setProperty('camFollow.x', 1350)
setProperty('camFollow.y', 750)
elseif cutscene == 3 then--joe
setProperty('camFollow.x', 1450)
setProperty('camFollow.y', 700)
elseif cutscene == 4 then--clev
setProperty('camFollow.x', 1300)
setProperty('camFollow.y', 800)

end
end

stp = 3
N = 0
C = false
effect = true
movecamer = false
follow = false
shake = false
gost = falseee
valnote = 69
function onStepHit()
if curStep %stp == 0 then
if effect == true then
triggerEvent('Add Camera Zoom', '0.2', '0.1')
triggerEvent('Weffect', '0.3')
doTweenAngle('2', 'camGame', 0, 0.5, 'quadInOut')
doTweenAngle('3', 'camHUD', 0, 0.5, 'quadInOut')
if N == 0 then
setProperty('camGame.angle', 10)
setProperty('camHUD.angle', 10)

N = 1
else
setProperty('camGame.angle', -10)
setProperty('camHUD.angle', -10)
N = 0
end
end

noteTweenY('BFY11',4, oy1 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenX('BFX11',4, ox1 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenY('BFY211',5, oy2 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenX('BFX211',5, ox2 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenY('BFY311',6, oy3 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenX('BFX311',6, ox3 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenY('BFY411',7, oy4 - getRandomInt(-valnote, valnote), 0.01, 'linear');
noteTweenX('BFX411',7, ox4 - getRandomInt(-valnote, valnote), 0.01, 'linear');


end
if curStep == 3 then
C = true

elseif curStep == 9 or curStep == 24 or curStep == 44 or curStep == 57 or curStep == 72 or curStep == 92 or curStep == 108 or curStep == 120 or curStep == 425 or curStep == 430 or curStep == 438 then
stp = 2

elseif curStep == 16 or curStep == 32 or curStep == 48 or curStep == 64 or curStep == 80 or curStep == 96 or curStep == 112 or curStep == 368 or curStep == 416 or curStep == 432 then
stp = 3

elseif curStep == 128 then
stp = 5
effect = false


doTweenAngle('2', 'camGame', 0, 0.5, 'quadInOut')
doTweenAngle('3', 'camHUD', 0, 0.5, 'quadInOut')
movecamer = true

setProperty('skystill.alpha', 0)
setProperty('sky.alpha', 1)

doTweenZoom('4', 'camGame', 1.5, 4, 'quadInOut')
doTweenAlpha('5', 'sky', 0, 2.5, 'quadInOut')
doTweenAlpha('6', 'Bg1', 0, 4.5, 'quadInOut')
doTweenAlpha('7', 'gf', 0, 4.5, 'quadInOut')
doTweenAlpha('8', 'boyfriend', 0, 4.5, 'quadInOut')
doTweenAlpha('9', 'Cleveland', 0, 4.5, 'quadInOut')

cutscene = 2

elseif curStep == 160 then
doTweenAlpha('92', 'Peter', 0, 1, 'quadInOut')
doTweenAlpha('7', 'gf', 1, 1, 'quadInOut')
doTweenZoom('4', 'camGame', 1.5, 4, 'quadInOut')
cutscene = 3

elseif curStep == 192 then
doTweenAlpha('9', 'gf', 0, 1, 'quadInOut')
doTweenAlpha('8', 'boyfriend', 1, 1, 'quadInOut')
cutscene = false
doTweenZoom('4', 'camGame', 1.5, 4, 'quadInOut')

elseif curStep == 224 then
doTweenAlpha('9', 'boyfriend', 0, 1, 'quadInOut')
doTweenAlpha('8', 'Cleveland', 1, 1, 'quadInOut')
doTweenZoom('4', 'camGame', 1.5, 4, 'quadInOut')
cutscene = 4

elseif curStep == 256 then


doTweenZoom('4', 'camGame', 1.3, 1, 'quadInOut')
setProperty('defaultCamZoom', 1.3)
doTweenAlpha('8', 'Cleveland', 0, 1, 'quadInOut')
stp = 3
effect = true
cutscene = 1

elseif curStep == 272 then
doTweenZoom('4', 'camGame', 1, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 1)
doTweenAlpha('5', 'sky', 1, 0.5, 'quadInOut')
doTweenAlpha('6', 'Bg1', 1, 0.5, 'quadInOut')

doTweenAlpha('7', 'gf', 1, 0.5, 'quadInOut')
doTweenAlpha('8', 'boyfriend', 1, 0.5, 'quadInOut')
doTweenAlpha('9', 'Cleveland', 1, 0.5, 'quadInOut')
doTweenAlpha('10', 'Peter', 1, 0.5, 'quadInOut')
cutscene = 0

elseif curStep == 288 then

doTweenZoom('4', 'camGame', 1.3, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 1.3)
stp = 3
cutscene = 3

elseif curStep == 304 then
doTweenZoom('4', 'camGame', 1, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 1)

elseif curStep == 320 then
cutscene = false
doTweenZoom('4', 'camGame', 0.71, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.71)

elseif curStep == 336 then
doTweenZoom('4', 'camGame', 0.91, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.91)

elseif curStep == 352 then
doTweenZoom('4', 'camGame', 0.71, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.71)
follow = bf
cutscene = 2
elseif curStep == 358 then
stp = 4
elseif curStep == 368 then
cutscene = 3
elseif curStep == 384 then
stp = 0
cameraFlash('camOther', 'ffffff', 1, true)
follow = false
effect = false
cutscene = false

elseif curStep == 424 or curStep == 427 then
stp = 1
elseif curStep == 447 then

triggerEvent('Black effect', '1')

setProperty('iconP2.alpha', 0)
setProperty('iconP1.alpha', 0)
setProperty('scoreTxt.alpha', 0)
setProperty('timeBar.alpha', 0)
setProperty('healthBar.alpha', 0)
setProperty('sky.alpha', 0)
setProperty('Bg1.alpha', 0)
setProperty('boyfriend.alpha', 0)
setProperty('gf.alpha', 0)
setProperty('Peter.alpha', 0)
setProperty('Cleveland.alpha', 0.5)
setProperty('dad.alpha', 0.5)
setProperty('dad.x', 1760)
runTimer('moveo', 0.1)
follow = bf
doTweenZoom('4', 'camGame', 0.91, 0.01, 'quadInOut')
setProperty('defaultCamZoom', 0.91)

elseif curStep == 448 then
stp = 4

elseif curStep == 512 then
triggerEvent('Black effect', '1')
setProperty('Cleveland.alpha', 0)
setProperty('dad.alpha', 0)
setProperty('boyfriend.alpha', 0.5)
setProperty('quagmirecool.x', originalbfx + 500)

elseif curStep == 576 then

triggerEvent('Black effect', '0.5')
setProperty('gf.alpha', 0.5)
setProperty('quagmirecool.alpha', 0.5)
setProperty('boyfriend.alpha', 0)
setProperty('gf.x', originalgfx - 500)

setProperty('dad.x', originaldadx)
setProperty('Cleveland.x', originalClevx)

runTimer('moveo2', 0.1)

elseif curStep == 632 then
doTweenAlpha('ii', 'WBG', 1, 0.8, 'linear')

elseif curStep == 640 then

setProperty('WBG.visible', false)
cameraFlash('camOther', 'ffffff', 1, true)
stp = 3
follow = false
effect = true
setProperty('boo.visible', true)

setProperty('quagmirecool.alpha', 0)
setProperty('sky.alpha', 1)
setProperty('effectd_Anm.alpha', 0.3)
setProperty('Bg1.alpha', 1)
setProperty('boyfriend.alpha', 1)
setProperty('gf.alpha', 1)
setProperty('Peter.alpha', 1)
setProperty('Cleveland.alpha', 1)
setProperty('dad.alpha', 1)
triggerEvent('Change Character', 'boyfriend', 'quagmire2')
doTweenX('move3', 'boyfriend', originalbfx, 0.01, 'linear')
doTweenX('move4', 'gf', originalgfx, 0.01, 'linear')
doTweenY('move42', 'gf', originalgfy, 0.01, 'linear')
shake = true
setProperty('boyfriend.x', originalbfx)
setProperty('gf.x', originalgfx)
			for i = 0, getProperty('playerStrums.length')-1 do
				setPropertyFromGroup('playerStrums', i, 'texture', 'CorruptedNotes');
			end
change = true
doTweenAlpha('iconP1', 'iconP1', 1, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 1, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 1, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 1, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 1, 0.001, 'linear')
elseif curStep == 800 then
cutscene = 2
elseif curStep == 808 then
cutscene = 3
setProperty('defaultCamZoom', 0.75)
elseif curStep == 816 then
cutscene = 2
setProperty('defaultCamZoom', 0.91)
elseif curStep == 832 then
cutscene = false
elseif curStep == 864 then
cutscene = 2
elseif curStep == 880 then
cutscene = 3
setProperty('WBG.alpha', 0)
setProperty('WBG.visible', true)
doTweenZoom('4', 'camGame', 0.81, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.81)
stp = 0
effect = false
elseif curStep == 888 then
doTweenZoom('4', 'camGame', 0.91, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.91)
elseif curStep == 892 then
doTweenZoom('4', 'camGame', 1.1, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 1.1)

elseif curStep == 896 then
doTweenZoom('4', 'camGame', 0.81, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.81)
cameraFlash('camOther', 'ffffff', 1, true)
stp = 5
cutscene = false
elseif curStep == 912 then
doTweenZoom('4', 'camGame', 0.71, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.71)
elseif curStep == 928 then
doTweenZoom('4', 'camGame', 0.91, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.91)
elseif curStep == 944 then
doTweenZoom('4', 'camGame', 1.1, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 1.1)
elseif curStep == 960 then
doTweenZoom('4', 'camGame', 0.81, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.81)
effect = true
elseif curStep == 968 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')
elseif curStep == 972 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')
elseif curStep == 975 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')

elseif curStep == 976 then
doTweenZoom('4', 'camGame', 0.71, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.71)
elseif curStep == 992 then

triggerEvent('Add Camera Zoom', '0.4', '0.2')
elseif curStep == 1000 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')
elseif curStep == 1004 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')
elseif curStep == 1006 then
triggerEvent('Add Camera Zoom', '0.4', '0.2')

elseif curStep == 1008 then
doTweenZoom('4', 'camGame', 1.1, 5, 'quadInOut')
setProperty('defaultCamZoom', 1.1)
elseif curStep == 1019 then
setProperty('quagmirecool.flipX', false)
setProperty('quagmirecool.x', originalbfx)

elseif curStep == 1020 then
setProperty('boyfriend.alpha', 0)
setProperty('quagmirecool.alpha', 1)
objectPlayAnimation('quagmirecool', 'SPECIAL', true)
effect = false
stp = 0
shake = false


elseif curStep == 1024 then
doTweenZoom('4', 'camGame', 0.71, 0.01, 'quadInOut')
setProperty('defaultCamZoom', 0.71)
cameraFlash('camOther', 'ffffff', 5, true)
doTweenAlpha('iconP1', 'iconP1', 0, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 0, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 0, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 0, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 0, 0.001, 'linear')
change = false
removeLuaSprite('boo', true)
removeLuaSprite('Bg1', true)
removeLuaSprite('sky', true)
removeLuaSprite('quagmirecool', true)
follow = bf
setProperty('effectd_Anm.alpha', 0)
setProperty('white.alpha', 1)

doTweenColor('1c', 'Cleveland', '000000', 0.01, 'linear')
doTweenColor('2c', 'dad', '000000', 0.01, 'linear')

doTweenColor('3c', 'gf', '000000', 0.01, 'linear')
doTweenColor('4c', 'Peter', '000000', 0.01, 'linear')
setProperty('Peter.visible', false)
setProperty('gf.visible', false)

setProperty('boyfriend.alpha', 0)
elseif curStep == 1084 then
setProperty('Peter.visible', true)
setProperty('gf.visible', true)
setProperty('gf.alpha', 0)
setProperty('Peter.alpha', 0)
setProperty('dad.alpha', 0)
setProperty('dad.x', originalbfx + 200)

elseif curStep == 1088 then
doTweenAlpha('c1', 'Peter', 1, 2, 'linear')

elseif curStep == 1120 then
doTweenAlpha('c2', 'gf', 1, 2, 'linear')

elseif curStep == 1144 then
doTweenAlpha('c2', 'gf', 0, 1, 'linear')
doTweenAlpha('c1', 'Peter', 0, 1, 'linear')
doTweenAlpha('c4', 'Cleveland', 0, 1, 'linear')
elseif curStep == 1152 then
doTweenAlpha('c5', 'dad', 1, 1, 'linear')
elseif curStep == 1212 then
doTweenAlpha('c5', 'dad', 0, 1, 'linear')
elseif curStep == 1216 then
doTweenAlpha('c4', 'Cleveland', 1, 1, 'linear')
elseif curStep == 1221 then
setProperty('dad.x', originalbfx - 200)
setProperty('dad.y', originalbfy - 50)
elseif curStep == 1222 then
doTweenAlpha('c5', 'dad', 0.5, 1, 'linear')
elseif curStep == 1229 then
doTweenAlpha('c5', 'dad', 0, 0.5, 'linear')
elseif curStep == 1248 then
doTweenAlpha('c4', 'Cleveland', 0, 0.5, 'linear')
doTweenAlpha('c9', 'Peter', 1, 0.5, 'linear')
elseif curStep == 1252 then
doTweenAlpha('c9', 'Peter', 0, 0.5, 'linear')
doTweenAlpha('c7', 'gf', 1, 0.5, 'linear')
elseif curStep == 1256 then
doTweenAlpha('c9', 'Cleveland', 1, 0.5, 'linear')
doTweenAlpha('c7', 'gf', 0, 0.5, 'linear')
elseif curStep == 1260 then
doTweenAlpha('c4', 'Cleveland', 0, 0.5, 'linear')
doTweenAlpha('c9', 'Peter', 1, 0.5, 'linear')
elseif curStep == 1264 then
doTweenAlpha('c9', 'Peter', 0, 0.5, 'linear')
doTweenAlpha('c7', 'gf', 1, 0.5, 'linear')
elseif curStep == 1272 then
doTweenAlpha('c9', 'Peter', 1, 0.5, 'linear')
doTweenAlpha('c4', 'Cleveland', 1, 0.5, 'linear')
setProperty('dad.x', originaldadx)
setProperty('dad.y', originalbfy)
elseif curStep == 1280 then
doTweenAlpha('ii', 'WBG', 1, 2.5, 'linear')
elseif curStep == 1334 then
setProperty('camGame.alpha', 0)
triggerEvent('Change Character', 'dad', 'Corruptgmire')
triggerEvent('Change Character', 'boyfriend', 'quagmirediff')
setProperty('Bg2.alpha', 1)
setProperty('sparks.alpha', 1)
setProperty('hue.alpha', 1)

follow = false

elseif curStep == 1337 then
cameraShake('camOther', 0.03, 2)
setProperty('boyfriend.alpha', 0)
setProperty('boyfriend.x', originalbfx)
elseif curStep == 1344 then
setProperty('camGame.alpha', 1)
setProperty('dad.alpha', 1)
removeLuaSprite('WBG', true)
removeLuaSprite('white', true)
cameraFlash('camOther', 'ffffff', 1, true)
doTweenAlpha('iconP1', 'iconP1', 1, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 1, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 1, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 1, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 1, 0.001, 'linear')
setProperty('effectd_Anm.alpha', 0.5)
effect = true
stp = 3
shake = true
doTweenColor('1c', 'Cleveland', '5B5B5B', 0.01, 'linear')
doTweenColor('3c', 'gf', '5B5B5B', 0.01, 'linear')
doTweenColor('4c', 'Peter', '5B5B5B', 0.01, 'linear')
elseif curStep == 1408 then
cutscene = 3
elseif curStep == 1592 then
cameraFlash('camOther', 'ffffff', 3, true)
setProperty('camGame.visible', false)
setProperty('camHUD.alpha', 0.5)
stp = 0
setProperty('oringpiss.alpha', 0.3)
elseif curStep == 1645 then
doTweenAlpha('camo', 'camHUD', 0, 1, 'quadInOut')
doTweenAlpha('camo2', 'camOther', 0, 1, 'quadInOut')
end
end


function onUpdatePost(elapsed)
if C == true then
noteTweenY('BFY',4, oy1, 0.1, 'linear');
noteTweenX('BFX',4, ox1, 0.1, 'linear');
noteTweenY('BFY2',5, oy2, 0.1, 'linear');
noteTweenX('BFX2',5, ox2, 0.1, 'linear');
noteTweenY('BFY3',6, oy3, 0.1, 'linear');
noteTweenX('BFX3',6, ox3, 0.1, 'linear');
noteTweenY('BFY4',7, oy4, 0.1, 'linear');
noteTweenX('BFX4',7, ox4, 0.1, 'linear');
end


if follow == bf then
cameraSetTarget('boyfriend')
end
if shake == true then
cameraShake('camGame', 0.005, 1)
cameraShake('camHUD', 0.005, 1)
end
end

function goodNoteHit(id, direction, noteType, isSustainNote)

if noteType == 'GiggityNotes' then
doTweenAlpha('b', 'boo', 0.5, 1, 'linear')
end

if change == true then
			for i = 0, getProperty('playerStrums.length')-1 do
if noteType == 'GiggityNotes' then

		setPropertyFromGroup('playerStrums', i, 'texture', 'CorruptedNotes');
else
		setPropertyFromGroup('playerStrums', i, 'texture', 'NOTE_assets');
end
end
end
end

function onTimerCompleted(t)
if t == 'moveo' then
doTweenX('move', 'dad', 910, 8.5, 'linear')
doTweenX('move2', 'Cleveland', 1933, 8.5, 'linear')

elseif t == 'moveo2' then

doTweenX('move3', 'quagmirecool', 600, 9, 'linear')
doTweenX('move4', 'gf', 2230, 9, 'linear')

end
end

function onTweenCompleted(t)
if t == 'b' then
doTweenAlpha('b1', 'boo', 0, 1, 'linear')
gost = true
end
end