
timer = 5
---when the timer for the cam return to normal state.
tim = 10
--this is the timer for how fast do you want the cam to get back to normal

function onCreatePost()
makeAnimatedLuaSprite('peter2', 'characters/peterrooten', -450, -350);
		addAnimationByPrefix('peter2', 'haha', 'peterrooten unfunnied', 24, false);
setProperty('peter2.alpha', 0)
		scaleObject('peter2', 1.1, 1.1);
		addLuaSprite('peter2',false)

setProperty('gf.visible', false)
addCharacterToList('brianrooten', 'dad')
addCharacterToList('briandark', 'dad')
addCharacterToList('stewieduo', 'boyfriend')
addCharacterToList('stewiedark', 'boyfriend')
addCharacterToList('loisdark', 'dad')
addCharacterToList('loisdarkblank', 'gf')


addLuaScript('custom_events/Black effect')
addLuaScript('data/rooten-family/white effect')

	   makeLuaSprite('did', '', 0, 0);
        makeGraphic('did',5000,3000,'000000')
              setObjectCamera('did', 'hud')
	      addLuaSprite('did', false);

doTweenColor('00', 'boyfriend', '000000', 0.01, 'linear')
setProperty('bedroom.alpha', 0.3)


doTweenAlpha('iconP1', 'iconP1', 0, 0.01, 'linear')
doTweenAlpha('healthBar', 'healthBar', 0, 0.1, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 0, 0.1, 'linear')
doTweenAlpha('timeBar', 'timeBar', 0, 0.1, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 0.1, 'linear')
doTweenAlpha('iconP2', 'iconP2', 0, 0.1, 'linear')

end

function onSongStart()
runTimer('get back', timer)
end

function onTimerCompleted(tag, loops, loopsLeft)
	if tag == 'get back' then
doTweenAlpha('dd','did', 0, tim,'linear')
doTweenZoom('cam', 'camGame', 0.9, tim, 'linear')

end
end

nowM = false

function onMoveCamera(focus)


if nowM == true then
	if focus == 'boyfriend' then
doTweenZoom('cam', 'camGame', 1.4, 0.5, 'linear')
setProperty('defaultCamZoom', 1.4)
	elseif focus == 'dad' or 'gf' then
doTweenZoom('cam2', 'camGame', 0.9, 0.5, 'linear')
setProperty('defaultCamZoom', 0.9)
end
end
end

cutscene = false
unzoomyoufuckingdickhead = false
camspeed = 0.5
function onUpdate()
if unzoomyoufuckingdickhead then
setProperty('defaultCamZoom', 0.6)
end
setProperty('cameraSpeed', camspeed)
if cutscene == 1 then
setProperty('camFollow.x', 1000)
setProperty('camFollow.y', 500)
elseif cutscene == 2 then
setProperty('camFollow.x', 650)
setProperty('camFollow.y', 390)
elseif cutscene == ptr then
setProperty('camFollow.x', -100)
setProperty('camFollow.y', 500)
end
end


Beat = false
function onStepHit()
if curStep == 128 then
nowM = true
doTweenColor('00', 'boyfriend', 'ffffff', 0.01, 'linear')
doTweenAlpha('iconP1', 'iconP1', 1, 0.1, 'linear')
doTweenAlpha('healthBar', 'healthBar', 1, 0.1, 'linear')
doTweenAlpha('timeTxt', 'timeTxt', 1, 0.1, 'linear')
doTweenAlpha('timeBar', 'timeBar', 1, 0.1, 'linear')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 0.1, 'linear')
doTweenAlpha('iconP2', 'iconP2', 1, 0.1, 'linear')
doTweenZoom('cam2', 'camGame', 0.9, 0.1, 'linear')
setProperty('defaultCamZoom', 0.9)
camspeed = 1
setProperty('did.alpha', 0)
setProperty('bedroom.visible', false)
setProperty('stuff.alpha', 1)
setProperty('bg2_Anm.visible', true)
cameraFlash('camOther', 'ffffff', 1, true)

elseif curStep == 256 then
doTweenAlpha('ap93', 'dad', 0, 10, 'quadInOut')
doTweenAlpha('ap94', 'bg2_Anm', 0, 10, 'quadInOut')
doTweenAlpha('ap95', 'stuff', 0, 10, 'quadInOut')
doTweenAlpha('iconP1', 'iconP1', 0, 10, 'quadInOut')
doTweenAlpha('healthBar', 'healthBar', 0, 10, 'quadInOut')
doTweenAlpha('timeTxt', 'timeTxt', 0, 10, 'quadInOut')
doTweenAlpha('timeBar', 'timeBar', 0, 10, 'quadInOut')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 10, 'quadInOut')
doTweenAlpha('iconP2', 'iconP2', 0, 10, 'quadInOut')

setProperty('gf.visible', true)
cameraFlash('camOther', 'ffffff', 1, true)
nowM = true
cutscene = 2
doTweenZoom('cam2', 'camGame', 0.6, 0.9, 'linear')
setProperty('defaultCamZoom', 0.6)

elseif curStep == 352 then

doTweenAlpha('ap', 'Peter', 1, 10, 'linear')
doTweenAlpha('ap92', 'gf', 0, 10, 'linear')
nowM = false
elseif curStep == 384 then
cutscene = 2

setProperty('defaultCamZoom', 0.5)
elseif curStep == 448 then
doTweenAlpha('ap', 'Peter', 0, 1, 'quadInOut')
doTweenAlpha('ap92', 'gf', 1, 1, 'quadInOut')
doTweenAlpha('ap93', 'dad', 1, 1, 'quadInOut')
doTweenAlpha('ap94', 'bg2_Anm', 1, 1, 'quadInOut')
doTweenAlpha('iconP1', 'iconP1', 1, 1, 'quadInOut')
doTweenAlpha('healthBar', 'healthBar', 1, 1, 'quadInOut')
doTweenAlpha('timeTxt', 'timeTxt', 1, 1, 'quadInOut')
doTweenAlpha('timeBar', 'timeBar', 1, 1, 'quadInOut')
doTweenAlpha('scoreTxt', 'scoreTxt', 1, 1, 'quadInOut')
doTweenAlpha('iconP2', 'iconP2', 1, 1, 'quadInOut')
cutscene = false

setProperty('defaultCamZoom', 0.7)
triggerEvent('Add Camera Zoom', 0.5,0.5)

doTweenAlpha('ap95', 'stuff', 1, 1, 'quadInOut')
triggerEvent('Black effect', '1')
nowM = true
elseif curStep == 473 then
setProperty('gf.visible', false)
triggerEvent('Play Animation', 'shock', 'bf')
setProperty('Peter.flipX', false)
objectPlayAnimation('peter2','haha')
setProperty('peter2.alpha', 1)

elseif curStep == 511 then
triggerEvent('Change Character', 'gf', 'loisdarkblank')
setProperty('gf.alpha', 0)

elseif curStep == 512 then
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('Peter.alpha', 1)
removeLuaSprite('peter2', true)
setProperty('Peter.x', 800)
setProperty('Peter.y', 220)

triggerEvent('Change Character', 'bf', 'stewieduo')

Beat = true
elseif curStep == 768 then
Beat = false
cameraFlash('camOther', 'ffffff', 1, true)

doTweenAlpha('iconP1', 'iconP1', 0, 0.1, 'quadInOut')
doTweenAlpha('healthBar', 'healthBar', 0, 0.1, 'quadInOut')
doTweenAlpha('timeTxt', 'timeTxt', 0, 0.1, 'quadInOut')
doTweenAlpha('timeBar', 'timeBar', 0, 0.1, 'quadInOut')
doTweenAlpha('scoreTxt', 'scoreTxt', 0, 0.1, 'quadInOut')
doTweenAlpha('iconP2', 'iconP2', 0, 0.1, 'quadInOut')
doTweenColor('odjdh', 'Peter', '000000', 0.01, 'quadInOut')

setProperty('white.visible', true)
removeLuaSprite('bg2_Anm', true)
setProperty('stuff.visible', false)
setProperty('Peter.visible', false)
setProperty('boyfriend.alpha', 0)
setProperty('dad.alpha', 0)
setProperty('boyfriend.alpha', 0)
camspeed = 0.3
doTweenZoom('cam2', 'camGame', 0.9, 0.01, 'linear')
setProperty('defaultCamZoom', 0.9)
cutscene = false
triggerEvent('Change Character', 'bf', 'stewiedark')

elseif curStep == 776 then
doTweenAlpha('ic', 'dad', 1, 1, 'quadInOut')
setProperty('Peter.visible', true)
setProperty('Peter.alpha', 0)
elseif curStep == 798 then
doTweenAlpha('ic', 'dad', 0, 1, 'quadInOut')
elseif curStep == 800 then
doTweenAlpha('ic2', 'Peter', 1, 1, 'quadInOut')
cutscene = 1
cameraFlash('camOther', 'ffffff', 1, true)
elseif curStep == 824 then
doTweenAlpha('ic3', 'Peter', 0, 1, 'quadInOut')
elseif curStep == 832 then
doTweenAlpha('ic4', 'boyfriend', 1, 1, 'quadInOut')
cutscene = false

elseif curStep == 896 then
setProperty('dad.alpha', 1)
triggerEvent('Change Character', 'dad', 'briandark')
cameraFlash('camOther', 'ffffff', 1, true)
doTweenZoom('cam2', 'camGame', 2, 0.1, 'linear')
camspeed = 2
elseif curStep == 952 then
camspeed = 0.3
doTweenAlpha('ic4', 'dad', 0, 0.85, 'quadInOut')
elseif curStep == 960 then
cameraFlash('camOther', 'ffffff', 1, true)
doTweenAlpha('ic4', 'dad', 1, 1, 'quadInOut')
elseif curStep == 1008 then
cutscene = 1
doTweenZoom('cam2', 'camGame', 0.6, 0.4, 'linear')
unzoomyoufuckingdickhead = true
camspeed = 1
elseif curStep == 1020 then
setProperty('dad.visible', false)
nowM = false
elseif curStep == 1024 then
Beat = true

setProperty('defaultCamZoom', 0.6)

cutscene = 2
setProperty('dad.visible', true)
setProperty('boyfriend.visible', false)
triggerEvent('Change Character', 'dad', 'brianrooten')
doTweenColor('odjdh', 'Peter', 'ffffff', 0.01, 'quadInOut')
setProperty('Peter.alpha', 1)
cameraFlash('camOther', 'ffffff', 1, true)
removeLuaSprite('white', true)
setProperty('bg3_Anm.visible', true)
setProperty('stuff.visible', true)
setProperty('effect.visible', true)

elseif curStep == 1280 then
cameraFlash('camOther', 'ffffff', 1, true)
Beat = false
cameraShake('camGame', 0.1, 3)
cutscene = false
doTweenZoom('cam2', 'camGame', 2, 3, 'linear')
setProperty('defaultCamZoom', 2)
camspeed = 3
elseif curStep == 1292 then
setProperty('camGame.visible', false)
setProperty('camOther.visible', false)
setProperty('camHUD.visible', false)
end
end


function onBeatHit()
if Beat == true then
if curBeat %2 == 0 then
triggerEvent('Weffect', '0.5')
triggerEvent('Add Camera Zoom', 0.2,0.05)
else
triggerEvent('Add Camera Zoom', 0.04,0.05)
end
end
end