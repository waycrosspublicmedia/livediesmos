function onCreate()
	makeLuaSprite('bg', 'song specific and bgs/spooky/rc/SpoogyBG', 0, 0);
	scaleObject('bg', 0.91, 0.9);

    makeLuaSprite('lightning', 'song specific and bgs/spooky/rc/SpoogyOrnagyBG', 0, 0);
	scaleObject('lightning', 0.9, 0.9);
	
	makeLuaSprite('sp1trolling', 'song specific and bgs/spooky/rc/SpoogyFG', -100, 660);
    scaleObject('sp1trolling', 0.7, 0.7)
    setScrollFactor('sp1trolling', 0.4, 0.2)

    addLuaSprite('bg');
	addLuaSprite('lightning', true);
    --addLuaSprite('sp1trolling', true);
end