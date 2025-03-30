function onCreate()
	makeLuaSprite('youhavebeendestroyed', 'tabi/fire/new/youhavebeendestroyed', -480, -180);
	addLuaSprite('youhavebeendestroyed', false);  

	makeLuaSprite('vignette', 'tabi/vignette', 0, 0);
	addLuaSprite('vignette', true);
	setObjectCamera('vignette', 'hud');
         
        makeLuaSprite('vignetteother', 'tabi/vignette', 0, 0);
	addLuaSprite('vignetteother', true);
	setObjectCamera('vignetteother', 'other');

	makeAnimatedLuaSprite('newfireglow', 'tabi/fire/newfireglow', 700, 0)
	scaleObject('newfireglow', 1.5, 1.5);
    addAnimationByPrefix('newfireglow', 'idle2', '', 24, true);
	addLuaSprite('newfireglow', false)

	makeAnimatedLuaSprite('newfireglow2', 'tabi/fire/newfireglow', -50, 0)
	scaleObject('newfireglow2', 1.5, 1.5);
    addAnimationByPrefix('newfireglow2', 'idle2', '', 24, true);
	addLuaSprite('newfireglow2', false)

	makeAnimatedLuaSprite('newfireglow3', 'tabi/fire/newfireglow', -750, 0)
	scaleObject('newfireglow3', 1.5, 1.5);
    addAnimationByPrefix('newfireglow3', 'idle2', '', 24, true);
	addLuaSprite('newfireglow3', false)

	makeAnimatedLuaSprite('newfireglow4', 'tabi/fire/newfireglow', 1250, 0)
	scaleObject('newfireglow4', 1.5, 1.5);
    addAnimationByPrefix('newfireglow4', 'idle2', '', 24, true);
	addLuaSprite('newfireglow4', false)

	makeLuaSprite('glowyfurniture', 'tabi/fire/new/glowyfurniture', -620, -200);
	addLuaSprite('glowyfurniture', false);

	makeLuaSprite('overlayingsticks', 'tabi/fire/new/overlayingsticks', -480, -250);
	addLuaSprite('overlayingsticks', true);
	setLuaSpriteScrollFactor('overlayingsticks',0.9,0.9)
 
end

function onUpdate()
setProperty('vignette.alpha',1)
end

function opponentNoteHit(id,data,type,sus)
	health = getProperty('health')
	if getProperty('health') > 0.2 then
		setProperty('health', health- 0.009);
	end
end