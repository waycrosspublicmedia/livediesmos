local allowCountdown = false

function onStartCountdown()
	if not allowCountdown and isStoryMode then -- Block the first countdown
		startVideo('Cutscene2'); -- your Video's name | video (must be 1280x720) paste into "videos" folder 
		allowCountdown = true;
		return Function_Stop;	
	end
	return Function_Continue;
end

function onStepHit()
	if curStep == 512 then
		addAnimationByPrefix('FakeOut', 'FakeOut', 'FakeOut', 24, false);
		setProperty('FakeOut.visible', true)
		setProperty('RedSleeping.visible', false)
		doTweenAlpha('camHUDFade' ,'camHUD', 0, 0.3, 'linear')
	end
	if curStep == 544 then
		doTweenAlpha('camHUDFade' ,'camHUD', 1, 0.4, 'linear')
		setProperty('FakeOut.visible', false)
		setProperty('RedSleeping.visible', true)
	end
end