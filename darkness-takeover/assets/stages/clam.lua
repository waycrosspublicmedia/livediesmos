function onCreate()
	makeLuaSprite('clam', 'animated/fv/clam', -700, -170);
	scaleObject('clam', 0.75, 0.75);

	addLuaSprite('clam',false);


	makeAnimatedLuaSprite('clam2', 'animated/fv/clam2',-700,-170)
	addAnimationByPrefix('clam2', 'Anim', 'clam2 Anim',24, true)
	scaleObject('clam2', 0.75, 0.75);
setProperty('clam2.visible', false)
	addLuaSprite('clam2',false);


	makeAnimatedLuaSprite('clam3', 'animated/fv/clam3',-700,-170)
	addAnimationByPrefix('clam3', 'Anim', 'clam3 Anim',24, true)
	scaleObject('clam3', 0.75, 0.75);
setProperty('clam3.visible', false)
	addLuaSprite('clam3',false);


		makeAnimatedLuaSprite('white', 'animated/rooten/whitebg', -1075, -650); --900 --500
		addAnimationByPrefix('white','whiteanm','whitebg idle',24,true)
setProperty('white.visible', false)
		setLuaSpriteScrollFactor('effect',1, 1);
		scaleObject('white', 2.5, 2.5);
		addLuaSprite('white',false)

		makeAnimatedLuaSprite('effect', 'animated/rooten/bgeffect', -630, -300);
		addAnimationByPrefix('effect','bgeffectanm','bgeffect idle',24,true)
		scaleObject('effect', 1, 1);
		addLuaSprite('effect',true)




makeLuaSprite('bg1', 'animated/twinkle/Twinklebg1',-1075,-650)
scaleObject('bg1', 1, 1);
setProperty('bg1.alpha', 0)
addLuaSprite('bg1', false)
end