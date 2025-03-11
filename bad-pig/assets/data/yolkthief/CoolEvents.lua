local seenDaEnd = false

function onCreate()
	addCharacterToList('RossNervousShade', 'dad')
	addCharacterToList('BirdfriendFlipShade', 'boyfriend')
end

function onStepHit()
	if curStep == 768 then
        cameraFlash('hud', 'FFFFFF', 1.5 , true)
        triggerEvent('Change Character', 0, 'BirdfriendFlipShade');
        triggerEvent('Change Character', 1, 'RossNervousShade');
		setProperty('BackGround.visible', false);
        setProperty('Bush.visible', false);
        setProperty('Tree.visible', false);
        setProperty('Foreground.visible', false);
		setProperty('bg 1.visible', false);
		setProperty('bg 2.visible', false);
		setProperty('bg 3.visible', false);
		setProperty('bg4.visible', false);
        setProperty('RedSleeping.visible', false);
		setProperty('MissingEggs.visible', false);
		setProperty('ChuckSleeping.visible', false);
	end
    if curStep == 992 then
        cameraFlash('hud', 'FFFFFF', 1.5 , true)
        triggerEvent('Change Character', 0, 'BirdfriendFlip');
        triggerEvent('Change Character', 1, 'RossNervous');
		setProperty('BackGround.visible', true);
        setProperty('Bush.visible', true);
        setProperty('Tree.visible', true);
        setProperty('Foreground.visible', true);
		setProperty('bg 1.visible', true);
		setProperty('bg 2.visible', true);
		setProperty('bg 3.visible', true);
		setProperty('bg4.visible', true);
        setProperty('RedSleeping.visible', true);
		setProperty('MissingEggs.visible', true);
		setProperty('ChuckSleeping.visible', true);
	end
	if curStep == 1798 then
		addAnimationByPrefix('RedWakeUP', 'RedWakeUP', 'RedWakeUP', 24, false);
		setProperty('RedWakeUP.visible', true)
		setProperty('RedSleeping.visible', false)
	end
    if curStep == 1808 then
        doTweenAlpha('camHUDFade' ,'camHUD', 0, 0.3, 'linear')
	end
	if curStep == 1817 then
        addAnimationByPrefix('ChuckIsLikeHuh', 'ChuckIsLikeHuh', 'ChuckIsLikeHuh', 24, false);
		setProperty('ChuckIsLikeHuh.visible', true)
		setProperty('ChuckSleeping.visible', false)
	end
    if curStep == 1861 then
        doTweenX('byebye', 'dad', 2200, 0.1, 'linear')
		objectPlayAnimation('MissingEggs', 'Missing', true)
	end
	if curStep == 1862 then
        
	end
end

function onEndSong()
	if isStoryMode and not seenDaEnd then
		makeLuaSprite('bg','',0,0)
		makeGraphic('bg',1280,720,'000000')
		addLuaSprite('bg',true)
		setObjectCamera('bg','camHUD')

		setProperty('camGame.visible',false)
		setProperty('camHUD.visible',false)
		seenDaEnd = true
		startVideo('Cutscene3')
		return Function_Stop;
	else
		return Function_Continue;
	end
end