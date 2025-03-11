function onCreate()
	-- background shit
	makeLuaSprite('forest', 'forest', -600, -300);
	setScrollFactor('forest', 1, 1);
	scaleObject('forest', 1, 1);
	
	makeLuaSprite('porkis', 'porkis', -500, -300);
	setScrollFactor('porkis', 0.9, 0.9);
	scaleObject('porkis', 1, 1);


	addLuaSprite('forest', false);
	addLuaSprite('porkis', false);
	
	close(true); --For performance reasons, close this script once the stage is fully loaded, as this script won't be used anymore after loading the stage
end