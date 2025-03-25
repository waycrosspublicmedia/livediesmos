function onSongStart()
	setProperty('camGame.visible',false)
	setProperty('camHUD.visible',false)
end

function onEvent(n,v1)
	if n == 'Trigger' and v1 == 'start' then
		cameraFlash('camHUD','FFFFFF',0.5)
		setProperty('camGame.visible',true)
		setProperty('camHUD.visible',true)
		setProperty('myCutscene_video.alpha',0)
	elseif n == 'Trigger' and v1 == 'cutscene' then
		cameraFlash('camHUD','FFFFFF',0.5)
		setProperty('camGame.visible',false)
		makeVideoSprite('myCutscene', 'fromthetopcutscene',0,0, 'camHUD', false)
		setProperty('myCutscene_video.alpha',1)
		setObjectOrder('myCutscene_video',1)
	elseif n == 'Trigger' and v1 == 'hudgoaway' then
		setObjectOrder('myCutscene_video',100)
	elseif n == 'Trigger' and v1 == 'dd' then
		cameraFlash('camHUD','FFFFFF',0.5)
		setProperty('camHUD.visible',true)
		setProperty('camGame.visible',true)
	elseif n == 'Trigger' and v1 == 'end' then
		makeAnimatedLuaSprite('end','ilovefridaynightfunkin', 125,50)
		addAnimationByPrefix('end','idle','ha',12,true)
		scaleObject('end', 0.666, 0.666)
		setObjectCamera('end', 'camOther')
		addLuaSprite('end',true)
		
		cameraFlash('camOther','FFFFFF',0.5)
		setProperty('camGame.visible',false)
		doTweenAlpha('camHUD', 'camHUD', 0, 1, 'linear')
	end
end