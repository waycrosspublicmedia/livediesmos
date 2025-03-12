function onCreate()

makeLuaSprite('BG', 'animated/dl/dlbgg', -19000, -900)
scaleObject('BG', 3, 3)
makeLuaSprite('BG2', 'animated/dl/dlbgg', 2810, -900)
scaleObject('BG2', 3, 3)
addLuaSprite('BG', false)
addLuaSprite('BG2', false)


makeAnimatedLuaSprite ('wave', 'animated/dl/Wave', -1510, -500)
addAnimationByPrefix ('wave', 'wavemove', 'Wave Anim', 14, true)
objectPlayAnimation('wave', 'wavemove', true)
scaleObject('wave', 1, 1)
addLuaSprite ('wave', true)


makeAnimatedLuaSprite ('wave2', 'animated/dl/CorruptionDL1', -1710, -500)
setProperty('wave2.visible', false)
addAnimationByPrefix ('wave2', 'wavemove', 'CorruptionDL1 idle', 14, true)
addAnimationByPrefix ('wave2', 'wavegone', 'CorruptionDL1 die', 14, false)

objectPlayAnimation('wave2', 'wavemove', true)
scaleObject('wave2', 1, 1)
addLuaSprite ('wave2', true)
setProperty('wave2.visible', false)

makeAnimatedLuaSprite ('wave3', 'animated/dl/CorruptionDL2', -1510, -500)
addAnimationByPrefix ('wave3', 'wavemove', 'CorruptionDL2 idle', 14, true)
setProperty('wave3.visible', false)
objectPlayAnimation('wave3', 'wavemove', true)
scaleObject('wave3', 1, 1)
addLuaSprite ('wave3', true)

makeAnimatedLuaSprite ('wave4', 'animated/dl/CorruptionDL3', -1510, -500)
addAnimationByPrefix ('wave4', 'wavemove', 'CorruptionDL3 idle', 14, true)
setProperty('wave4.visible', false)
objectPlayAnimation('wave4', 'wavemove', true)
scaleObject('wave4', 1, 1)
addLuaSprite ('wave4', true)

end
function onCreatePost()
makeAnimatedLuaSprite('effectd_Anm', 'animated/effect', -550, -300);
addAnimationByPrefix('effectd_Anm','effectdanm','effect animation',24,true)
setObjectCamera('effectd_Anm', 'other')
setProperty('effectd_Anm.alpha', 0.3)
scaleObject('effectd_Anm', 1.73, 1.73);
addLuaSprite('effectd_Anm', false)
end

function onSongStart()
setProperty('BG.velocity.x', -4000)
end

mo = true
function onUpdate(elapsed)
setProperty('wav2.x', getProperty('wave3.x'))
setProperty('wav4.x', getProperty('wave3.x'))

if getProperty('BG.x') <= -26400 then
setProperty('BG.x', 2800)
setProperty('BG.velocity.x', 0)

mo = true
end

if getProperty('BG.x') <= -21550 then
if mo == true then
setProperty('BG2.velocity.x', -4000)
mo = false
end
end

if getProperty('BG2.x') <= -26400 then
setProperty('BG2.x', 2800)
setProperty('BG2.velocity.x', 0)
mo = true
end

if getProperty('BG2.x') <= -21550 then
if mo == true then
setProperty('BG.velocity.x', -4000)
mo = false
end
end
end
theend = false
function onStepHit()
if curStep == 654 then
doTweenX('mvoe', 'wave3', -1010, 3, 'linear')
elseif curStep == 1312 then
theend = true
end
end

function onTweenCompleted(tag)
if theend == false then
if tag == 'mvoe' then
doTweenX('mvoe2', 'wave3', -1510, 3, 'linear')
doTweenX('mvoe32', 'wave4', -1510, 3, 'linear')
doTweenX('BF2', 'boyfriend', 1070, 3, 'linear')
doTweenX('dad2', 'dad', 900, 3, 'linear')
elseif tag == 'mvoe2' then
doTweenX('mvoe', 'wave3', -1120, 3, 'linear')
doTweenX('mvoe22', 'wave4', -1120, 3, 'linear')
doTweenX('BF', 'boyfriend', 1570, 3, 'linear')
doTweenX('dad', 'dad', 1400, 3, 'linear')
end
end
end