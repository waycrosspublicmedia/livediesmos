function onCreatePost()
setProperty('camZooming', true)
addCharacterToList("gf-dance", "gf")
addCharacterToList("gf-qt", "gf")
setProperty('gf.specialAnim', true)
setProperty('boyfriend.specialAnim', true)

makeAnimatedLuaSprite('bfDance', 'characters/BF/bf_dancing', 0, 0)
addLuaSprite('bfDance', true)
addAnimationByPrefix('bfDance', 'Dance', 'bf caramelldansen', 24, true)
addAnimationByPrefix('bfDance', 'preDance', 'bf pre dance', 24, false)
setProperty('bfDance.visible', false)
scaleObject('bfDance', 1, 1)
addOffset('bfDance', 'preDance', 0, 0)
addOffset('bfDance', 'Dance', 50, 0)
end

function onUpdate()
if getProperty('dad.animation.name') == 'preDance' and getProperty('dad.animation.finished') then
triggerEvent('Play Animation', 'Dance','dad');
end
if getProperty('bfDance.animation.name') == 'preDance' and getProperty('bfDance.animation.finished') then
playAnim('bfDance', 'Dance', true)
end
if getProperty('gf.animation.name') == 'preDance' and getProperty('gf.animation.finished') then
playAnim("gf", 'Dance', true)
end
setProperty('bfDance.y', getProperty('boyfriend.y') - 10)
setProperty('bfDance.x', getProperty('boyfriend.x') - 5)
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
end 
if n == 'Play Animation' then
if v1 == 'preDance' and v2 == 'bf' then
setProperty('isCameraOnForcedPos', true)
cameraSetTarget('bf')
setProperty('boyfriend.visible', false)
setProperty('bfDance.visible', true)
playAnim('bfDance', 'preDance', true)
end
if v1 == 'hey' and v2 == 'bf' then
setProperty('boyfriend.visible', true)
setProperty('bfDance.visible', false)
end
if v1 == 'preDance' and v2 == 'gf' then
setProperty('cameraSpeed', 0.5)
setProperty('isCameraOnForcedPos', true)
setProperty('camFollow.x', getMidpointX('gf')+getProperty('gf.cameraPosition[0]')+getProperty('girlfriendCameraOffset[0]'))
setProperty('camFollow.y', getMidpointY('gf')+getProperty('gf.cameraPosition[1]')+getProperty('girlfriendCameraOffset[1]'))
runTimer('back',2)

triggerEvent('Change Character', 'gf','gf-dance');
playAnim('gf', 'preDance', true)
end
if v1 == 'cheer' and v2 == 'gf' then
triggerEvent('Change Character', 'gf','gf-qt');
triggerEvent('Hey!', 'GF','');
end
end
end

function onTimerCompleted(t)
if t == 'back' then
setProperty('cameraSpeed', 1)
setProperty('isCameraOnForcedPos', false)
end
end