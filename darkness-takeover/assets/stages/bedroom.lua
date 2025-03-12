function onCreate()

		makeLuaSprite('stuff', 'animated/rooten/stuff', -700, -300);
		setLuaSpriteScrollFactor('stuff',1, 1);
		scaleObject('stuff', 0.85, 0.85);
		addLuaSprite('stuff', true);


		makeLuaSprite('bedroom', 'animated/rooten/bedroom', -700, -300);
		setLuaSpriteScrollFactor('bedroom',1, 1);
		scaleObject('bedroom', 0.85, 0.85);
		addLuaSprite('bedroom', false);


		makeAnimatedLuaSprite('bg2_Anm', 'animated/rooten/bg2', -700, -300);
		addAnimationByPrefix('bg2_Anm','bg2anm','bg2 idle',24,true)
		scaleObject('bg2_Anm', 0.85, 0.85);
		addLuaSprite('bg2_Anm', false);


		makeAnimatedLuaSprite('bg3_Anm', 'animated/rooten/bg3', -700, -300);
		addAnimationByPrefix('bg3_Anm','bg3anm','bg3 idle',24,true)
		scaleObject('bg3_Anm', 0.85, 0.85);
		addLuaSprite('bg3_Anm', false);


		makeAnimatedLuaSprite('effect', 'animated/rooten/bgeffect', -600, -300);
		addAnimationByPrefix('effect','bgeffectanm','bgeffect idle',24,true)
		setLuaSpriteScrollFactor('effect',0, 0);
		scaleObject('effect', 0.85, 0.85);

		addLuaSprite('effect',true)

		makeAnimatedLuaSprite('white', 'animated/rooten/whitebg', -1075, -650); --900 --500
		addAnimationByPrefix('white','whiteanm','whitebg idle',24,true)
		setLuaSpriteScrollFactor('effect',1, 1);
		scaleObject('white', 2.5, 2.5);
		addLuaSprite('white',false)


end

function onCreatePost()
setProperty('effect.visible', false)
setProperty('white.visible', false)
setProperty('bg2_Anm.visible', false)
setProperty('bg3_Anm.visible', false)

end