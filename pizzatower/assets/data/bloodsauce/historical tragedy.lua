---@diagnostic disable: undefined-global, lowercase-global
function onCreatePost()
setProperty("camZooming",true)
end
function onUpdate()
if curBeat >= 220 and curBeat < 223 then
    setProperty("isCameraOnForcedPos",true)
    setProperty("camFollow.x",1050)
    setProperty("camFollow.y",810)
    setProperty("camFollowPos.x",1050)
    setProperty("camFollowPos.y",810)
    setProperty("camGame.zoom",1.1)
end
if curBeat >= 223 and curBeat < 224 then
    setProperty("isCameraOnForcedPos",true)
    setProperty("camFollow.x",1600)
    setProperty("camFollow.y",760)
    setProperty("camFollowPos.x",1600)
    setProperty("camFollowPos.y",760)
    setProperty("camGame.zoom",0.74)
end
end

function onBeatHit()
local bhits= {
    -- [0] = function() end,
    [224] = function ()
        setProperty("isCameraOnForcedPos",false)
        setProperty("cameraSpeed",2)
    end,
    [225] = function ()
        setProperty("cameraSpeed",1)
    end
}

for i,v in pairs(bhits) do
    if curBeat == i then
       v()
    end
end
if curBeat >= 96 and curBeat <= 159 then
triggerEvent("Add Camera Zoom",0.015,0.03)
end 
end