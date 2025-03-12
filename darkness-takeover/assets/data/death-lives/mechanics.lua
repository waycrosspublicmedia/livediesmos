function onCreate()


makeAnimatedLuaSprite('ip2', 'animated/dl/Wave', 0, getProperty('iconP2.y') - 100);
addAnimationByPrefix('ip2','playani','Wave Anim',24,true)
setProperty('ip2.alpha', 0)
setObjectCamera ('ip2', 'other')
scaleObject('ip2', 0.15, 0.15);
addLuaSprite('ip2', false)

makeAnimatedLuaSprite('ip23', 'animated/dl/Wave', 0, getProperty('iconP2.y') - 100);
addAnimationByPrefix('ip23','playani','Wave Anim',24,true)
setProperty ('ip23.flipX', true)
setProperty('ip23.alpha', 0)
setObjectCamera ('ip23', 'other')
scaleObject('ip23', 0.15, 0.15);
addLuaSprite('ip23', false)
end


X2 = -200
X1 = 950
change = true
wowowowo = false

function onUpdatePost(elapsed)
setProperty('iconP1.x', X1)
setProperty('iconP2.x', X1 - 50)
setProperty('ip2.x', getProperty('iconP2.x') + X2)
setProperty('ip23.x', getProperty('ip2.x') - 250)

if getProperty('ip2.x') >= 200 then
	if keyJustPressed('space') then
	X2 = X2 - 37
	end
	if botPlay then--testing reason
	X2 = X2 - 17
	end
end



if getProperty('ip2.x') >= getProperty('iconP2.x') - 50 then
setProperty('health', 0)
elseif getProperty('ip2.x') >= getProperty('iconP2.x') - 300 then
setProperty('health', 2)
else
setProperty('health', 1)
end

if wowowowo == true then
X2 = X2 - 17
end

end

function onStepHit()
if curStep == 129 then
setProperty('ip2.alpha', 1)
setProperty('ip23.alpha', 1)
end

if curStep >= 128 then
X2 = X2 + 7

end
if curStep == 1574 then
doTweenAlpha('ip', 'camHUD', 0, 1, 'linear')
runTimer('wowo', 0.5)

end
end

function goodNoteHit(id, direction, noteType, isSustainNote)
if getProperty('ip2.x') >= 200 then
X2 = X2 - 5
end

end

function noteMiss(id, direction, noteType, isSustainNote)
X2 = X2 + 10

end

function noteMissPress(direction)
X2 = X2 + 10

end

function opponentNoteHit(id, direction, noteType, isSustainNote)
if dadName == 'PeterDL' then
if getProperty('ip2.x') >= 200 then
X2 = X2 - 4

end
else
if getProperty('ip2.x') >= 200 then
X2 = X2 - 2
end
end
end


function onTimerCompleted(t)
if t == 'wowo' then
wowowowo = true
end
end