function onCreate()
	-- background shit
	makeLuaSprite('BackGround', 'week2pig/Sky', -585, -500);
	setScrollFactor('BackGround', 1, 1);
	scaleObject('BackGround', 1.8, 1.8);
	addLuaSprite('BackGround', false);

	makeLuaSprite('bg4', 'week2pig/bg4', -660, -350);
	setScrollFactor('bg4', 1.2, 1.2);
	scaleObject('bg4', 1.8, 1.8);
	addLuaSprite('bg4', false);

	makeLuaSprite('bg 3', 'week2pig/bg 3', -660, -170);
	setScrollFactor('bg 3', 1.2, 1.2);
	scaleObject('bg 3', 1.8, 1.8);
	addLuaSprite('bg 3', false);

	makeLuaSprite('bg 2', 'week2pig/bg 2', -630, -270);
	setScrollFactor('bg 2', 1.1, 1.1);
	scaleObject('bg 2', 1.8, 1.8);
	addLuaSprite('bg 2', false);

	makeLuaSprite('bg 1', 'week2pig/bg 1', -585, -150);
	setScrollFactor('bg 1', 1, 1);
	scaleObject('bg 1', 1.8, 1.8);
	addLuaSprite('bg 1', false);

	makeLuaSprite('Bush', 'week2pig/Bush', -350, 200);
	setScrollFactor('Bush', 1, 1);
	scaleObject('Bush', 1.8, 1.8);
	addLuaSprite('Bush', false);

	makeLuaSprite('Tree', 'week2pig/Tree', 1100, 100);
	setScrollFactor('Tree', 1, 1);
	scaleObject('Tree', 1.8, 1.8);
	addLuaSprite('Tree', false);

	makeLuaSprite('Foreground', 'week2pig/Foreground', -580, 300);
	setScrollFactor('Foreground', 1, 1);
	scaleObject('Foreground', 1.8, 1.8);
	addLuaSprite('Foreground', false);

	--makeAnimatedLuaSprite('A_Mimir','week2pig/A_Mimir', 980, 290);
	--setScrollFactor('A_Mimir', 1, 1);
	--scaleObject('A_Mimir', 1.8, 1.8);
	--addAnimationByPrefix('A_Mimir', 'sleep', 'A_Mimir', 16, true);
	--addLuaSprite('A_Mimir', false);

	makeAnimatedLuaSprite('MissingEggs','week2pig/I_am_missing_these_eggs', 1140, 300);
	setScrollFactor('MissingEggs', 1, 1);
	scaleObject('MissingEggs', 0.95, 0.95);
	addAnimationByPrefix('MissingEggs', 'Eggs', 'Eggs', 30, true);
	addAnimationByPrefix('MissingEggs', 'Missing', 'Missing', 30, true);
	addLuaSprite('MissingEggs', false);
	objectPlayAnimation('MissingEggs', 'Eggs', true)

	makeAnimatedLuaSprite('RedSleeping','week2pig/RedSleeping', 940, 268);
	setScrollFactor('RedSleeping', 1, 1);
	scaleObject('RedSleeping', 0.95, 0.95);
	addAnimationByPrefix('RedSleeping', 'RedSleeping', 'RedSleeping', 28, true);
	addLuaSprite('RedSleeping', false);

	makeAnimatedLuaSprite('RedWakeUP','week2pig/RedWakeUP', 955, 300);
	setScrollFactor('RedWakeUP', 1, 1);
	scaleObject('RedWakeUP', 0.95, 0.95);
	addLuaSprite('RedWakeUP', false);
	setProperty('RedWakeUP.visible', false)

	makeAnimatedLuaSprite('FakeOut','week2pig/FakeOut', 940, 268);
	setScrollFactor('FakeOut', 1, 1);
	scaleObject('FakeOut', 0.95, 0.95);
	addLuaSprite('FakeOut', false);
	setProperty('FakeOut.visible', false)

	makeAnimatedLuaSprite('ChuckSleeping','week2pig/ChuckSleeping', 1350, 280);
	setScrollFactor('ChuckSleeping', 1, 1);
	scaleObject('ChuckSleeping', 0.95, 0.95);
	addAnimationByPrefix('ChuckSleeping', 'ChuckSleeping', 'ChuckSleeping', 28, true);
	addLuaSprite('ChuckSleeping', false);

	makeAnimatedLuaSprite('ChuckIsLikeHuh','week2pig/ChuckIsLikeHuh', 1350, 285);
	setScrollFactor('ChuckIsLikeHuh', 1, 1);
	scaleObject('ChuckIsLikeHuh', 0.95, 0.95);
	addLuaSprite('ChuckIsLikeHuh', false);
	setProperty('ChuckIsLikeHuh.visible', false)

	makeLuaText('You_text', 'YOU', 150, 235, 150)
	addLuaText('You_text')
	setTextSize('You_text', 80)
	setTextFont('You_text', 'CCBattleCry Regular.ttf')
end

function onCreatePost()
	doTweenAlpha('textdisappear', 'You_text', 0, 0.001, 'linear')
	setProperty('healthBar.flipX', true)
	setProperty('iconP1.flipX', true)
	setProperty('iconP2.flipX', true)
end

function onStepHit()
	if curStep == 48 then
		doTweenAlpha('textdisappear', 'You_text', 0, 1, 'quadOut')
	end
end

function onSongStart()
	doTweenAlpha('textdisappear', 'You_text', 1, 1, 'quadOut')
end

function onUpdate(elapsed)
	if downscroll then
		setProperty('You_text.y', 480);
	end
	if middlescroll then
		setProperty('You_text.visible', false);
		setPropertyFromGroup('playerStrums', 0, 'x', defaultPlayerStrumX0)
		setPropertyFromGroup('playerStrums', 1, 'x', defaultPlayerStrumX1)
		setPropertyFromGroup('playerStrums', 2, 'x', defaultPlayerStrumX2)
		setPropertyFromGroup('playerStrums', 3, 'x', defaultPlayerStrumX3)
		setPropertyFromGroup('playerStrums', 4, 'x', defaultPlayerStrumX4)
		setPropertyFromGroup('opponentStrums', 0, 'x', defaultOpponentStrumX0)
		setPropertyFromGroup('opponentStrums', 1, 'x', defaultOpponentStrumX1)
		setPropertyFromGroup('opponentStrums', 2, 'x', defaultOpponentStrumX2)
		setPropertyFromGroup('opponentStrums', 3, 'x', defaultOpponentStrumX3)
		setPropertyFromGroup('opponentStrums', 4, 'x', defaultOpponentStrumX4)
	else
		setPropertyFromGroup('playerStrums', 0, 'x', defaultOpponentStrumX0)
		setPropertyFromGroup('playerStrums', 1, 'x', defaultOpponentStrumX1)
		setPropertyFromGroup('playerStrums', 2, 'x', defaultOpponentStrumX2)
		setPropertyFromGroup('playerStrums', 3, 'x', defaultOpponentStrumX3)
		setPropertyFromGroup('playerStrums', 4, 'x', defaultOpponentStrumX4)
		setPropertyFromGroup('opponentStrums', 0, 'x', defaultPlayerStrumX0)
		setPropertyFromGroup('opponentStrums', 1, 'x', defaultPlayerStrumX1)
		setPropertyFromGroup('opponentStrums', 2, 'x', defaultPlayerStrumX2)
		setPropertyFromGroup('opponentStrums', 3, 'x', defaultPlayerStrumX3)
		setPropertyFromGroup('opponentStrums', 4, 'x', defaultPlayerStrumX4)
	end
end

function onUpdatePost()
	x1 = getProperty('healthBar.x') + (getProperty('healthBar.width') * (((100 - (100 - (getProperty('healthBar.percent'))))) * 0.01)) + (150 * getProperty('iconP2.scale.x') - 150) / 2 - 26
	x2 = getProperty('healthBar.x') + (getProperty('healthBar.width') * (((100 - (100 - (getProperty('healthBar.percent'))))) * 0.01)) - (150 * getProperty('iconP1.scale.x')) / 2 - 26 * 2
	setProperty('iconP1.x', x2)
	setProperty('iconP2.x', x1)

	--fipped healthbar code by moonlight_catalyst
end