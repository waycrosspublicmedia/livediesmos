
--How makeLuaSprite works:
--makeLuaSprite(<SPRITE VARIABLE>, <SPRITE IMAGE FILE NAME>, <X>, <Y>);
--"Sprite Variable" is how you refer to the sprite you just spawned in other methods like "setScrollFactor" and "scaleObject" for example

--so for example, i made the sprites "stagelight_left" and "stagelight_right", i can use "scaleObject('stagelight_left', 1.1, 1.1)"
--to adjust the scale of specifically the one stage light on left instead of both of them

function onCreate()
	-- background shit
	makeLuaSprite('bloodyhillback', 'TheBg/bloodyhillback', -830, -150);
        scaleObject('bloodyhillback', 1.2, 1.2)
	setScrollFactor('bloodyhillback', 0.1, 0.1);

        makeAnimatedLuaSprite('bloodyhillgeysers', 'TheBg/bloodyhillgeysers', -305, -130);
        addAnimationByPrefix('bloodyhillgeysers', 'bloodyhillgeysers idle', 'bloodyhillgeysers idle', 10, true)
        scaleObject('bloodyhillgeysers', 0.8, 0.8)
	setScrollFactor('bloodyhillgeysers', 0.1, 0.1);

        makeAnimatedLuaSprite('bloodyhillwaterfall', 'TheBg/bloodyhillwaterfall', -140, -125);
        addAnimationByPrefix('bloodyhillwaterfall', 'bloodyhillwaterfall idle', 'bloodyhillwaterfall idle', 10, true)
        scaleObject('bloodyhillwaterfall', 0.75, 0.75)
	setScrollFactor('bloodyhillwaterfall', 0.25, 0.25);

        makeLuaSprite('bloodyhillfront', 'TheBg/bloodyhillfront', 80, -260);
        scaleObject('bloodyhillfront', 0.9, 0.9)
	setScrollFactor('bloodyhillfront', 1.0, 1.0);


        makeLuaSprite('FogLeft', 'TheBg/FogLeft', -880, -300);
        scaleObject('FogLeft', 0.85, 0.85)
	setScrollFactor('FogLeft', 1.5, 1);
        setProperty('FogLeft.alpha', 0)
        doTweenY('FogLeftY', 'FogLeft', -250, 4, 'sineInOut')
        --setObjectOrder('FogLeft', 57)


        makeLuaSprite('FogRight', 'TheBg/FogRight', 880, -300);
        scaleObject('FogRight', 0.95, 0.85)
	setScrollFactor('FogRight', 1.5, 1);
        setProperty('FogRight.alpha', 0)
        doTweenY('FogRightY', 'FogRight', -250, 5, 'sineInOut')
        --setObjectOrder('FogRight',57)

        makeLuaSprite('Sun', 'Sunset/IMG_2303', -830, -490);
        scaleObject('Sun', 1.2, 1.2)
	setScrollFactor('Sun', 0.1, 0.1);
        setProperty('Sun.alpha', 0)

        makeAnimatedLuaSprite('sunsetbloodyhillwaterfalls', 'Sunset/sunsetbloodyhillwaterfalls', -140, -125);
        addAnimationByPrefix('sunsetbloodyhillwaterfalls', 'sunsetbloodyhillwaterfalls idle', 'sunsetbloodyhillwaterfalls idle', 10, true)
        scaleObject('sunsetbloodyhillwaterfalls', 0.75, 0.75)
	setScrollFactor('sunsetbloodyhillwaterfalls', 0.25, 0.25);
        setProperty('sunsetbloodyhillwaterfalls.alpha', 0)

        makeLuaSprite('sunsetbloodyhillfront', 'Sunset/IMG_2307', 220, -260);
        scaleObject('sunsetbloodyhillfront', 0.9, 0.9)
	setScrollFactor('sunsetbloodyhillfront', 1.0, 1.0);
        setProperty('sunsetbloodyhillfront.alpha', 0)

        makeAnimatedLuaSprite('Sky', 'HolyHell/Sky',-400, -80);
        addAnimationByPrefix('Sky', 'Sky', 'idle', 6, true)
        scaleObject('Sky', .8, .8)
	setScrollFactor('Sky', 0.1, 0.1);

        makeAnimatedLuaSprite('Back', 'HolyHell/Back',-300, -80);
        addAnimationByPrefix('Back', 'Back', 'idle', 6, true)
        scaleObject('Back', .8, .8)
	setScrollFactor('Back', 0.3, 0.3);

        makeAnimatedLuaSprite('Fore', 'HolyHell/Fore',-100, -80);
        addAnimationByPrefix('Fore', 'Fore', 'idle', 6, true)
        scaleObject('Fore', .8, .8)
	setScrollFactor('Fore', 1, 1);

        makeLuaSprite('Gradient', 'HolyHell/Gradient', 280, 250);
        scaleObject('Gradient', 1, 0.85)
	setScrollFactor('Gradient', 1.5, 1);
        setProperty('Gradient.alpha', 0)

        setProperty('Fore.alpha', 0)
                setProperty('Back.alpha', 0)
                setProperty('Sky.alpha', 0)


        makeLuaSprite('vignette', 'TheBg/vignette', -140, -70);
        setObjectCamera('vignette', 'camHud')
        scaleObject('vignette', 1.2, 1.2)
	setScrollFactor('vignette', 0.0, 0.0);

        makeLuaSprite('Pixel', 'Sunset/Pixel', 670, -240);
        scaleObject('Pixel', .8, 1.1)
	setScrollFactor('Pixel', 1, 1);
        setProperty('Pixel.alpha', 0)
       -- setObjectOrder('Pixel', 3)


        makeAnimatedLuaSprite('tv_on', 'LivingRoom/tv_on', -1500, -600);
        addAnimationByPrefix('tv_on', 'tv_on idle', 'tv_on idle', 10, true)
        scaleObject('tv_on', 1.6, 1.6)
        setObjectOrder('tv_on', 28)
        setProperty('tv_on.alpha', 0)
        setScrollFactor('tv_on', 0.1, 0.1);
        setObjectCamera('tv_on', 'camOther')

        makeAnimatedLuaSprite('tv_off', 'LivingRoom/tv_off', -1500, -600);
        addAnimationByPrefix('tv_off', 'tv_off turn', 'tv off turn off', 12, false)
        addAnimationByPrefix('tv_off', 'tv_off off', 'tv off off', 12, false)
        scaleObject('tv_off', 1.6, 1.6)
        setObjectOrder('tv_off', 28)
        setProperty('tv_off.alpha', 0)
        setScrollFactor('tv_off', 0.1, 0.1);
        setObjectCamera('tv_off', 'camOther')


        local chance = math.random(1, 50)
        makeLuaSprite('hundredpercent', 'LivingRoom/hundredpercent', -1500, -600);
        scaleObject('hundredpercent', 1.6, 1.6)
        setObjectOrder('hundredpercent', 28)
        setProperty('hundredpercent.alpha', 0)
        setScrollFactor('hundredpercent', 0.1, 0.1);
        setObjectCamera('hundredpercent', 'camOther')

        makeLuaSprite('1in50percent', 'LivingRoom/1in50percent', -1500, -600);
        scaleObject('1in50percent', 1.6, 1.6)
        setObjectOrder('1in50percent', 28)
        setProperty('1in50percent.alpha', 0)
        setScrollFactor('1in50percent', 0.1, 0.1);
        setObjectCamera('1in50percent', 'camOther')


	addLuaSprite('bloodyhillback', false);
	addLuaSprite('bloodyhillgeysers', false);
	addLuaSprite('bloodyhillwaterfall', false);
	addLuaSprite('bloodyhillfront', false);
        addLuaSprite('Sun', false);
	addLuaSprite('sunsetbloodyhillwaterfalls', false);
	addLuaSprite('sunsetbloodyhillfront', false);
        addLuaSprite('FogLeft', true);
        addLuaSprite('FogRight', true);
        addLuaSprite('Sky', false);
        addLuaSprite('Back', false);
        addLuaSprite('Fore', true);
        addLuaSprite('Gradient', true);
        
        addLuaSprite('vignette', false);
        addLuaSprite('Pixel', true);
addLuaSprite('tv_on', true);
addLuaSprite('hundredpercent', true);
        --setObjectOrder('FogLeft', 8)
end



function onTweenCompleted(tag)
       
        if tag == 'FogLeftY' then 
                doTweenY('FogLeftY2', 'FogLeft', -250, 4, 'sineInOut') 
        end
        if tag == 'FogLeftY2' then 
                doTweenY('FogLeftY', 'FogLeft', -200, 4, 'sineInOut')
        end

        if tag == 'FogRightY' then 
                doTweenY('FogRightY2', 'FogRight', -250, 4, 'sineInOut')
        end
        if tag == 'FogRightY2' then 
                doTweenY('FogRightY', 'FogRight', -200, 4, 'sineInOut')
        end
        
        if tag == 'FogLeftX' then 
                doTweenX('FogLeftXX', 'FogLeft', -50, 2, 'sineInOut')
        end
        if tag =='FogLeftXX' then 
                doTweenX('FogLeftX', 'FogLeft', 0, 2, 'sineInOut')
        end

        if tag == 'FogRightX' then 
                doTweenX('FogRightXX', 'FogRight', 530, 2, 'sineInOut')
        end
        if tag =='FogRightXX' then 
                doTweenX('FogRightX', 'FogRight', 590, 2, 'sineInOut')
        end

        if tag == 'FogLeftA' then 
                doTweenAlpha('FogLeftAA', 'FogLeft', .35, 2.5, 'linear')
        end
        if tag == 'FogLeftAA' then 
                doTweenAlpha('FogLeftA', 'FogLeft', .5, 2.5, 'linear')
        end

        if tag == 'FogRightA' then 
                doTweenAlpha('FogRightAA', 'FogRight', .35, 2.5, 'linear')
        end
        if tag == 'FogRightAA' then 
                doTweenAlpha('FogRightA', 'FogRight', .5, 2.5, 'linear')
        end
end



function onStepHit()
        if curStep == 314 then --314 
                doTweenX('FogLeftX', 'FogLeft', 0, 3, 'quadOut')
                doTweenX('FogRightX', 'FogRight', 590,3, 'quadOut')
                doTweenAlpha('FogLeftA', 'FogLeft', .5, 2.5, 'linear')
                doTweenAlpha('FogRightA', 'FogRight', .5, 2.5, 'linear')
               -- doTweenColor('bg1', 'bloodyhillwaterfall', '696969', 2.5, 'linear')
               -- doTweenColor('bg2', 'bloodyhillgeysers', '696969', 2.5, 'linear')
               -- doTweenColor('bg3', 'bloodyhillback', '696969', 2.5, 'linear')
                doTweenColor('bg4', 'bloodyhillfront', '8a8a8a', 2.5, 'linear')
        end
        if curStep == 1088 then 
                setProperty('Fore.alpha', 1)
                setProperty('Back.alpha', 1)
                setProperty('Sky.alpha', 1)
                setProperty('boyfriend.alpha', 0)
                setProperty('gf.alpha', 0)
                setProperty('Gradient.alpha', 1)
        end
        if curStep == 1344 then 
                setProperty('Fore.alpha', 0)
                setProperty('Back.alpha', 0)
                setProperty('Sky.alpha', 0)
                setProperty('boyfriend.alpha', 1)
                setProperty('gf.alpha', 1)
                setProperty('Gradient.alpha', 0)
                setProperty('Sun.alpha', 1)
                setProperty('sunsetbloodyhillwaterfalls.alpha', 1)
                 setProperty('sunsetbloodyhillfront.alpha', 1)
                
        end
        if curStep == 1497 then 
                runHaxeCode([[
                FlxTween.tween(game.camOther, {zoom: 1.3}, .01, {ease: FlxEase.sineInOut});
             ]])
          end
          if curStep == 1499 then 
             runHaxeCode([[
                FlxTween.tween(game, {defaultCamZoom: .39}, 15, {ease: FlxEase.sineInOut});
                FlxTween.tween(game.camOther, {zoom: .39}, 15, {ease: FlxEase.sineInOut});
               ]])
               --setProperty('Pixel.alpha', 1)
               setProperty('tv_on.alpha', 1)
             end
             if curStep == 1616 then 
                setProperty('tv_off.alpha', 1)
                playAnim('tv_off', 'tv_off turn', false)
             end 
             if curStep == 1618 then 
                playAnim('tv_off', 'tv_off off', false)
             end
             if curStep == 1632 then 
                if chance == 1 then
                doTweenAlpha('1in50percentA', '1in50percent', 1, 3.1)
                else 
                        doTweenAlpha('hundredpercentA', 'hundredpercent', 1, 3.1)
                end
             end



end

function onUpdatePost (elapsed) 
	setTextFont('scoreTxt','NiseSegaSonic.ttf')
	setTextFont('timeTxt','NiseSegaSonic.ttf')
	setTextFont('botplayTxt','NiseSegaSonic.ttf')
	setTextSize('scoreTxt', 20)
end