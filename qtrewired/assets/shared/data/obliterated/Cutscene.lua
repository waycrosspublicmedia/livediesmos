function onCreate()
setProperty('skipCountdown', true)
end

function onCreatePost()
setProperty('camHUD.alpha', 0)

makeLuaSprite("bg", nil, 0, 0)
makeGraphic("bg", 1280, 720, '000000')
addLuaSprite("bg", true)
setProperty('bg.alpha', 0)
setScrollFactor('bg', 0, 0)
setProperty('bg.scale.x', 5)
setProperty('bg.scale.y', 5)

makeLuaSprite('spotLight', 'trashAlley/lightFocus', -60, 280)
addLuaSprite('spotLight', true)
setProperty('spotLight.alpha', 0)
setScrollFactor('spotLight',0.99,0.99)

makeLuaSprite("white", nil, 0, 0)
makeGraphic("white", 1280, 720, 'FFFFFF')
addLuaSprite("white", true)
setProperty('white.alpha', 0)
setScrollFactor('white', 0, 0)
setProperty('white.scale.x', 5)
setProperty('white.scale.y', 5)
end

local Anim = true
function onStartCountdown()
    if isStoryMode and Anim and not seenCutscene then
       setProperty('camGame.zoom', 0.7)
       setProperty('defaultCamZoom', 0.7)
       setProperty('isCameraOnForcedPos', true)
       setProperty('camFollow.x', 750)
       setProperty('camFollow.y', 1300)
       callMethod('camGame.snapToTarget', {''})

        setProperty('dad.visible', false)
        makeFlxAnimateSprite('qtCutscene', 0, 0, 'characters/qtCutscene')
        addLuaSprite('qtCutscene', true) 
        addAnimationBySymbol('qtCutscene', 'cut', 'qt transform', 24, false)
        addAnimationBySymbol('qtCutscene', 'cutrt', 'qt transform', 1, false)
        runTimer('start', 0.5)
        return Function_Stop
    end
end

function onTimerCompleted(t)
if t == 'start' then
playAnim('qtCutscene', 'cut', true)
runTimer('black',2.3)
runTimer('sfx',0.55)
end
if t == 'sfx' then
playSound("qtsfx", 1)
end
if t == 'black' then
doTweenAlpha('aloha', 'bg', 1, 1)
doTweenAlpha('aloha1', 'spotLight', 1, 1)
doTweenAlpha('aloha2', 'TVFront', 0, 1)
doTweenAlpha('aloha3', 'lightOverlay', 0, 1)
runTimer('red',10)
end
if t == 'red' then
runTimer('white',2)
setProperty('bg.colorTransform.color', getColorFromHex('FF0000'))
end
if t == 'white' then
doTweenAlpha('oh', 'white', 1, 2)
runTimer('b',2)
end
if t == 'b' then
Anim = false
startCountdown()
setProperty('dad.visible', true)
setProperty('bg.alpha', 0)
setProperty('spotLight.alpha', 0)
setProperty('white.alpha', 0)
setProperty('qtCutscene.visible', false)
setProperty('isCameraOnForcedPos', false)
setProperty('TVFront.alpha', 1)
setProperty('lightOverlay.alpha', 1)
end
end

function onUpdate(e)
setObjectOrder('qtCutscene',getObjectOrder('qtCutscene') + 1)
setObjectOrder('white',getObjectOrder('white') + 5)
setProperty('qtCutscene.y', getProperty('dadGroup.y') + 350)
setProperty('qtCutscene.x', getProperty('dadGroup.x') - 100)
end