local chef_timer = 0

function onCreate()
	-- background shit
	setPropertyFromClass('GameOverSubstate', 'characterName', 'BFBirdDead');

	makeLuaSprite('Courtroom', 'king/Courtroom', -600, -1200);
	setScrollFactor('Courtroom', 1, 1);
	addLuaSprite('Courtroom', false);

	makeAnimatedLuaSprite('CorporalPig', 'king/CorporalPig', -100, 490);
	addAnimationByPrefix('CorporalPig', 'CorporalPig', 'CorporalPig', 24, false)
	setScrollFactor('CorporalPig', 1, 1);
	addLuaSprite('CorporalPig', false);

	makeAnimatedLuaSprite('Pig1', 'king/Pig1', 1050, 550);
	addAnimationByPrefix('Pig1', 'Pig1', 'Pig1', 24, false)
	setScrollFactor('Pig1', 1, 1);
	addLuaSprite('Pig1', false);

	makeAnimatedLuaSprite('ChefPig', 'king/ChefPig', -950, 230);
	addAnimationByPrefix('ChefPig', 'Nothing', 'Nothing', 24, false)
	addAnimationByPrefix('ChefPig', 'le_chef', 'le_chef', 24, false)
	objectPlayAnimation('ChefPig', 'Nothing', false)
	setScrollFactor('ChefPig', 1, 1);
	addLuaSprite('ChefPig', false);

	makeAnimatedLuaSprite('Pig2', 'king/Pig2', -590, 530);
	addAnimationByPrefix('Pig2', 'Pig2', 'Pig2', 24, false)
	setScrollFactor('Pig2', 1, 1);
	addLuaSprite('Pig2', false);

	makeAnimatedLuaSprite('Pig3', 'king/Pig3', 745, 575);
	addAnimationByPrefix('Pig3', 'Pig3', 'Pig3', 24, false)
	setScrollFactor('Pig3', 1, 1);
	addLuaSprite('Pig3', false);

	makeLuaSprite('L_Pilar', 'king/L_Pilar', 1100, -1500);
	setScrollFactor('L_Pilar', 1.3, 1.3);
	addLuaSprite('L_Pilar', true);

	makeLuaSprite('R_Pilar', 'king/R_Pilar', -1290, -1500);
	setScrollFactor('R_Pilar', 1.3, 1.3);
	addLuaSprite('R_Pilar', true);

	makeLuaSprite('void','realblack',-900,-400)
    setLuaSpriteScrollFactor('void', 0.5, 0.8);
    scaleObject('void', 17, 17);
	doTweenAlpha('void.alpha', 'void', 0, 0.001, 'linear');
	addLuaSprite('void', false)

end

function onCreatePost()
	setPropertyFromGroup('playerStrums', 0, 'x', 300)
	setPropertyFromGroup('playerStrums', 1, 'x', 430)
	setPropertyFromGroup('playerStrums', 2, 'x', 740)
	setPropertyFromGroup('playerStrums', 3, 'x', 865)
end

function onMoveCamera(focus)
	if focus == 'boyfriend' then
		doTweenX('L_PilarX', 'L_Pilar', 1100, 1, 'sineOut')
		doTweenX('R_PilarX', 'R_Pilar', -1290, 1, 'sineOut')
		setProperty("defaultCamZoom", 0.65)
	end
	if focus == 'dad' then
		doTweenX('L_PilarX', 'L_Pilar', 1200, 0.5, 'sineOut')
		doTweenX('R_PilarX', 'R_Pilar', -1400, 0.5, 'sineOut')
		setProperty("defaultCamZoom", 0.9)
	end
end

function onUpdatePost(elapsed)
	noteTweenAlpha('nuh-uh', 0, 0, 0.0001, 'linear')
	noteTweenAlpha('nuh-uh1', 1, 0, 0.0001, 'linear')
	noteTweenAlpha('nuh-uh2', 2, 0, 0.0001, 'linear')
	noteTweenAlpha('nuh-uh3', 3, 0, 0.0001, 'linear')
	setPropertyFromGroup('opponentStrums', 0, 'x', 4000)
	setPropertyFromGroup('opponentStrums', 1, 'x', 4000)
	setPropertyFromGroup('opponentStrums', 2, 'x', 4000)
	setPropertyFromGroup('opponentStrums', 3, 'x', 4000)
end

function onStepHit()
	if curStep == 704 then
		doTweenAlpha('void.alpha', 'void', 0.7, 0.001, 'linear');
	end
	if curStep == 832 then
		doTweenAlpha('void.alpha', 'void', 0, 0.001, 'linear');
	end
end

function onBeatHit()
	if curBeat % 2 == 0 then
		objectPlayAnimation('Pig1', 'Pig1', true)
		objectPlayAnimation('Pig2', 'Pig2', true)
		objectPlayAnimation('Pig3', 'Pig3', true)
		objectPlayAnimation('CorporalPig', 'CorporalPig', true)
	end
end

function onCountdownTick(counter)
	if counter == 0 or counter == 2 or counter == 4 then
		objectPlayAnimation('Pig1', 'Pig1', true)
		objectPlayAnimation('Pig2', 'Pig2', true)
		objectPlayAnimation('Pig3', 'Pig3', true)
		objectPlayAnimation('CorporalPig', 'CorporalPig', true)
	end
end

function onSongStart()
	runTimer('timerchef', getRandomInt(10,20), 0);
end

function onTimerCompleted(tag, loops, loopsLeft)
	if tag == 'timerchef' then
		objectPlayAnimation('ChefPig', 'le_chef', true)
		runTimer('timerchef', getRandomInt(12,22), 0);
	end
end