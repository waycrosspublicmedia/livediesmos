local bfpos = 0
local carpos = 0

function onCreate()

	bfpos = getProperty('boyfriend.x')

	-- background shit
	makeLuaSprite('Sky', 'Rush/Sky_Rush', -1300, -700);
	setScrollFactor('Sky', 1, 1);
	scaleObject('Sky', 2.3, 2.3);
	addLuaSprite('Sky', false);
	
	makeLuaSprite('Cloud', 'Rush/Cloud_Rush', -900, -300);
	setScrollFactor('Cloud', 1.2, 1.2);
	scaleObject('Cloud', 1.9, 1.9);
	addLuaSprite('Cloud', false);
	
	makeLuaSprite('BG4', 'Rush/BG4_Rush', -1400, -50);
	setScrollFactor('BG4', 1.1, 1.1);
	scaleObject('BG4', 2.8, 2.8);
	addLuaSprite('BG4', false);

	makeLuaSprite('BG3', 'Rush/BG3_Rush', -1500, 50);
	setScrollFactor('BG3', 1.1, 1.1);
	scaleObject('BG3', 2.8, 2.8);
	addLuaSprite('BG3', false);

	makeAnimatedLuaSprite('BG2', 'Rush/BG2_Rush', -1500, 30);
	addAnimationByPrefix('BG2', 'BG2', 'BG2', 24, true)
	setScrollFactor('BG2', 1.1, 1.1);
	scaleObject('BG2', 2, 2);
	addLuaSprite('BG2', false);

	makeAnimatedLuaSprite('BG1', 'Rush/BG1_Rush', -1600, 170);
	addAnimationByPrefix('BG1', 'BG1', 'BG1', 24, true)
	setScrollFactor('BG1', 1.1, 1.1);
	scaleObject('BG1', 1.9, 1.9);
	addLuaSprite('BG1', false);

	makeAnimatedLuaSprite('Ground_Rush', 'Rush/Ground_Rush', -4000, 750);
	addAnimationByPrefix('Ground_Rush', 'Ground_Rush', 'Ground_Rush', 30, true)
	setScrollFactor('Ground_Rush', 1, 1);
	scaleObject('Ground_Rush', 1.9, 1.9);
	addLuaSprite('Ground_Rush', false);

	makeAnimatedLuaSprite('Car', 'Car', 350, 100);
	addAnimationByPrefix('Car', 'Loop', 'Loop', 24, true)
	addAnimationByPrefix('Car', 'Ready ', 'Ready ', 24, true)
	setLuaSpriteScrollFactor('Car', 1, 1);
	scaleObject('Car', 0.95, 0.95);
	addLuaSprite('Car', true);
	playAnim('Car', 'Loop', false)

	--makeAnimatedLuaSprite('Rocket', 'Rocket', -102, 70);
	--addAnimationByPrefix('Rocket', 'GRAAH ', 'GRAAH ', 24, true)
	--setLuaSpriteScrollFactor('Rocket', 1, 1);
	--scaleObject('Rocket', 0.95, 0.95);
	--addLuaSprite('Rocket', true);
	--playAnim('Rocket', 'GRAAH', true)

	makeAnimatedLuaSprite('BFFlyIntro', 'Rush/BFFlyIntro', -1690, -40);
	addAnimationByPrefix('BFFlyIntro', 'BFFlyNOT', 'BFFlyNOT', 24, false)
	addAnimationByPrefix('BFFlyIntro', 'BFFlyIntro', 'BFFlyIntro', 24, false)
	setLuaSpriteScrollFactor('BFFlyIntro', 1, 1);
	addLuaSprite('BFFlyIntro', true);
	playAnim('BFFlyIntro', 'BFFlyNOT', false)

	makeAnimatedLuaSprite('VeryCool', 'Rush/VeryCool', -60, -50);
	addAnimationByPrefix('VeryCool', 'VeryCool', 'VeryCool', 24, true)
	setLuaSpriteScrollFactor('VeryCool', 0, 0);
	scaleObject('VeryCool', 1.5, 1.5);
	--addLuaSprite('VeryCool', true);
	--setObjectCamera('VeryCool', 'hud')

	--setObjectOrder('dadGroup', getObjectOrder('VeryCool')+1)

	makeLuaSprite('realblack','realblack',-900,-400)
    addLuaSprite('realblack',true)
    setLuaSpriteScrollFactor('realblack', 0.5, 0.8);
    scaleObject('realblack', 17, 17);
    doTweenAlpha('realblack.alpha', 'realblack', 0, 0.001, 'linear');

	--carpos = getProperty('Rocket.x')

	setProperty('cameraSpeed', 3)
end