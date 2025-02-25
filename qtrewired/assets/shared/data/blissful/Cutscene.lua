local Anim = true
function onStartCountdown()
    if isStoryMode and Anim and not seenCutscene then
        makeAnimatedLuaSprite('QTintro', 'characters/QT_assets/QT_intro', 0, 0)
        addLuaSprite('QTintro', true)
        addAnimationByPrefix('QTintro', 'hi', 'hi_intro', 24, false)
        addAnimationByPrefix('QTintro', 'hi-static', 'hi_intro', 24, false)
        setProperty('camHUD.alpha', 0)
        setProperty('camGame.zoom', 0.9)
        setProperty('defaultCamZoom', 0.9)
        setProperty('dad.visible', false)
        runTimer('hi',0.1)
        return Function_Stop
    end
end

function onTimerCompleted(t)
if t == 'hi' then
playSound("hi_cutie", 0.8)
playAnim('QTintro', 'hi', true)
end
end

function onCountdownTick(c)
if c == 1 then
doTweenZoom('zoom', 'camGame', 0.8, 3, 'sineInOut')
setProperty('defaultCamZoom', 0.8)
doTweenAlpha('a', 'camHUD', 1, 1, 'sineInOut')
end
end

function onUpdate(e)
if getProperty('QTintro.animation.name') == 'hi' and getProperty('QTintro.animation.finished') then
Anim = false
setProperty('dad.visible', true)
setProperty('QTintro.visible', false)
startCountdown()
end
setProperty('QTintro.y', getProperty('dadGroup.y') + 230)
setProperty('QTintro.x', getProperty('dadGroup.x') - 250)
end