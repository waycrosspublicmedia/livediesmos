function onEvent(eventName, value1, value2)
    if eventName=='Play Animation' then
	    if value1 == '1' then
		setProperty('cameraSpeed', 10)
	    triggerEvent('Camera Follow Pos', 700, 500)
		setProperty('camHUD.alpha', 0)
		doTweenZoom('zoomIn', 'camGame', 0.55, 0.01, 'sineInOut')
        end
		if value1 == '2' then
		setProperty('cameraSpeed', 1.2)
		setProperty('camHUD.visible', true)
        end
		if value1 == '3' then
		doTweenAlpha('heyyyy', 'camHUD', 1, 1, 'linear')
		doTweenAlpha('byeee', 'vignetteother', 0, 2, 'linear')
        end
	end
end
