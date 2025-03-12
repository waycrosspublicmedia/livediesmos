
follow = bf
function onCreate()
makeAnimatedLuaSprite('peter2', 'characters/PeterDL', getProperty('dad.x'), getProperty('dad.y') - 150);
		addAnimationByPrefix('peter2', 'haha', 'PeterDL speech', 7, false);
		addAnimationByPrefix('peter2', 'haha2', 'PeterDL Idle', 14, true);
setProperty('peter2.alpha', 0)
	scaleObject('peter2', 1.4, 1.4);
	addLuaSprite('peter2',true)

addCharactertolist('PeterDLWE', 'dad')
addCharactertolist('PeterDL', 'dad')
addCharactertolist('BFDL', 'boyfriend')
addCharactertolist('bf', 'boyfriend')
addLuaScript('data/death-lives/white effect')


end
kms = true
function onCreatePost()
setProperty('camGame.alpha', 0)
setProperty('iconP1.flipX', true)
setProperty('healthBar.visible', false)
setProperty('healthBarBG.visible', false)

setProperty('iconP1.visible', false)
setProperty('iconP2.visible', false)
setProperty('timeTxt.visible', false)
setProperty('timeBar.visible', false)
setProperty('scoreTxt.visible', false)

setProperty('gf.visible', false)
setProperty('dad.visible', false)
setProperty('BG.visible', false)
setProperty('BG2.visible', false)
setProperty('wave.visible', false)

end

function onSongStart()
runTimer('get_back', 0.01)
doTweenZoom('1', 'camGame', 0.8, 0.01)
setProperty('defaultCamZoom', 0.8)
doTweenAlpha('eueheueuaavsgsya8s', 'camGame', 1, 1, 'quadInOut')
end

cutscene = 2


function onTimerCompleted(tag)
	if tag == 'get_back' then
doTweenAlpha('3kjsj', 'camGame', 1, 2, 'linear')
kms = false
elseif tag == 'runaway' then
setProperty('camGame.alpha', 0)
setProperty('camHUD.alpha', 0)
setProperty('camOther.alpha', 0)
end
end

followwave = false

function onUpdatePost()

if follow == bf then
cameraSetTarget('boyfriend')
end
if follow == dad then
cameraSetTarget('dad')
end

if followwave == true then
setProperty('wave.x', getProperty('wave3.x') - 1800)
end
end

function onUpdate()
noteTweenX('dad1', 0, -1000, 0.01, 'linear')
noteTweenX('dad2', 1, -1000, 0.01, 'linear')
noteTweenX('dad3', 2, -1000, 0.01, 'linear')
noteTweenX('dad4', 3, -1000, 0.01, 'linear')
if kms then
setPropertyFromGroup('strumLineNotes', 0, 'x', -10000)
setPropertyFromGroup('strumLineNotes', 1, 'x', -10000)
setPropertyFromGroup('strumLineNotes', 2, 'x', -10000)
setPropertyFromGroup('strumLineNotes', 3, 'x', -10000)
end

setProperty('peter2.x', getProperty('dad.x'))
setProperty('peter2.y', getProperty('dad.y'))
if getProperty('peter2.animation.curAnim.name') == 'haha' then
setProperty('peter2.offset.x', -134)
setProperty('peter2.offset.y', -97)
end

if cutscene == 1 then
setProperty('camFollow.x', 630)
setProperty('camFollow.y', 360)
end
if cutscene == 2 then
setProperty('camFollow.x', 1330)
setProperty('camFollow.y', 560)
end
end
bet = false
function onStepHit()
if curStep == 116 then
doTweenZoom('1', 'camGame', 1, 0.5, 'linear')
doTweenAlpha('2', 'camGame', 0, 0.5, 'linear')

elseif curStep == 124 then
cutscene = 1
cameraFlash('camOther', 'ffffff', 0.5, true)
setProperty('BG.visible', true)
setProperty('BG2.visible', true)
setProperty('dad.visible', true)
setProperty('wave.visible', true)
doTweenZoom('1', 'camGame', 0.35, 0.8, 'linear')
setProperty('defaultCamZoom', 0.35)

setProperty('iconP1.visible', true)
setProperty('iconP2.visible', true)
setProperty('timeTxt.visible', true)
setProperty('timeBar.visible', true)
setProperty('effectd_Anm.alpha', 0)
setProperty('boyfriend.x', 1090)

setProperty('camGame.alpha', 1)
follow = false

elseif curStep == 380 then
cameraFlash('camOther', 'ffffff', 0.5, true)

elseif curStep == 636 then
bet = 5
setProperty('wave.flipX', true)
followwave = true
setProperty('wave3.visible', true)
setProperty('peter2.alpha', 1)
setProperty('dad.visible', false)
objectPlayAnimation('peter2', 'haha2')

cameraFlash('camOther', 'ffffff', 1, true)

elseif curStep == 732 then

follow = dad
doTweenZoom('1', 'camGame', 0.8, 1, 'linear')
setProperty('defaultCamZoom', 0.8)
objectPlayAnimation('peter2', 'haha')

elseif curStep == 764 then

cameraFlash('camOther', 'ffffff', 3, true)
follow = false
doTweenZoom('1', 'camGame', 0.4, 1, 'linear')
setProperty('defaultCamZoom', 0.4)
bet = 5

triggerEvent('Change Character', 'dad', 'PeterDLWE')
setProperty('dad.visible', true)
setProperty('wave4.visible', true)
setProperty('wave3.visible', false)
removeLuaSprite('peter2', true)
setProperty('effectd_Anm.alpha', 0.6)


elseif curStep == 1276 then
bet = false
cameraFlash('camOther', 'ffffff', 0.5, true)
setProperty('effectd_Anm.alpha', 0)
triggerEvent('Change Character', 'dad', 'PeterDL')
setProperty('wave4.visible', false)
setProperty('wave2.visible', true)
setProperty('wave2.alpha', 1)
objectPlayAnimation('wave2', 'wavemove', true)
elseif curStep == 1532 then
objectPlayAnimation('wave2', 'wavegone', false)
setProperty('dad.velocity.x', 1500)
setProperty('boyfriend.velocity.x', 1500)
setProperty('BG.velocity.x', -1000)
setProperty('BG2.velocity.x', -1000)

runTimer('runaway', 2)
elseif curStep == 1546 then
removeLuaSprite('wave2', true)
removeLuaSprite('wave', true)
doTweenAlpha('h7id5', 'camHUD', 0, 5, 'quadInOut')


end
end

N = 0
function onBeatHit()


if bet == 5 then
if curBeat %1 == 0 then

cameraShake('camGame', 0.05, 0.05)
cameraShake('camHUD', 0.05, 0.05)
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
end
end

function onEvent(name, value1, value2)
if name == 'onBet' then
triggerEvent('Weffect', 0.5)
triggerEvent('Add Camera Zoom', '0.1', '0.05')
if value1 == 'zo' then
triggerEvent('Add Camera Zoom', '0.1', '0.05')
end
end
end