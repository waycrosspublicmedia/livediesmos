function onEvent(name, value1, value2)
    if name == 'Play Animation' then
        if value1 == '1' then
		    doTweenAlpha('byehealth', 'healthBar', 0, 0.01, 'linear')
			doTweenAlpha('icon1', 'iconP1', 0, 0.01, 'linear')
			doTweenAlpha('icon2', 'iconP2', 0, 0.01, 'linear')
			doTweenAlpha('scorehud', 'scoreTxt', 0, 0.01, 'linear')
        end
		if value1 == '2' then
			doTweenAlpha('byehealth', 'healthBar', 1, 0.01, 'linear')
			doTweenAlpha('icon1', 'iconP1', 1, 0.01, 'linear')
			doTweenAlpha('icon2', 'iconP2', 1, 0.01, 'linear')
			doTweenAlpha('scorehud', 'scoreTxt', 1, 0.01, 'linear')
        end
    end
end