function onSongStart()
  doTweenColor('scoreTxt', 'scoreTxt', 'FF0000', 0.1, 'linear');
end
function onCreate()
  makeLuaSprite('Floor', 'tricky/floor', -1250, -920);
  scaleObject('Floor', 2, 2);
  addLuaSprite('Floor', false);

  makeLuaSprite('blanco', '', 0, 0);
 makeGraphic('blanco',1280,720,'ffffff')
 addLuaSprite('blanco', false);
 setLuaSpriteScrollFactor('blanco',0,0)
 setProperty('blanco.scale.x',2)
 setProperty('blanco.scale.y',2)
	setProperty('blanco.alpha',0)

  makeLuaSprite('overlei', 'tricky/leSpooky', 0, 0);
  scaleObject('overlei', 2.52, 2.3);
  addLuaSprite('overlei', false);
  setObjectCamera('overlei', 'other');

  makeLuaSprite('estatica', 'tricky/static', 0, 0);
  scaleObject('estatica', 3.3, 3.3);
  addLuaSprite('estatica', false);
  setObjectCamera('estatica', 'hud');
  setProperty('estatica.antialiasing', false);
  setProperty('estatica.alpha', 0.2);

  makeAnimatedLuaSprite('pincho1','tricky/spikes/spike_1', 50, -110)
  addAnimationByPrefix('pincho1','salputa','Spike_1 instance 1',24,false)
  scaleObject('pincho1', 1, 1)
  setProperty('pincho1.visible', false)
  addLuaSprite('pincho1', false)

  makeAnimatedLuaSprite('pincho2','tricky/spikes/spike_1', -560, 130)
  addAnimationByPrefix('pincho2','salputa2','Spike_1 instance 1',24,false)
  scaleObject('pincho2', 1.15, 1.15)
  setProperty('pincho2.visible', false)
  setProperty('pincho2.flipX', true)
  addLuaSprite('pincho2', true)

  makeAnimatedLuaSprite('pincho3','tricky/spikes/spike_1', 1150, -90)
  addAnimationByPrefix('pincho3','salputa3','Spike_1 instance 1',24,false)
  scaleObject('pincho3', 1, 1)
  setProperty('pincho3.visible', false)
  setProperty('pincho3.flipX', true)
  addLuaSprite('pincho3', false)

  makeAnimatedLuaSprite('pincho4','tricky/spikes/spike_1', 360, -20)
  addAnimationByPrefix('pincho4','salputa4','Spike_1 instance 1',24,false)
  scaleObject('pincho4', 0.5, 0.5)
  setProperty('pincho4.visible', false)
  setProperty('pincho4.flipX', true)
  addLuaSprite('pincho4', false)

  makeAnimatedLuaSprite('pincho5','tricky/spikes/spike_1', 1030, 80)
  addAnimationByPrefix('pincho5','salputa5','Spike_1 instance 1',24,false)
  scaleObject('pincho5', 1, 1)
  setProperty('pincho5.visible', false)
  addLuaSprite('pincho5', true)

  makeAnimatedLuaSprite('grunt','tricky/Hotdog guy', 1060, -130)
  addAnimationByPrefix('grunt','idle','hotdog guy instance',12,true)
  scaleObject('grunt', 4.6, 4.6)
  setScrollFactor('grunt', 1.35, 1.25)
  addLuaSprite('grunt', true)

  setProperty('camHUD.alpha', 0)
  setProperty('camGame.alpha', 0)

end

function onStepHit()
  if curStep == 247 then
    doTweenAlpha('cam', 'camHUD', 0.5, 1, 'linear')
  end
  if curStep == 384 then
    setProperty('camHUD.alpha', 1)
  setProperty('camGame.alpha', 1)
  end
  if curStep == 1920 then
    setProperty('camHUD.alpha', 0.5)
    setProperty('grunt.alpha', 0)
    setProperty('Floor.alpha', 0)
    doTweenColor('nigga', 'boyfriend', '000000', 0.01, 'linear')
    doTweenColor('niggaa', 'dad', '000000', 0.01, 'linear')
    setProperty('blanco.alpha',0.4)
  end
  if curStep == 2032 then
    setProperty('camHUD.alpha', 0)
  end
  if curStep == 2040 then
    setProperty('camGame.alpha', 0)
    setProperty('grunt.alpha', 1)
    setProperty('Floor.alpha', 1)
    doTweenColor('nigga', 'boyfriend', 'FFFFFF', 0.01, 'linear')
    doTweenColor('niggaa', 'dad', 'FFFFFF', 0.01, 'linear')
    setProperty('blanco.alpha',0)
  end
  if curStep == 2048 then
    setProperty('camGame.alpha', 1)
    setProperty('camHUD.alpha', 1)
end
  if curStep == 2080 then
    setProperty('pincho4.visible', true)
    objectPlayAnimation('pincho4', 'salputa4');
  end
    if curStep == 2087 then
      setProperty('pincho1.visible', true)
    objectPlayAnimation('pincho1', 'salputa');
    end
    if curStep == 2096 then
      setProperty('pincho2.visible', true)
      objectPlayAnimation('pincho2', 'salputa2');
  end
  if curStep == 2211 then
  setProperty('pincho3.visible', true)
    objectPlayAnimation('pincho3', 'salputa3');
  end
    if curStep == 2226 then
    setProperty('pincho5.visible', true)
    objectPlayAnimation('pincho5', 'salputa5');
    end
    if curStep == 2688 then
      setProperty('camHUD.alpha', 0.5)
      setProperty('grunt.alpha', 0)
      setProperty('Floor.alpha', 0)
      doTweenColor('nigga', 'boyfriend', '000000', 0.01, 'linear')
      doTweenColor('niggaa', 'dad', '000000', 0.01, 'linear')
      setProperty('blanco.alpha',0.4)
    end
    if curStep == 2703 then
      doTweenAlpha('si', 'camGame', 0, 0.7, 'linear');
      doTweenAlpha('s', 'camHUD', 0, 0.7, 'linear');
    end
    if curStep == 2816 then
      setProperty('camGame.alpha', 1)
      setProperty('camHUD.alpha', 1)
    setProperty('grunt.alpha', 1)
    setProperty('Floor.alpha', 1)
    doTweenColor('nigga', 'boyfriend', 'FFFFFF', 0.01, 'linear')
    doTweenColor('niggaa', 'dad', 'FFFFFF', 0.01, 'linear')
    setProperty('blanco.alpha',0)
end
if curStep == 3827 then
  doTweenX('njbchsnwb', 'dad', 907.5, 1, 'QuartIn')
end
if curStep == 3840 then
  setProperty('camGame.alpha', 0)
  doTweenAlpha('s', 'camHUD', 0, 1, 'linear');
end
end
function onCreatePost()
  setTextFont('timeTxt', 'impact.ttf')
  setTextFont('botplayTxt', 'impact.ttf')
  setTextFont('scoreTxt', 'impact.ttf')
  setProperty('introSoundsSuffix', 'muted')
  setTimeBarColors('FF0000', '')
end
function onBeatHit()
  if curBeat % 8 == 1 then
  doTweenAlpha('njbchsnwb', 'overlei', 0, 1.3, 'linear')
  elseif curBeat % 8 == 0 then
  doTweenAlpha('shsnbdajw', 'overlei', 1, 0.0001, 'linear')
  end
  end
  -- zJosiz