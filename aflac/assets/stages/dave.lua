function onCreate()
	math.randomseed(os.clock() * 1000); 
	-- background shit
	makeLuaSprite('stageback', 'Dave', -600, -200);
	setScrollFactor('stageback', 1, 1);
	scaleObject('stageback', 1.6, 1.6);
	
	makeLuaSprite('stagefront', 'da-sky', -400, -700);
	setScrollFactor('stagefront', 0.3, 0.3);
	scaleObject('stagefront', 1.5, 1.5);
	
	makeAnimatedLuaSprite('clouds', 'clouds', -360, -160)
	addAnimationByPrefix('clouds', 'bop', 'bop',24,false)
	setScrollFactor('clouds', 0.7, 0.7);
	scaleObject('clouds', 1.3, 1.3);

	makeAnimatedLuaSprite('speakers', 'Speakers', 580, 340)
	addAnimationByPrefix('speakers', 'bop', 'boombox',24,false)
	setScrollFactor('clouds', 1, 1);



	-- sprites that only load if Low Quality is turned off
	

	addLuaSprite('stagefront', false);
	addLuaSprite('clouds', false);
	addLuaSprite('stageback', false);
	--addLuaSprite('speakers', false);
	setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'vine-boom'); --put in mods/sounds/
	setPropertyFromClass('GameOverSubstate', 'characterName', 'boy'); --put in mods/sounds/
	
	--addLuaSprite('stagelight_left', false);
	--addLuaSprite('stagelight_right', false);
	--addLuaSprite('stagecurtains', false);
	
	--close(true); --For performance reasons, close this script once the stage is fully loaded, as this script won't be used anymore after loading the stage
end
function onBeatHit()
	if curBeat % 2 == 0 then 
	objectPlayAnimation('clouds', 'bop', true)

	end
		objectPlayAnimation('speakers', 'bop', true)
end