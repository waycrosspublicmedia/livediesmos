local gfSpeed = 1;

function onBeatHit()

	if (curBeat % gfSpeed == 0) then
		if curBeat % (gfSpeed * 2) == 0 then
			setProperty('iconP1.scale.x', 0.8 );
			setProperty('iconP1.scale.y', 0.8 );
			setProperty('iconP2.scale.x', 1.2 );
			setProperty('iconP2.scale.y', 1.3 );

			setProperty('iconP1.angle', -15);
			setProperty('iconP2.angle', 15);
		else
			setProperty('iconP1.scale.x', 1.2 );
			setProperty('iconP1.scale.y', 1.3 );
			setProperty('iconP2.scale.x', 0.8 );
			setProperty('iconP2.scale.y', 0.8 );

			setProperty('iconP2.angle', -15);
			setProperty('iconP1.angle', 15);
		end

	end

end

function onUpdate()

    if (getProperty('iconP1.angle') >= 0) then
	    if ('iconP1.angle' ~= 0) then
    	    setProperty('iconP1.angle', getProperty('iconP1.angle')-1);
    	end
    else
        if ('iconP1.angle' ~= 0) then
    	    setProperty('iconP1.angle', getProperty('iconP1.angle')+1);
    	end
    end

    if (getProperty('iconP2.angle') >= 0) then
	    if ('iconP2.angle' ~= 0) then
    	    setProperty('iconP2.angle', getProperty('iconP2.angle')-1);
    	end
    else
        if ('iconP2.angle' ~= 0) then
    	    setProperty('iconP2.angle', getProperty('iconP2.angle')+1);
    	end
    end

end

function onCreatePost()
    setObjectOrder('gfGroup', getObjectOrder('dadGroup') + 1)
    setProperty('iconP4.alpha', '0.0')
    setProperty('iconP3.alpha', '0.0')
    setProperty('scoreTxt.visible', false)
end

function onStepHit()
    if curStep == 267 then
        setProperty('iconP4.alpha', '1.0')
    elseif curStep == 1099 then
    triggerEvent('Change Character', 'Dad', 'mariopixel')
    triggerEvent('Change Character', 'GF', 'yoshipixel')
    triggerEvent('Change Character', 'BF', 'bfmpixel')
    triggerEvent('Change', 'Pixel', '')
    end
end