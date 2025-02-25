local warning = false
function onCreatePost()
setProperty('camZooming', true)

makeAnimatedLuaSprite('bfTransform', 'characters/BF/bf_transform', 0, 0)
addLuaSprite('bfTransform', true)
addAnimationByPrefix('bfTransform', 'transition', 'bf transition', 24, false)
setProperty('bfTransform.visible', false)
scaleObject('bfTransform', 1, 1)

makeLuaSprite("blackHUD", nil, 0, 0)
makeGraphic("blackHUD", 1280, 720, "0xFF000000")
setObjectCamera("blackHUD", 'hud')
addLuaSprite("blackHUD", false)
scaleObject('blackHUD', 2000, 2000, false)
setProperty('blackHUD.alpha', 0)
setObjectOrder('blackHUD', 0)

setObjectOrder('tvLights',getObjectOrder('bfTransform') + 0)
end

function onSongStart()
setProperty('boyfriend.visible', false)
setProperty('camHUD.alpha', 1)
setProperty('bfTransform.visible', true)
makeLuaSprite("black", nil, 0, 0)
makeGraphic("black", 1280, 720, "0xFF000000")
setObjectCamera("black", 'other')
addLuaSprite("black", false)
scaleObject('black', 2000, 2000, false)
setObjectOrder('black', 0)

triggerEvent('Play Animation', 'shocked','gf');
playAnim('bfTransform', 'transition', true)
doTweenAlpha('black', 'black', 0, 5, 'sineInOut')
startTween('camera','camFollow',{x = 800,y = 1250}, 10,{ease = 'expoInOut'})
startTween('zoomFuck', 'game', {defaultCamZoom = 0.75}, 10, {ease = 'expoInOut'})
setProperty('camGame.zoom', 1.2)
setProperty('defaultCamZoom', 1.2)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', 1050)
setProperty('camFollow.y', 1400)
callMethod('camGame.snapToTarget', {''})

setProperty('tvStaticRight.visible', true)
setProperty('tvStaticLeft.visible', true)
setProperty('tvLights.alpha', 1)

playAnim("TVFront", "Killer", true)
playAnim("lightOverlay", "Killer", true) 
playAnim("wall", "Killer", true) 
end

function onEvent(n,v1,v2)
if n == '' then
if v1 == 'center' and v2 == 'true' then
setProperty('defaultCamZoom', 0.75)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', 800)
setProperty('camFollow.y', 1250)
end
if v1 == 'center' and v2 == 'false' then
setProperty('defaultCamZoom', 0.8)
setProperty('isCameraOnForcedPos', false)
end
if v1 == 'bgWarning' and v2 == 'true' then
warning = true
playAnim("TVFront", "Red", true)
playAnim("lightOverlay", "Red", true) 
playAnim("wall", "Red", true) 
setProperty('tvStaticRight.visible', false)
setProperty('tvStaticLeft.visible', false)
playAnim("tvLights", "Red", true)
setProperty('warningScreen.alpha', 1)
end
if v1 == 'bgWarning' and v2 == 'false' then
cancelTween('gaus')
cancelTween('gaus1')
warning = false
playAnim("TVFront", "Killer", true)
playAnim("lightOverlay", "Killer", true) 
playAnim("wall", "Killer", true) 
setProperty('tvStaticRight.visible', true)
setProperty('tvStaticLeft.visible', true)
playAnim("tvLights", "Killer", true)
setProperty('warningScreen.alpha', 0)
end
if v1 == 'backBG' then
setProperty('blueScreen.alpha', 0)
playAnim("TVFront", "Killer", true)
playAnim("lightOverlay", "Killer", true) 
playAnim("wall", "Killer", true) 
playAnim("tvLights", "Killer", true)
setProperty('tvStaticRight.visible', true)
setProperty('tvStaticLeft.visible', true)
end
if v1 == 'blueBG' then
setProperty('isCameraOnForcedPos', false)
setProperty('blueScreen.alpha', 1)
setProperty('tvStaticRight.visible', false)
setProperty('tvStaticLeft.visible', false)
playAnim("TVFront", "Blue", true)
playAnim("lightOverlay", "Blue", true) 
playAnim("wall", "Blue", true) 
playAnim("tvLights", "Blue", true)
end
if v1 == 'black' then
doTweenAlpha('o', 'blackHUD', 1, 1, 'sineOut')
doTweenAlpha('o1', 'uiGroup', 0, 1, 'sineOut')

for i=0,3 do
    noteTweenAlpha(i+16, i, 0, 1, 'sineOut')
end
end
if v1 == 'video' then
local videoPath = callMethodFromClass('backend.Paths', 'video', {'cutscene'})
createInstance('vid', 'backend.VideoSpriteManager', {0, 0, 1280, 720})
addInstance('vid', false)
callMethod('vid.startVideo', {videoPath, isLooped, loopAmount})
setObjectCamera('vid', 'hud')
end
if v1 == 'backUI' then
callMethod('remove', {instanceArg('vid')})
doTweenAlpha('u', 'blackHUD', 0, 1, 'sineOut')
doTweenAlpha('u1', 'uiGroup', 1, 1, 'sineOut')

for i=0,3 do
    noteTweenAlpha(i+16, i, 1, 1, 'sineOut')
end
end
if v1 == 'cam' and v2 == '1' then
setProperty('camGame.zoom', 1.6)
setProperty('defaultCamZoom', 1.6)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', 1050)
setProperty('camFollow.y', 1350)
callMethod('camGame.snapToTarget', {''})
end
if v1 == 'cam' and v2 == '2' then
setProperty('camGame.zoom', 1.6)
setProperty('defaultCamZoom', 1.6)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', 450)
setProperty('camFollow.y', 1100)
callMethod('camGame.snapToTarget', {''})
end
if v1 == 'cam' and v2 == '3' then
setProperty('camGame.zoom', 1.4)
setProperty('defaultCamZoom', 1.4)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', 750)
setProperty('camFollow.y', 1050)
callMethod('camGame.snapToTarget', {''})
end
if v1 == 'cam' and v2 == 'no' then
setProperty('defaultCamZoom', 0.8)
setProperty('isCameraOnForcedPos', false)
end
if v1 == 'flash' then
cameraFlash('game', 'FFFFFF', 1)
end
end 
end 

function onUpdate()
if getProperty('bfTransform.animation.name') == 'transition' and getProperty('bfTransform.animation.finished') then
setProperty('boyfriend.visible', true)
setProperty('bfTransform.visible', false)
end
setProperty('bfTransform.y', getProperty('boyfriend.y'))
setProperty('bfTransform.x', getProperty('boyfriend.x') - 5)
end

function onStepHit()
if curStep == 128 then
cancelTween('zoomFuck')
end
if curStep == 144 then
cancelTween('camera')
setProperty('isCameraOnForcedPos', false)
end
if warning then
if curStep % 10 == 0 then
setProperty('tvLights.alpha', 1)
doTweenAlpha('gaus', 'tvLights', 0, 0.5)
setProperty('warningScreen.alpha', 1)
doTweenAlpha('gaus1', 'warningScreen', 0, 0.5)
end
end
end