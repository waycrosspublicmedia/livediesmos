function onCreatePost()
	makeLuaSprite('sexy ass bg', 'song specific and bgs/lean/bg', -400, -380);
	scaleObject('sexy ass bg', 0.6, 0.65)
    setScrollFactor('sexy ass bg', 0.95, 0.95)

	addLuaSprite('sexy ass bg', false);
end

function onBeatHit()
    if curBeat == 127 then
        moveOnHit = false
    end
    if curBeat == 144 then
        moveOnHit = true
    end
end

function onEvent(name, value1, value2)
    if name == 'Set Cam Zoom' then
        if value1 == '0.85' then
            moveOnHit = false
        else
            moveOnHit = true
        end
    end
end