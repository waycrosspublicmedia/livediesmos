local CharacterBG = 0

function onCreate()
	CharacterBG = 0

	-- background shit
	makeLuaSprite('Sky', 'week1pig/Sky', -600, -500);
	setScrollFactor('Sky', 1, 1);
	scaleObject('Sky', 1.7, 1.7);
	
	makeLuaSprite('Bg 1', 'week1pig/Bg 1', -600, -200);
	setScrollFactor('Bg 1', 1.2, 1.2);
	scaleObject('Bg 1', 1.7, 1.7);
	
	makeLuaSprite('Bg 2', 'week1pig/Bg 2', -600, -50);
	setScrollFactor('Bg 2', 1.1, 1.1);
	scaleObject('Bg 2', 1.7, 1.7);

	makeLuaSprite('RedFly', 'week1pig/RedFly', -1400, 80);
	setScrollFactor('RedFly', 1, 1);

	makeLuaSprite('ChuckFly', 'week1pig/ChuckFly', -1400, 60);
	setScrollFactor('ChuckFly', 1, 1);

	makeLuaSprite('BlueFly', 'week1pig/BlueFly', -1400, 20);
	setScrollFactor('BlueFly', 1, 1);
	
	makeLuaSprite('Foreground', 'week1pig/Foreground', -580, 300);
	setScrollFactor('Foreground', 1, 1);
	scaleObject('Foreground', 1.7, 1.7);

	makeLuaSprite('Bush 2', 'week1pig/Bush 2', -350, 110);
	setScrollFactor('Bush 2', 1.1, 1.1);
	scaleObject('Bush 2', 1.7, 1.7);

	makeLuaSprite('Bush 1', 'week1pig/Bush 1', 1100, 170);
	setScrollFactor('Bush 1', 1.1, 1.1);
	scaleObject('Bush 1', 1.7, 1.7);

	addLuaSprite('Sky', false);
	addLuaSprite('Bg 1', false);
	addLuaSprite('Bg 2', false);
	addLuaSprite('RedFly', false);
	addLuaSprite('ChuckFly', false);
	addLuaSprite('BlueFly', false);
	addLuaSprite('Bush 2', false);
	addLuaSprite('Bush 1', false);
	addLuaSprite('Foreground', false);
end

function onSongStart()
	if birdsfly then
		doTweenAlpha('AlphaRedFly', 'RedFly', 0, 0.001, 'linear')
		doTweenAlpha('AlphaChuckFly', 'ChuckFly', 0, 0.001, 'linear')
		doTweenAlpha('AlphaBlueFly', 'BlueFly', 0, 0.001, 'linear')
	else
		runTimer('birdfly', getRandomInt(6,15), 0);
		CharacterBG = getRandomInt(1,3)
	--debugPrint(CharacterBG)
	end
end

function onTimerCompleted(tag, loops, loopsLeft)
	if tag == 'birdfly' then
		if CharacterBG == 1 then
			doTweenX('RedTween', 'RedFly', 1800, 0.25, 'linear')
			playSound('redPass0')
		else if CharacterBG == 2 then
			doTweenX('ChuckTween', 'ChuckFly', 1850, 0.25, 'linear')
			playSound('chuckPass1')
		else if CharacterBG == 3 then
			doTweenX('BlueTween', 'BlueFly', 1950, 0.25, 'linear')
			playSound('bluePass1')
		end
		end
		end
	end
end

function onTweenCompleted(tag)
	if tag == 'RedTween' or tag == 'ChuckTween' or tag == 'BlueTween' then
		setProperty("RedFly.x", -1400)
		setProperty("ChuckFly.x", -1400)
		setProperty("BlueFly.x", -1400)
		runTimer('birdfly', getRandomInt(6,15), 0);
		CharacterBG = getRandomInt(1,3)
		--debugPrint(CharacterBG)
	end
end