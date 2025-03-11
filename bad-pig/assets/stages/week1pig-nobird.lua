function onCreate()
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
	addLuaSprite('Bush 2', false);
	addLuaSprite('Bush 1', false);
	addLuaSprite('Foreground', false);
end