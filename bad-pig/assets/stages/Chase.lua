local bfpos = 0
local carpos = 0
local startFloat = false

function onCreate()
	--precaching stuff so it doesn't freeze lmao
	addCharacterToList('colorRed', 'dad')
	addCharacterToList('colorYellow', 'gf')
	addCharacterToList('colorGreen', 'boyfriend')
	addCharacterToList('RossEscape', 'boyfriend')
	addCharacterToList('chuckfly', 'gf')
	addCharacterToList('redfly', 'dad')
	addCharacterToList('redfly bficon', 'dad')
	addCharacterToList('red close', 'dad')
	addCharacterToList('redfly final', 'dad')
	--ok done precaching
		
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

	makeAnimatedLuaSprite('Rocket', 'Rocket', -102, 70);
	addAnimationByPrefix('Rocket', 'GRAAH ', 'GRAAH ', 24, true)
	setLuaSpriteScrollFactor('Rocket', 1, 1);
	scaleObject('Rocket', 0.95, 0.95);
	addLuaSprite('Rocket', true);
	playAnim('Rocket', 'GRAAH', true)

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
	addLuaSprite('VeryCool', true);
	--setObjectCamera('VeryCool', 'hud')

	setObjectOrder('dadGroup', getObjectOrder('VeryCool')+1)

	makeLuaSprite('realblack','realblack',-900,-400)
    addLuaSprite('realblack',true)
    setLuaSpriteScrollFactor('realblack', 0.5, 0.8);
    scaleObject('realblack', 17, 17);
    doTweenAlpha('realblack.alpha', 'realblack', 1, 0.001, 'linear');

	makeLuaSprite('CacheWind', 'Rush/Wind', 500, getRandomInt(-30, 700))
	setProperty('CacheWind.alpha', 0.00001)
	addLuaSprite('CacheWind', true)

	setProperty('Sky.alpha', 0.00001)
	setProperty('Cloud.alpha', 0.00001)
	setProperty('BG4.alpha', 0.00001)
	setProperty('BG3.alpha', 0.00001)
	setProperty('BG2.alpha', 0.00001)
	setProperty('BG1.alpha', 0.00001)
	setProperty('Ground_Rush.alpha', 0.00001)
	setProperty('Car.alpha', 0.00001)
	setProperty('Rocket.alpha', 0.00001)
	setProperty('VeryCool.alpha', 0.00001)
	setProperty('BFFlyIntro.alpha', 0.00001)

	carpos = getProperty('Rocket.x')
end

function onStepHit()
	if curStep == 1 then
		triggerEvent('Change Character', 0, 'colorGreen');
		triggerEvent('Change Character', 1, 'colorRed');
		triggerEvent('Change Character', 2, 'colorYellow');
		doTweenAlpha('realblack.alpha', 'realblack', 0, 0.35, 'linear');
	end
	if curStep == 64 then
		setProperty('Sky.alpha', 1)
		setProperty('Cloud.alpha', 1)
		setProperty('BG4.alpha', 1)
		setProperty('BG3.alpha', 1)
		setProperty('BG2.alpha', 1)
		setProperty('BG1.alpha', 1)
		setProperty('Ground_Rush.alpha', 1)
		setProperty('Car.alpha', 1)

		startFloat = true
	end
	if curStep == 95 then
		setProperty('cameraSpeed', 3)
	end
	if curStep == 432 then
		setProperty('VeryCool.alpha', 1)
		setProperty('cameraSpeed', 99)
	end
	if curStep == 448 then
		setProperty('VeryCool.alpha', 0.00001)
		setProperty('cameraSpeed', 3)
	end
	if curStep == 560 then
		setProperty('VeryCool.alpha', 1)
		setProperty('cameraSpeed', 99)
	end
	if curStep == 576 then
		setProperty('VeryCool.alpha', 0.00001)
		setProperty('cameraSpeed', 3)
	end
	if curStep == 816 then
		--doTweenAlpha('camerafade', 'camGame', 0, 1.5, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 1, 1.5, 'linear');
	end
	if curStep == 871 then
		playAnim('BFFlyIntro', 'BFFlyIntro', false)
		setProperty('BFFlyIntro.alpha', 1)
		--doTweenAlpha('camerafade', 'camGame', 1, 3, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 0, 3, 'linear');
	end	
	if curStep == 888 then
		setProperty('health', 1);
	end	
	if curStep == 893 then
		setProperty('BFFlyIntro.alpha', 0.00001)
	end	
	if curStep == 1144 then
		--doTweenAlpha('camerafade', 'camGame', 0, 0.5, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 1, 0.5, 'linear');
	end	
	if curStep == 1184 then
		--doTweenAlpha('camerafade', 'camGame', 1, 0.5, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 0, 0.5, 'linear');
	end	
	if curStep == 1692 then
		--doTweenAlpha('camerafade', 'camGame', 0, 0.4, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 1, 0.4, 'linear');
	end	
	if curStep == 1728 then
		--doTweenAlpha('camerafade', 'camGame', 1, 0.4, 'linear')
		doTweenAlpha('realblack.alpha', 'realblack', 0, 0.4, 'linear');
	end	
	if curStep == 2229 then
		playSound('rocket_full', 1, 'rocketsound')
		playAnim('Car', 'Ready', false)
	end	
	if curStep == 2240 then
		setProperty('Car.alpha', 0.00001)
		setProperty('Rocket.alpha', 1)
		doTweenX('bfmove', 'boyfriend', 3010, 1.2, 'quintIn')
		doTweenX('movecar', 'Rocket', 2000, 1.2, 'quintIn')
	end
	if curStep == 2271 then
		setObjectCamera('realblack', 'other')
		doTweenAlpha('realblack.alpha', 'realblack', 1, 1.3, 'linear');
	end	
	if curStep == 2299 then
		setProperty('Sky.alpha', 0.00001)
		setProperty('Cloud.alpha', 0.00001)
		setProperty('BG4.alpha', 0.00001)
		setProperty('BG3.alpha', 0.00001)
		setProperty('BG2.alpha', 0.00001)
		setProperty('BG1.alpha', 0.00001)
		setProperty('Ground_Rush.alpha', 0.00001)
		setProperty('Car.alpha', 0.00001)
		setProperty('Rocket.alpha', 0.00001)
		setProperty('VeryCool.alpha', 0.00001)
		setProperty('BFFlyIntro.alpha', 0.00001)
		setProperty('boyfriend.alpha', 0)
		setProperty('dad.alpha', 0)
		setProperty('gf.alpha', 0)
	end	
end

function onSongStart()
    setProperty('cameraSpeed', 99)
    --setProperty('cameraSpeed', 3)
end


function onUpdate(elapsed)
	if startFloat then
	-- The Actual Code --
	setProperty('dadGroup.x', getProperty('dadGroup.x') + 2 * math.cos(curDecBeat / 4 * math.pi) * elapsed * 20)
	setProperty('dadGroup.y', getProperty('dadGroup.y') + 3 * math.sin(curDecBeat / 4 * math.pi) * elapsed * 15)

	setProperty('gfGroup.x', getProperty('gfGroup.x') + 2 * math.cos(curDecBeat / -4 * math.pi) * elapsed * 20)
	setProperty('gfGroup.y', getProperty('gfGroup.y') + 3 * math.sin(curDecBeat / -4 * math.pi) * elapsed * 10)
	
	-- This Fixes The Camera Bug Issue --
	-- Change the true to false if you see this appearing on BF side and not the opponent Side --
	if mustHitSection == true then
		setProperty('camFollow.x', getProperty('camFollow.x'))
		setProperty('camFollow.y', getProperty('camFollow.y'))
	else
		setProperty('camFollow.x', getProperty('camFollow.x') + 2 * math.cos(curDecBeat / 4 * math.pi) * elapsed * 20)
		setProperty('camFollow.y', getProperty('camFollow.y') + 3 * math.sin(curDecBeat / 4 * math.pi) * elapsed * 15)
	end
end
end


function onGameOver()
    setProperty('camFollowPos.x', getMidpointX('boyfriend')-10); setProperty('camFollowPos.y', getMidpointY('boyfriend')-10)
end