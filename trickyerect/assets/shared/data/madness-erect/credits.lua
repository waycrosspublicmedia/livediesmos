function onCreatePost()
makeLuaText('madness', 'MADNESS ERECT',450, 400, 325)
setTextSize('madness', 70);
addLuaText('madness')
setTextFont('madness', 'impact.ttf')
setObjectCamera('madness', 'other');
setTextColor('madness', 'FF0004')
setProperty('madness.alpha',0)

makeLuaText('chuck', 'BY: ChuckySkullHead',450, 400, 405)
setTextSize('chuck', 45);
addLuaText('chuck')
setTextFont('chuck', 'impact.ttf')
setObjectCamera('chuck', 'other');
setTextColor('chuck', 'FFFFFF')
setProperty('chuck.alpha',0)
end
function onStepHit()
if curStep == 128 then
setProperty('madness.alpha',1)
elseif curStep == 160 then
setProperty('chuck.alpha',1)
elseif curStep == 192 then
  setTextString('madness', 'CHART BY:')
  setTextString('chuck', 'Aikonicc')
elseif curStep == 224 then
  setTextString('madness', 'CODE & OPT:')
  setTextString('chuck', 'ZJOSIZ')
elseif curStep == 247 then
  doTweenAlpha('c', 'madness', 0, 0.8, 'linear')
  doTweenAlpha('z', 'chuck', 0, 0.8, 'linear')
  doTweenY('abajo', 'madness', 805, 1.1, 'QuartIn')
  doTweenY('abajoc', 'chuck', 805, 1.1, 'QuartIn')
end
end