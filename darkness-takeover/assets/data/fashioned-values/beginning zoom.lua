
local shot = 0
function onCreate()
precacheSound('switch off')
precacheSound('Radio Static')
addCharacterToList('CorruptCleveland', 'dad')
addCharacterToList('CorruptCleveland2', 'dad')
addCharacterToList('CorruptClevelanddark', 'dad')
addCharacterToList('Retep', 'dad')
addCharacterToList('Retep and Cleveland', 'dad')
addCharacterToList('CorruptStewiePh1', 'dad')
addCharacterToList('QuagmireTwinkle', 'boyfriend')
addCharacterToList('QuagmireShotgunFV', 'boyfriend')

addLuaScript('custom_events/Black effect')
end
i = 1

function onCreatePost()
setPropertyFromClass('ClientPrefs', 'pauseMusic','breakfast')
makeAnimatedLuaSprite('eyeplace', 'characters/QuagmireShotgunFV', getProperty('dad.x'), getProperty('dad.y'))
addAnimationByPrefix('eyeplace', 'eyefixpos', 'QuagmireShotgunFV idle', 24, false)

setProperty('eyeplace.visible', false)
setProperty('eyeplace.color', getColorFromHex ('000000'))
setProperty('eyeplace.scale.x', 1.2)
setProperty('eyeplace.scale.y', 1.2)
addLuaSprite('eyeplace', false)

if not downscroll then
makeLuaSprite('thebullet', 'pain', 150, 565)
else
makeLuaSprite('thebullet', 'pain', 150, 5)
end

setObjectCamera('thebullet', 'hud')
scaleObject('thebullet', 1.5, 1.5)
setProperty('thebullet.alpha', 0)
setProperty('thebullet.angle', 90)
addLuaSprite('thebullet', true);


	   makeLuaSprite('did', '', 0, 0);
        makeGraphic('did',1280,720,'000000')
              setObjectCamera('did', 'other')
setProperty('did.alpha', 0.7)
	      addLuaSprite('did', false);
doTweenColor('009', 'Cleveland', '000000', 0.01, 'linear')

doTweenColor('00', 'boyfriend', '000000', 0.01, 'linear')
doTweenColor('0023', 'gf', '000000', 0.01, 'linear')

doTweenAlpha('iconP1', 'iconP1', 0, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 0, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 0, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 0, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 0, 0.001, 'linear')

	makeLuaSprite('eye', 'BAAALLSSsss', 1195, 405)
scaleObject('eye', 0.07, 0.07)
setProperty('eye.alpha', 0)
	addLuaSprite('eye', true)

	makeLuaSprite('eye2', 'BAAALLSSsss', 1130, 405)
setProperty('eye2.alpha', 0)
scaleObject('eye2', 0.07, 0.07)
	addLuaSprite('eye2', true)

	makeLuaSprite('eye3', 'BAAALLSSsss', 890, 405)
scaleObject('eye3', 0.07, 0.07)
setProperty('eye3.alpha', 0)
	addLuaSprite('eye3', true)

	makeLuaSprite('eye4', 'BAAALLSSsss', 830, 405)
setProperty('eye4.alpha', 0)
scaleObject('eye4', 0.07, 0.07)
	addLuaSprite('eye4', true)
for i = 0,50 do
tagn = ('eyehud'..i)
	makeLuaSprite(tagn, 'BAAALLSSsss', 830, 405)
setProperty(tagn..'.alpha', 0)
scaleObject(tagn, 0.1, 0.1)
setObjectCamera(tagn, 'other')
	addLuaSprite(tagn, true)
end

	makeLuaSprite('eyebig', 'BAAALLSSsss', 100, -250)
setProperty('eyebig.alpha', 0)
scaleObject('eyebig', 1, 1)
setObjectCamera('eyebig', 'other')
setProperty('eyebig.color', getColorFromHex('FF0030'))
	addLuaSprite('eyebig', true)

	makeLuaSprite('1Bar', nil, 0, -190)
	makeGraphic('1Bar', 1280, 180, '000000')
	setObjectCamera('1Bar', 'other')
	addLuaSprite('1Bar', false)

	makeLuaSprite('2Bar', nil, 0, 750)
	makeGraphic('2Bar', 1280, 180, '000000')
	setObjectCamera('2Bar', 'other')
	addLuaSprite('2Bar', false)

setProperty('camHUD.alpha', 0)
setProperty('camGame.alpha', 0)
setProperty('clam.alpha', 0.5)
setProperty('gf.flipX', false)
end

local r = false
die = false
function onUpdatePost()
setProperty('eyeplace.offset.x', 59)
setProperty('eyeplace.offset.y', 0)
setProperty('eyeplace.x', getProperty('boyfriend.x'))
setProperty('eyeplace.y', getProperty('boyfriend.y'))
setProperty('iconP1.offset.x', -5)
setTextString('col', ''..shot)


if die == true and getPropertyFromClass('flixel.FlxG', 'keys.justPressed.R') then
r = true
end
end

bet = 0
stp = 0
intense = false

cutscene = false
camspeed = 0.7
keeplag = true
scary = false
function onUpdate()
setProperty('cameraSpeed', camspeed)
setProperty('eyebig.offset.x', getRandomFloat(-5, 5))
setProperty('eyebig.offset.y', getRandomFloat(-5, 5))
if cutscene == 1 then
setProperty('camFollow.x', 500)
setProperty('camFollow.y', 400)
elseif cutscene == 2 then
setProperty('camFollow.x', 650)
setProperty('camFollow.y', 390)
elseif cutscene == death_is_coming then
setProperty('camFollow.x', 900)
setProperty('camFollow.y', 500)
end
if scary then
	setPropertyFromClass('flixel.FlxG', 'sound.music.time', getPropertyFromClass('Conductor', 'songPosition'))

	setProperty('vocals.time', getPropertyFromClass('Conductor', 'songPosition'))

	setPropertyFromClass('flixel.FlxG', 'sound.music.volume', 1)
	setProperty('vocals.volume', 1)
end
end

function onStepHit()
if die == false then
if curStep %stp == 0 then
triggerEvent('Add Camera Zoom', '0.03', '0.02')
end


if curStep == 1 then

makeLuaText('col', '', 0, getProperty('thebullet.x'), getProperty('thebullet.y') + 56)
setTextSize('col', 80)
setObjectCamera('col', 'hud')
setProperty('col.alpha', 0)
setTextBorder('col', 2, '000000')
addLuaText('col', true)

setObjectOrder('col', 2)
setObjectOrder('thebullet', 1)


setProperty('Cleveland.alpha', 0)
setProperty('camHUD.alpha', 0.5)
setProperty('camGame.alpha', 1)
cameraShake('camGame', 1, 0.1)
cameraShake('camHUD', 1, 0.1)
doTweenY('i', '1Bar', -100, 7, 'linear')
doTweenY('i2', '2Bar', 660, 7, 'linear')
doTweenZoom('cam', 'camGame', 1.5, 10, 'quadInOut')
elseif curStep == 64 then
doTweenY('i', '1Bar', -190, 0.01, 'linear')
doTweenY('i2', '2Bar', 750, 0.01, 'linear')
removeLuaSprite('did', true)
cameraFlash('camOther','ffffff', 1, true)
doTweenAlpha('iconP1', 'iconP1', 1, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 1, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 1, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 1, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 1, 0.001, 'linear')
doTweenZoom('cam', 'camGame', 0.8, 0.0001, 'quadInOut')
setProperty('camHUD.alpha', 1)
setProperty('clam.alpha', 1)
doTweenColor('00', 'boyfriend', 'ffffff', 0.01, 'linear')
doTweenColor('0023', 'gf', 'ffffff', 0.01, 'linear')

doTweenColor('0000', 'iconP2', '000000', 0.01, 'linear')
camspeed = 1.7
elseif curStep == 128 then
doTweenX('gfx', 'gf', getProperty('boyfriend.x') - 300, 0.5, 'linear')
elseif curStep == 256 then
cameraFlash('camOther','ffffff', 1, true)
setProperty('effect.alpha', 0.2)
setProperty('clam2.visible', true)
setProperty('clam.visible', false)
triggerEvent('Change Character', 'dad', 'CorruptCleveland')
doTweenColor('0000', 'iconP2', 'ffffff', 0.01, 'linear')
elseif curStep == 496 then
doTweenZoom('cam', 'camGame', 1.5, 3, 'quadInOut')
doTweenAlpha('hidethe', 'clam2', 0, 3, 'linear')

elseif curStep == 512 then
cameraFlash('camOther','ffffff', 1, true)
doTweenZoom('cam', 'camGame', 0.8, 0.0001, 'quadInOut')
doTweenAlpha('hidethe', 'clam2', 1, 0.01, 'linear')

elseif curStep == 517 then
doTweenY('i', '1Bar', -100, 5, 'linear')
doTweenY('i2', '2Bar', 660, 5, 'linear')
doTweenZoom('cam', 'camGame', 1, 5, 'quadInOut')
setProperty('defaultCamZoom', 1)
doTweenAlpha('hidethe', 'clam2', 0, 5, 'linear')
doTweenAlpha('911 how can i help you?', 'gf', 0, 5, 'linear')
doTweenAlpha('i hate ni-', 'dad', 0, 5, 'linear')
doTweenAlpha('i hate ni- but with his back up', 'effect', 0, 5, 'linear')

elseif curStep == 574 then
doTweenZoom('cam', 'camGame', 0.8, 0.5, 'quadInOut')
setProperty('defaultCamZoom', 0.8)
doTweenY('i', '1Bar', -190, 0.5, 'linear')
doTweenY('i2', '2Bar', 750, 0.5, 'linear')

doTweenAlpha('hidethe', 'clam2', 1, 0.001, 'linear')
setProperty('clam2.visible', false)
setProperty('clam3.visible', true)

triggerEvent('Change Character', 'dad', 'Retep and Cleveland')

doTweenAlpha('i hate ni- but with his back up', 'effect', 0.4, 0.001, 'linear')


doTweenColor('00003', 'dad', '7A7A7A', 0.001, 'linear')
doTweenColor('00001', 'gf', '4E4E4E', 0.001, 'linear')
doTweenColor('00002', 'boyfriend', '4E4E4E', 0.001, 'linear')
cameraShake('camGame', 1, 0.15)
cameraShake('camHUD', 1, 0.15)
elseif curStep == 640 then
cameraFlash('camOther','ffffff', 1, true)
elseif curStep == 768 then
cameraFlash('camOther','ffffff', 1, true)
cameraShake('camGame',0.02,1)
bet = 1
elseif curStep == 800 then
cameraShake('camGame',0.02,1)
elseif curStep == 864 then
bet = 0
stp = 2
elseif curStep == 880 then
stp = 1

elseif curStep == 888 or curStep == 892 then
triggerEvent('Add Camera Zoom', '0.3', '0.15')

elseif curStep == 896 then

stp = 0
bet = 1
intense = true
cameraFlash('camOther','ffffff', 1, true)
triggerEvent('Change Character', 'boyfriend', 'QuagmireShotgunFV')
setProperty('col.alpha', 1)
setProperty('thebullet.alpha', 1)
doTweenColor('00001', 'qug2', '4E4E4E', 0.001, 'linear')
runTimer('colo', 0.1)

elseif curStep == 1152 then
cameraFlash('camOther','ffffff', 3, true)
bet = 0
intense = false
setProperty('white.visible', true)
setProperty('effect.alpha', 0.1)
setProperty('clam3.visible', false)

doTweenColor('00003', 'dad', 'ffffff', 0.001, 'linear')
doTweenColor('00001', 'gf', '000000', 0.001, 'linear')
doTweenColor('00002', 'boyfriend', '000000', 0.001, 'linear')

doTweenAlpha('iconP1', 'iconP1', 0, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 0, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 0, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 0, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 0, 0.001, 'linear')
setProperty('cameraSpeed', 0.1)

doTweenX('the5', 'col.scale', 2.5, 10, 'linear')
doTweenY('the6', 'col.scale', 2.5, 10, 'linear')

doTweenX('the7', 'col', 620, 10, 'linear')
doTweenY('the8', 'col', 295, 10, 'linear')


doTweenX('the', 'thebullet.scale', 3.5, 10, 'linear')
doTweenY('the2', 'thebullet.scale', 3.5, 10, 'linear')

doTweenX('the3', 'thebullet', 580, 10, 'linear')
doTweenY('the4', 'thebullet', 250, 10, 'linear')
elseif curStep == 1154 then
triggerEvent('Change Character', 'dad', 'CorruptClevelanddark')
setProperty('gf.alpha', 0)
setProperty('boyfriend.alpha', 0)
camspeed = 0.7
elseif curStep == 1216 then
if shot < 10 then
doTweenAlpha('010', 'Cleveland', 0.5, 7, 'linear')
doTweenAlpha('020', 'dad', 0.5, 7, 'linear')
else

doTweenAlpha('01', 'Cleveland', 1, 7, 'linear')
doTweenAlpha('02', 'dad', 0, 7, 'linear')
end
doTweenAlpha('03', 'effect', 0, 7, 'linear')
cutscene = 2
doTweenZoom('cam2', 'camGame', 0.6, 0.9, 'linear')
setProperty('defaultCamZoom', 0.6)
elseif curStep == 1280 then
doTweenZoom('cam2', 'camGame', 0.8, 0.9, 'linear')
setProperty('defaultCamZoom', 0.8)
cutscene = false
camspeed = 0.1
doTweenAlpha('01', 'Cleveland', 0, 5, 'linear')
doTweenAlpha('04', 'boyfriend', 1, 5, 'linear')

elseif curStep == 1296 then
doTweenAlpha('05', 'gf', 1, 5, 'linear')

elseif curStep == 1392 then
doTweenZoom('cam2', 'camGame', 1.5, 2, 'linear')
elseif curStep == 1404 then
if shot >= 10 then
doTweenZoom('cam2', 'camGame', 1.5, 0.7, 'linear')
doTweenAlpha('cam', 'camGame', 0, 0.7, 'quadInOut')
else
cutscene = death_is_coming
setProperty('boyfriend.visible', false)
setProperty('eyeplace.visible', true)
objectPlayAnimation('eyeplace', 'eyefixpos', true)
end

elseif curStep == 1408 then
if shot < 10 then
runTimer('die', 0.1)
setProperty('eye.alpha', 1)
setProperty('eye2.alpha', 1)
setProperty('eye3.alpha', 1)
setProperty('eye4.alpha', 1)
setProperty('dad.visible', false)
runTimer('laging', 0.1, 0)
die = true
runTimer('hudgone', 2)
setPropertyFromClass('ClientPrefs', 'pauseMusic',' ')
else
setProperty('health', getProperty('health') + 2)


cameraFlash('camOther','ffffff', 1, true)
doTweenAlpha('cam', 'camGame', 1, 0.001, 'quadInOut')
triggerEvent('Change Character', 'dad', 'Retep')
setProperty('boyfriend.alpha', 1)
setProperty('dad.alpha', 1)
setProperty('gf.alpha', 1)
setProperty('Cleveland.alpha', 1)
setProperty('effect.alpha', 0.4)
setProperty('Cleveland.alpha', 0)
setProperty('white.visible', false)
setProperty('clam.visible', true)
doTweenColor('009', 'boyfriend', 'ffffff', 0.001, 'linear')
doTweenColor('009700', 'gf', 'ffffff', 0.001, 'linear')
doTweenColor('00900', 'Cleveland', 'ffffff', 0.001, 'linear')
doTweenAlpha('iconP1', 'iconP1', 1, 0.001, 'linear')
doTweenAlpha('healthBar', 'healthBar', 1, 0.001, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 1, 0.001, 'linear')
doTweenAlpha('timeBar', 'timeBar', 1, 0.001, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 0.001, 'linear')
doTweenAlpha('iconP2', 'iconP2', 1, 0.001, 'linear')
bet = 1
intense = true
camspeed = 0.7
end
elseif curStep == 1519 then
bet = 0
intense = false
elseif curStep == 1520 then
cameraFlash('camOther','ffffff', 1, true)
doTweenZoom('cam2', 'camGame', 0.9, 0.001, 'linear')
setProperty('defaultCamZoom', 0.9)

elseif curStep == 1526 then
cameraFlash('camOther','ffffff', 1, true)
doTweenZoom('cam2', 'camGame', 1, 0.001, 'linear')
setProperty('defaultCamZoom', 1)

elseif curStep == 1532 then
cameraFlash('camOther','ffffff', 0.5, true)
doTweenZoom('cam2', 'camGame', 1.1, 0.001, 'linear')
setProperty('defaultCamZoom', 1.1)

elseif curStep == 1536 then
cameraFlash('camOther','ffffff', 3, true)
doTweenZoom('cam2', 'camGame', 1.2, 0.001, 'linear')

setProperty('defaultCamZoom', 1.2)

doTweenAlpha('c1', 'boyfriend', 0, 2, 'linear')
doTweenAlpha('c2', 'dad', 0, 2, 'linear')
doTweenAlpha('c3', 'gf', 0, 2, 'linear')
doTweenAlpha('c4', 'Cleveland', 0, 2, 'linear')
doTweenAlpha('c5', 'clam', 0, 2, 'linear')
doTweenAlpha('c6', 'iconP1', 0, 2, 'linear')
doTweenAlpha('c7', 'iconP2', 0, 2, 'linear')
doTweenAlpha('c8', 'healthBar', 0, 2, 'linear')
doTweenAlpha('c9', 'timeTxt', 0, 2, 'linear')
doTweenAlpha('c10', 'timeBar', 0, 2, 'linear')
doTweenAlpha('c11', 'scoreTxt', 0, 2, 'linear')
doTweenAlpha('c12', 'effect', 0, 2, 'linear')

noteTweenAlpha('dad1', 0, 0, 2, 'linear')
noteTweenAlpha('dad2', 1, 0, 2, 'linear')
noteTweenAlpha('dad3', 2, 0, 2, 'linear')
noteTweenAlpha('dad4', 3, 0, 2, 'linear')

noteTweenAlpha('bf1', 4, 0, 2, 'linear')
noteTweenAlpha('bf2', 5, 0, 2, 'linear')
noteTweenAlpha('bf3', 6, 0, 2, 'linear')
noteTweenAlpha('bf4', 7, 0, 2, 'linear')
doTweenZoom('cam2', 'camGame', 1.5, 1, 'linear')

elseif curStep == 1560 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh1')
triggerEvent('Change Character', 'boyfriend', 'QuagmireTwinkle')
setProperty('dad.alpha', 0)
setProperty('boyfriend.alpha', 0)
doTweenZoom('cam2', 'camGame', 0.65, 0.0001, 'linear')
setProperty('defaultCamZoom', 0.65)
cutscene = 1
camspeed = 0.3
elseif curStep == 1565 then
noteTweenAlpha('dad1', 0, 0.5, 0.5, 'linear')
noteTweenAlpha('dad2', 1, 0.5, 0.5, 'linear')
noteTweenAlpha('dad3', 2, 0.5, 0.5, 'linear')
noteTweenAlpha('dad4', 3, 0.5, 0.5, 'linear')

noteTweenAlpha('bf1', 4, 0.5, 0.5, 'linear')
noteTweenAlpha('bf2', 5, 0.5, 0.5, 'linear')
noteTweenAlpha('bf3', 6, 0.5, 0.5, 'linear')
noteTweenAlpha('bf4', 7, 0.5, 0.5, 'linear')


doTweenAlpha('c2', 'dad', 0.5, 0.5, 'linear')
doTweenColor('c15', 'boyfriend', '000000', 0.001, 'linear')
runTimer('i1', 0.1)
doTweenAlpha('c3', 'bg1', 0.1, 0.5, 'linear')

elseif curStep == 1664 then
doTweenAlpha('cam1', 'camGame', 0, 2, 'linear')
doTweenAlpha('cam2', 'camHUD', 0, 2, 'linear')

end
end
end


function onBeatHit()
if curBeat %bet == 0 then
triggerEvent('Add Camera Zoom', '0.03', '0.02')
if intense == true then
triggerEvent('Add Camera Zoom', '0.05', '0.015')
doTweenAngle('2', 'camGame', 0, 0.3, 'quadInOut')
doTweenAngle('3', 'camHUD', 0, 0.3, 'quadInOut')
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
end
end


function onTimerCompleted(t)
if t == 'i1' then
doTweenAlpha('c1', 'boyfriend', 0.5, 0.4, 'linear')
elseif t == 'reset' then
shot = shot - 1

elseif t == 'colo' then
doTweenColor('00001', 'boyfriend', '4E4E4E', 0.001, 'linear')

elseif t == 'hudgone' then
setProperty('camHUD.visible', false)
runTimer('bggone', 2)
elseif t == 'bggone' then
setProperty('boyfriend.visible', false)
setProperty('gf.visible', false)
setProperty('Cleveland.visible', false)
removeLuaSprite('white', false)
removeLuaSprite('effect', false)
runTimer('eyepopup', 2)
runTimer('eyepopupbig', 7)
elseif t == 'eyepopup' then
runTimer('eyepopupbegin', 0.1, 0)

playSound('Radio Static', 1)
runTimer('playagian', 17, 0)

elseif t == 'playagian' then
playSound('Radio Static', 1)


elseif t == 'eyepopupbegin' then

if i < 50 then
tagn = ('eyehud'..i)
i = i + 1
setProperty(tagn..'.alpha', 1)
setProperty(tagn..'.x', math.floor(getRandomInt(0, 1000)))
setProperty(tagn..'.y', math.floor(getRandomInt(0, 550)))
end
if i > 44 and i < 49 then
for i = 1,100 do
	tagn = ('eyehud'..i)
playSound('switch off', 1)
removeLuaSprite('eyehud', true)
removeLuaSprite(tagn, true)
end
elseif i >= 50 then

setProperty('camGame.visible', false)

	setPropertyFromClass('flixel.FlxG', 'sound.music.time', getPropertyFromClass('Conductor', 'songPosition'))
	setProperty('vocals.time', getPropertyFromClass('Conductor', 'songPosition'))
	setPropertyFromClass('flixel.FlxG', 'sound.music.volume', 0)
	setProperty('vocals.volume', 0)

end

elseif t == 'eyepopupbig' then
doTweenAlpha('oh,oh..scarry,look,look at my legs and see how they are shaking from how scarry that is', 'eyebig', 1, 7, 'quadInOut')

elseif t == 'jumpshot' then
doTweenX('9262622', 'eyebig.scale', 4, 2, 'linear')
doTweenY('9262622e', 'eyebig.scale', 4, 2, 'linear')
cameraFlash('camOther', 'FF002F',1, true)
cameraShake('camOther', 0.1, 2)
runTimer('dieforreal', 1.5)
scary = true
updateHitbox('eyebig')

elseif t == 'dieforreal' then
r = true
elseif t == 'laging' then
		setPropertyFromClass('Conductor', 'songPosition', getPropertyFromClass('Conductor', 'songPosition') - 100)
		setPropertyFromClass('flixel.FlxG', 'sound.music.time', getPropertyFromClass('Conductor', 'songPosition'))
		setProperty('vocals.time', getPropertyFromClass('Conductor', 'songPosition'))


elseif t == 'die' then
setProperty('health', 0)
end
end

function onTweenCompleted(t)
if t == 'pww' then
doTweenAlpha('pw', 'col2', 0, 1, 'linear')

elseif t == 'pw' then
setTextString('col2', 'hit all the special notes')
doTweenAlpha('p', 'col2', 1, 5, 'linear')

elseif t == 'p' then
doTweenAlpha('p1', 'col2', 0, 1, 'linear')

elseif t == 'p1' then
setTextString('col2', 'hit R twice to restart')
doTweenAlpha('p', 'col2', 1, 5, 'linear')
elseif t == '010' then
doTweenAlpha('01', 'Cleveland', 0, 4, 'linear')
doTweenAlpha('02', 'dad', 1, 4, 'linear')
elseif t == 'the4' then
if shot < 10 then
doTweenColor('o1', 'thebullet', 'FF1200', 0.01, 'linear')
doTweenColor('o2', 'col', 'FF1200', 0.01, 'linear')
setProperty('thebullet.scale.x', 4)
setProperty('thebullet.scale.y', 4)
setProperty('col.scale.x', 3)
setProperty('col.scale.y', 3)

else
doTweenColor('o1', 'thebullet', '80FF00', 0.01, 'linear')
doTweenColor('o2', 'col', '80FF00', 0.01, 'linear')
setProperty('thebullet.scale.x', 4)
setProperty('thebullet.scale.y', 4)
setProperty('col.scale.x', 3)
setProperty('col.scale.y', 3)
end
elseif t == 'o1' then
doTweenAlpha('o12', 'thebullet', 0, 10, 'linear')
doTweenAlpha('o22', 'col', 0, 10, 'linear')
setProperty('thebullet.scale.x', 3.5)
setProperty('thebullet.scale.y', 3.5)
setProperty('col.scale.x', 2.5)
setProperty('col.scale.y', 2.5)
elseif t == 'oh,oh..scarry,look,look at my legs and see how they are shaking from how scarry that is' then
runTimer('jumpshot', 10)
end
end

function goodNoteHit(id, direction, noteType, isSustainNote)
if noteType == 'shotgun' then
shot = shot + 1
end
end


function onGameOver()
if die == true then
if not r then
	return Function_Stop;
end

if r then

return Function_Continue;

end
end
end