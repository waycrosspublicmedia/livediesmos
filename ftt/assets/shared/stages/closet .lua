function onCreate() 
	setProperty('showRating',false)
	setProperty('showComboNum',false)
	setProperty('skipCountdown',true)

	makeLuaSprite('bg','bg/closet/closetbgg',-400,200)
	addLuaSprite('bg')

	makeLuaSprite('lighting','bg/closet/closetmultiply',-600,200)
	setBlendMode('lighting','multiply')
	addLuaSprite('lighting',true)
	
	makeLuaSprite('boxes','bg/closet/closetboxes',-400,1200)
	addLuaSprite('boxes',true)
	setScrollFactor('boxes',1.2,1.2)

end

function onCreatePost()
setProperty('dad.visible',false)
end