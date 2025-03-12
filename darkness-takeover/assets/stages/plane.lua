
function onCreate()
    makeAnimatedLuaSprite('Bg1', 'animated/airborne/bg', 400, 90);
    addAnimationByPrefix('Bg1', 'Bg1Anim', 'bg anim',24, true)
	scaleObject('Bg1', 1.25, 1.25);



	makeLuaSprite('skystill', 'animated/airborne/skystill',-600,-300)
	scaleObject('skystill', 1.25, 1.25);
	setLuaSpriteScrollFactor('skystill',0, 0);



	makeAnimatedLuaSprite('sparks', 'animated/airborne/sparks',-600,-300)
	addAnimationByPrefix('sparks', 'sparksAnim', 'sparks anim',24, true)
setProperty('sparks.alpha', 0);
	scaleObject('sparks', 1.25, 1.25);
	setLuaSpriteScrollFactor('sparks',0, 0);
	addLuaSprite('sparks',false);


	makeAnimatedLuaSprite('Bg2', 'animated/airborne/bg2', 400, 90);
    addAnimationByPrefix('Bg2', 'Bg2Anim', 'bg2 anim',24, true)
setProperty('Bg2.alpha', 0);
	scaleObject('Bg2', 1.25, 1.25);
    addLuaSprite('Bg2',false);

	makeLuaSprite('hue', 'animated/airborne/hue',-600,-300)
	scaleObject('hue', 1.25, 1.25);
setProperty('hue.alpha', 0);
	setLuaSpriteScrollFactor('hue',0, 0);
	addLuaSprite('hue',false);

	makeAnimatedLuaSprite('sky', 'animated/airborne/sky', -600, -300);
    addAnimationByPrefix('sky', 'skyAnim', 'sky anim',24, true);
	scaleObject('sky', 1.25, 1.25);
setProperty('sky.alpha', 0);
	setLuaSpriteScrollFactor('sky',0, 0);



		makeAnimatedLuaSprite('white', 'animated/rooten/whitebg', 350, -360);
		addAnimationByPrefix('white','whiteanm','whitebg idle',24,true)
setProperty('white.alpha', 0);
		scaleObject('white', 2.5, 2.5);
    addLuaSprite('white',false);


    addLuaSprite('sky',false);
	addLuaSprite('skystill',false);
    addLuaSprite('Bg1',false);

makeAnimatedLuaSprite('effectd_Anm', 'animated/effect', -550, -300);
addAnimationByPrefix('effectd_Anm','effectdanm','effect animation',24,true)
setObjectCamera('effectd_Anm', 'other')
setProperty('effectd_Anm.alpha', 0)
scaleObject('effectd_Anm', 1.73, 1.73);
addLuaSprite('effectd_Anm', false)
end

function onCreatePost()
 setProperty('iconP2.y', getProperty('iconP2.y') + 30)

end

function onUpdatePost()
    P1Mult = getProperty('healthBar.x') + ((getProperty('healthBar.width') *        getProperty('healthBar.percent') * 0.01) + (150 * getProperty('iconP1.scale.x') - 150) / 2 - 26)
    P2Mult = getProperty('healthBar.x') + ((getProperty('healthBar.width') * getProperty('healthBar.percent') * 0.01) - (150 * getProperty('iconP2.scale.x')) / 2 - 26 * 2)


    setProperty('iconP1.x',P1Mult - 130)
    setProperty('iconP1.flipX',true)

    setProperty('iconP2.x',P2Mult + 130)
    setProperty('iconP2.flipX',true)

    setProperty('healthBar.flipX',true)
    setProperty('healthBarBG.flipX',true)
end