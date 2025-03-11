
--local size = 1

function onCreate()
    precacheImage('Wind')
end
function lerp(a,b,t) return a * (1-t) + b * t end
local id = 0

function onStepHit()
    if curStep == 64 or curStep == 871 or curStep == 1184 or curStep == 1728 then
        runTimer('windAppear', 0.1, 0);
    end
    if curStep == 816 or curStep == 817 or curStep == 1144 or curStep == 1692 or curStep == 2271 then
        cancelTimer('windAppear')
    end
end

function onTimerCompleted(tag, loops, loopsLeft)
    if not lowQuality then
    if tag == 'windAppear' then
        id = id + 1
        local tag = 'Wind'..id
        makeLuaSprite(tag, 'Rush/Wind', 500, getRandomInt(-30, 700))
        setProperty(tag..'.x', (getProperty(tag..'.width')*2) + 1700)
        setProperty(tag..'.acceleration.x', -10800)
        --setProperty(tag..'.angularAcceleration', getRandomInt(-25, 25))
        addLuaSprite(tag, true)
        runTimer('windAppear', 0.3, 0);
        if id > 0 then
            for i = 1,id do
                local tag = 'Wind'..i
                if luaSpriteExists(tag) then
                    if getProperty(tag..'.x') <= -800  then
                        removeLuaSprite(tag)
                        --size = size + 0.1
                    end
                end
            end
        end
    end
end
end