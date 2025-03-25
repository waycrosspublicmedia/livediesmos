function onCreate() 
	setProperty('showRating',true)
	setProperty('showComboNum',true)
	setProperty('skipCountdown',false)

	makeLuaSprite('bg','bg/stage-ftt/stagebg',-600,-500)
	addLuaSprite('bg')
	
	makeLuaSprite('girder','bg/stage-ftt/girder',-600,-339)
	addLuaSprite('girder',true)
	setObjectOrder('girder',20)
	
	makeLuaSprite('spotlights','bg/stage-ftt/spotlights',-250,-300)
	addLuaSprite('spotlights', true)
	setScrollFactor('spotlights',1.1,1.1)
	
	makeLuaSprite('lights','bg/stage-ftt/addlights',-125,-225)
	setBlendMode('lights','add')
	addLuaSprite('lights',true)
	
	makeLuaSprite('curtains','bg/stage-ftt/stagecurtains',-900,-500)
	addLuaSprite('curtains',true)
	setScrollFactor('curtains',1.2,1.2)
	
	makeAnimatedLuaSprite('crowd','bg/stage-ftt/crowd', -1500,1200)
	setScrollFactor('crowd',1.3,0.3)
	addAnimationByPrefix('crowd','idle','crowd',12,true)
	addLuaSprite('crowd',true)
	
	makeLuaSprite('multiply','bg/stage-ftt/stagemultiply',-600,-300)
	setBlendMode('multiply','multiply')
	setProperty('multiply.alpha',0)
	addLuaSprite('multiply',true)

end

function onCreatePost()
	if (shadersEnabled) then
		initLuaShader('adjustColor')

		setSpriteShader('boyfriend','adjustColor')
		setSpriteShader('gf','adjustColor')
		setSpriteShader('dad','adjustColor')

	end
end

function onEvent(n, v1, v2)
	if n == 'Crowd Control' then
		cancelTween('crowdBop')
		if	v1 == 'true' then
			doTweenY('crowdAppear', 'crowd', 600, 3, 'circOut')
		elseif v1 == 'false' then
			doTweenY('crowdDisappear', 'crowd', 750, 2, 'circIn')
		elseif v1 == 'bop' then
			setProperty('crowd.y', 675)
			doTweenY('crowdBop', 'crowd', 600, 0.5, 'circOut')
		end
	end
    if n == 'Lua Spotlight' then
		if v2 == 'true' then
			setProperty('lights.alpha', 0)
		else
			doTweenAlpha('lightsComeBackPleaseILoveYou', 'lights', 1, 1, 'quadOut')
		end
	end
end