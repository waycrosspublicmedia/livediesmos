function onCreate()


makeLuaSprite('AA', 'thestage/BGrambley5', 0, 0);
	scaleObject('AA', 1, 1);
	setScrollFactor('AA', 1, 1);
	setProperty('AA.antialiasing', true);
	
	addLuaSprite('AA', false)
	
	
	
	
	makeAnimatedLuaSprite('swipe', 'thestage/tvBgAnimations', 0, 0)
    addAnimationByIndices('swipe','bg','animations','0,1,2,3,4,5')
    addAnimationByIndices('swipe','bugeado6','animations','5,4,3,2,1,0')
    addAnimationByIndices('swipe','aparecer','animations','6,7,8,9,10,11,12,13,14')
    
	addAnimationByIndices('swipe','bugeado1','animations','15,18,19,20,21,22,24,25,26,27,28')
	addAnimationByIndices('swipe','bugeado2','animations','29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50')
	addAnimationByIndices('swipe','bugeado3','animations','51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72')
	addAnimationByIndices('swipe','bugeado4','animations','73,74,73,75,76,77,78,79,80,81,82')
	addAnimationByIndices('swipe','bugeado5','animations','83,84,85,86,87,88,89,90,91,92')

	
    objectPlayAnimation('swipe', 'bg', true)
	scaleObject('swipe', 2 , 2)
	addLuaSprite('swipe', true)
	
	
	
	makeAnimatedLuaSprite('bfhurt', 'thestage/static', 100, 0)
    addAnimationByPrefix('bfhurt', 'idle', 'idle0', 24, true)
    objectPlayAnimation('bfhurt', 'idle', false)
	scaleObject('bfhurt', 2 , 2)
	addLuaSprite('bfhurt', true)
	setProperty('bfhurt.alpha', 0)


makeLuaSprite('tele', 'thestage/BGtvs3', 0, 0);
	scaleObject('tele', 1, 1);
	setScrollFactor('tele', 1, 1);
	setProperty('tele.antialiasing', true);
	setProperty('tele.alpha', 0)
	addLuaSprite('tele', true)

	
makeLuaSprite('A1', 'thestage/BGwall4', 0, 0);
	scaleObject('A1', 1, 1);
	setScrollFactor('A1', 1, 1);
	setProperty('A1.antialiasing', true);
	
	addLuaSprite('A1', true)
	
	
	makeLuaSprite('A3', 'thestage/BGcounter2', 0, 0);
	scaleObject('A3', 1, 1);
	setScrollFactor('A3', 1, 1);
	setProperty('A3.antialiasing', true);
	
	addLuaSprite('A3', true)
	
	
	
	makeLuaSprite('A4', 'thestage/BGbanner1', 0, 0);
	scaleObject('A4', 1, 1);
	setScrollFactor('A4', 1, 1);
	setProperty('A4.antialiasing', true);
	
	addLuaSprite('A4', true)
	
	
	
	
	
	makeLuaSprite('AA4', 'vignette', -200, -200);
	scaleObject('AA4', 1, 1);
	setScrollFactor('AA4', 0, 0);
	setProperty('AA4.antialiasing', true);
	
	setObjectCamera('AA4', 'camHUD')
	addLuaSprite('AA4', true)
	
	
	
	
end

function onCreatePost()
setProperty('healthBar.visible', false)
setProperty('iconP1.visible', false)
setProperty('iconP2.visible', false)
end


function onStepHit()
if curStep == 240 then




objectPlayAnimation('swipe', 'aparecer', true)
end

if curStep == 503 then


objectPlayAnimation('swipe', 'bugeado1', true)
end
if curStep == 1024 then


objectPlayAnimation('swipe', 'bugeado2', true)
end
if curStep == 1824 then


objectPlayAnimation('swipe', 'bugeado3', true)
end
if curStep == 2080 then


objectPlayAnimation('swipe', 'bugeado4', true)
end
if curStep == 2220 then


objectPlayAnimation('swipe', 'bugeado5', true)
end


if curStep == 2300 then
setProperty('AA.alpha', 0)
setProperty('bfhurt.alpha', 1)
objectPlayAnimation('bfhurt', 'idle', true)
setProperty('tele.alpha', 1)

setProperty('swipe.alpha', 0)
end
if curStep == 2301 then

local videoPath = callMethodFromClass('backend.Paths', 'video', {'CS'})
createInstance('intro', 'backend.VideoSpriteManager', {580, 250})
addInstance('intro', false)


scaleObject('intro', 2 , 2)

callMethod('intro.startVideo', {videoPath})


noteTweenAlpha('o movement1', 4, 0, 0.5, 'linear')
            noteTweenAlpha('o movement2', 5, 0, 0.5, 'linear')
            noteTweenAlpha('o movement3', 6, 0, 0.5, 'linear')
            noteTweenAlpha('o movement4', 7, 0, 0.5, 'linear')

noteTweenAlpha('note movement1', 0, 0, 0.5, 'linear')
            noteTweenAlpha('note movement2', 1, 0, 0.5, 'linear')
            noteTweenAlpha('note movement3', 2, 0, 0.5, 'linear')
            noteTweenAlpha('note movement4', 3, 0, 0.5, 'linear')
            
setProperty('bfhurt.alpha', 0)
objectPlayAnimation('bfhurt', 'idle', true)
setProperty('tele.alpha', 1)
setProperty('swipe.alpha', 0)
setProperty('dadGroup.visible', false)



end

if curStep == 2580 then
doTweenAlpha('oooimu','bfhurt',1, 1,'linear')
		
		


		
noteTweenAlpha('o movement1', 4, 1, 0.5, 'linear')

            noteTweenAlpha('o movement2', 5, 1, 0.5, 'linear')
            noteTweenAlpha('o movement3', 6, 1, 0.5, 'linear')
            noteTweenAlpha('o movement4', 7, 1, 0.5, 'linear')




setProperty('AA.alpha', 0)
setProperty('swipe.alpha', 1)

noteTweenAlpha('note movement1', 0, 1, 0.5, 'linear')
            noteTweenAlpha('note movement2', 1, 1, 0.5, 'linear')
            noteTweenAlpha('note movement3', 2, 1, 0.5, 'linear')
            noteTweenAlpha('note movement4', 3, 1, 0.5, 'linear')
            
end
if curStep == 2630 then
removeLuaSprite('intro')
setProperty('AA.alpha', 1)
setProperty('dadGroup.visible', true)
doTweenAlpha('oooimu','bfhurt',0, 1.3,'linear')
end


if curStep == 2880 then


objectPlayAnimation('swipe', 'bugeado6', true)
end

end
