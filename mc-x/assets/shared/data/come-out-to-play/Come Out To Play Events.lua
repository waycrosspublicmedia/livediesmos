
local opponentStrumPositions = {}
local playerStrumPositions = {}
   function onTweenCompleted(tag)
         if tag == 'soultailsX' then
            doTweenX('soultailsX2', 'soultails', 100, 4, 'quadInOut')
         end
         if tag == 'soultailsX2' then 
            doTweenX('soultailsX', 'soultails', 180, 4, 'quadInOut')
         end
         if tag == 'soultailsY' then
            doTweenY('soultailsY2', 'soultails', -190, 5, 'quadInOut')
         end 
         if tag == 'soultailsY2' then 
            doTweenY('soultailsY', 'soultails', -100, 5, 'quadInOut')
         end

         if tag == 'keytarX' then
            doTweenX('keytarX2', 'keytar', 100, 4, 'quadInOut')
         end
         if tag == 'keytarX2' then 
            doTweenX('keytarX', 'keytar', 180, 4, 'quadInOut')
         end
         if tag == 'keytarY' then
            doTweenY('keytarY2', 'keytar', -190, 5, 'quadInOut')
         end 
         if tag == 'keytarY2' then 
            doTweenY('keytarY', 'keytar', -100, 5, 'quadInOut')
         end

         if tag == 'soulknuxX' then
            doTweenX('soulknuxX2', 'soulknux', 700, 4, 'quadInOut')
         end
         if tag == 'soulknuxX2' then 
            doTweenX('soulknuxX', 'soulknux', 610, 4, 'quadInOut')
         end
         if tag == 'soulknuxY' then 
            doTweenY('soulknuxY2', 'soulknux', -110, 5, 'quadInOut')
         end 
         if tag == 'soulknuxY2' then 
            doTweenY('soulknuxY', 'soulknux', -230, 5, 'quadInOut')
         end

         if tag == 'saxophoneX' then
            doTweenX('saxophoneX2', 'saxophone', 700, 4, 'quadInOut')
         end
         if tag == 'saxophoneX2' then 
            doTweenX('saxophoneX', 'saxophone', 610, 4, 'quadInOut')
         end
         if tag == 'saxophoneY' then 
            doTweenY('saxophoneY2', 'saxophone', -90, 5, 'quadInOut')
         end 
         if tag == 'saxophoneY2' then 
            doTweenY('saxophoneY', 'saxophone', -195, 5, 'quadInOut')
         end
   
         if tag == 'souleggX' then 
            doTweenX('souleggX2', 'soulegg', 350, 4.2, 'quadInOut')
         end 
         if tag == 'souleggX2' then 
            doTweenX('souleggX', 'soulegg', 230, 4.2, 'quadInOut')
         end
         if tag == 'souleggY' then 
            doTweenY('souleggY2', 'soulegg', -330, 5.2, 'quadInOut')
         end 
         if tag == 'souleggY2' then 
            doTweenY('souleggY', 'soulegg', -240, 5.2, 'quadInOut')
         end

         if tag == 'triangleX' then 
            doTweenX('triangleX2', 'triangle', 350, 4.2, 'quadInOut')
         end 
         if tag == 'triangleX2' then 
            doTweenX('triangleX', 'triangle', 230, 4.2, 'quadInOut')
         end
         if tag == 'triangleY' then 
            doTweenY('triangleY2', 'triangle', -330, 5.2, 'quadInOut')
         end 
         if tag == 'triangleY2' then 
            doTweenY('triangleY', 'triangle', -240, 5.2, 'quadInOut')
         end
         
         if tag == 'soultailsAA' then 
            doTweenAlpha('soultailsAA2', 'soultails', .9, 3)
         end
         if tag == 'soultailsAA2' then 
            doTweenAlpha('soultailsAA', 'soultails', .7, 3)

         end
         if tag == 'soulknuxA' then 
            doTweenAlpha('soulknuxA2', 'soulknux', .9, 3.2)
         end
         if tag == 'soulknuxA2' then 
            doTweenAlpha('soulknuxA', 'soulknux', .7, 3.2)

         end

         if tag == 'keytarAA' then 
            doTweenAlpha('keytarAA2', 'keytar', .9, 3)
         end
         if tag == 'keytarAA2' then 
            doTweenAlpha('keytarAA', 'keytar', .7, 3)

         end
         if tag == 'saxophoneAA' then 
            doTweenAlpha('saxophoneAA2', 'saxophone', .9, 3.2)
         end
         if tag == 'saxophoneAA2' then 
            doTweenAlpha('saxophoneAA', 'saxophone', .7, 3.2)

         end

         if tag == 'souleggAA' then 
            doTweenAlpha('souleggAA2', 'soulegg', .9, 3)
         end
         if tag == 'souleggAA2' then 
            doTweenAlpha('souleggAA','soulegg', .7, .3)

         end
         if tag == 'triangleAA' then 
            doTweenAlpha('triangleAA2', 'triangle', .9, 3.2)
         end
         if tag == 'triangleAA2' then 
            doTweenAlpha('triangleAA','triangle', .7, .3)

         end
    end
  function onSongStart()
   doTweenAlpha('ItsTime', 'flashblack', 0, 2)
   for i = 0, 3 do
      opponentStrumPositions[i] = getPropertyFromGroup('opponentStrums', i, 'x')
      playerStrumPositions[i] = getPropertyFromGroup('playerStrums', i, 'x')
  end
end
    function onCreatePost()
      
      makeLuaSprite('flashblack', '', 0, 0);
      makeGraphic('flashblack',1280,720,'000000')
        addLuaSprite('flashblack', true);
        setLuaSpriteScrollFactor('flashblack',0,0)
            setObjectCamera('flashblack', 'camGame')
        setProperty('flashblack.scale.x',2)
        setProperty('flashblack.scale.y',2)
      setProperty('flashblack.alpha',1)

        makeAnimatedLuaSprite('soultails', 'souls/soultails', 140, -150)
        scaleObject('soultails', 1, 1) 
        setProperty('soultails.alpha',0)
        doTweenX('soultailsX', 'soultails', 160, 4, 'quadInOut')
        doTweenY('soultailsY', 'soultails', -110, 5, 'quadInOut')


        makeAnimatedLuaSprite('keytar', 'souls/keytar', 140, -150)
        scaleObject('keytar', 1, 1) 
        setProperty('keytar.alpha', 0)
        doTweenX('keytarX', 'keytar', 160, 4, 'quadInOut')
        doTweenY('keytarY', 'keytar', -110, 5.2, 'quadInOut')
    
        addAnimationByPrefix('soultails', 'idle', 'soultails idle', 12, true)
        addAnimationByPrefix('keytar', 'idle', 'keytar idle', 12, true)
        addAnimationByPrefix('keytar', 'singLEFT', 'keytar left', 12, false)
        addAnimationByPrefix('keytar', 'singDOWN', 'keytar down', 12, false)
        addAnimationByPrefix('keytar', 'singUP', 'keytar up', 12, false)
        addAnimationByPrefix('keytar', 'singRIGHT', 'keytar right', 12, false)
    
        addLuaSprite('soultails', true)
        playAnim('soultails', 'idle', true)
        addLuaSprite('keytar', true)
        playAnim('keytar', 'idle', true)

--knux
        makeAnimatedLuaSprite('soulknux', 'souls/soulknux', 660, -190)
        scaleObject('soulknux', 1, 1) 
        setProperty('soulknux.alpha', 0)
        doTweenX('soulknuxX', 'soulknux', 630, 4.2, 'quadInOut')
        doTweenY('soulknuxY', 'soulknux', -210, 5.2, 'quadInOut')

        makeAnimatedLuaSprite('saxophone', 'souls/saxophone', 660, -190)
        scaleObject('saxophone', 1, 1) 
        setProperty('saxophone.alpha',0)
        doTweenX('saxophoneX', 'saxophone', 630, 4.2, 'quadInOut')
        doTweenY('saxophoneY', 'saxophone', -195, 5.2, 'quadInOut')
    
        addAnimationByPrefix('soulknux', 'idle', 'soulknux idle', 12, true)
        addAnimationByPrefix('saxophone', 'idle', 'saxophone idle', 12, true)
        addAnimationByPrefix('saxophone', 'singLEFT', 'saxophone left', 12, false)
        addAnimationByPrefix('saxophone', 'singDOWN', 'saxophone down', 12, false)
        addAnimationByPrefix('saxophone', 'singUP', 'saxophone up', 12, false)
        addAnimationByPrefix('saxophone', 'singRIGHT', 'saxophone right', 12, false)
    
        addLuaSprite('soulknux', false)
        playAnim('soulknux', 'idle', true)
        addLuaSprite('saxophone', false)
        playAnim('saxophone', 'idle', true)

        --eggman
        makeAnimatedLuaSprite('soulegg', 'souls/soulegg', 280, -310)
        scaleObject('soulegg', 1, 1) 
        setProperty('soulegg.alpha', 0)
        doTweenX('souleggX', 'soulegg', 230, 4.2, 'quadInOut')
        doTweenY('souleggY', 'soulegg', -240, 5.2, 'quadInOut')

        makeAnimatedLuaSprite('triangle', 'souls/triangle', 280, -310)
        scaleObject('triangle', 1, 1) 
        setProperty('triangle.alpha',0)
        doTweenX('triangleX', 'triangle', 230, 4.2, 'quadInOut')
        doTweenY('triangleY', 'triangle', -240, 5.2, 'quadInOut')
    
        addAnimationByPrefix('soulegg', 'idle', 'soulegg idle', 12, true)
        addAnimationByPrefix('triangle', 'idle', 'triangle idle', 12, true)
     
        addLuaSprite('soulegg', false)
        playAnim('soulegg', 'idle', true)
        addLuaSprite('triangle', false)
        playAnim('triangle', 'idle', true)
        
        makeAnimatedLuaSprite('egg_emerge', 'souls/egg_emerge', 130, -300)
        scaleObject('egg_emerge', .5, .5) 
        setProperty('egg_emerge.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('egg_emerge', 'camOther')
        addLuaSprite('egg_emerge', false)
        addAnimationByPrefix('egg_emerge', 'idle', 'egg_emerge idle', 8, false)
        --playAnim('egg_emerge', 'idle', false)

        makeAnimatedLuaSprite('knuxemerge', 'souls/knuxemerge', 550, -30)
        scaleObject('knuxemerge', .5, .5) 
        setProperty('knuxemerge.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('knuxemerge', 'camOther')
        addLuaSprite('knuxemerge', false)
        addAnimationByPrefix('knuxemerge', 'idle', 'knuxemerge idle', 8, false)
        --playAnim('knuxemerge', 'idle', false)

        makeAnimatedLuaSprite('tails_emerge', 'souls/tails_emerge', -300, -30)
        scaleObject('tails_emerge', .5, .5) 
        setProperty('tails_emerge.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('tails_emerge', 'camOther')
        addLuaSprite('tails_emerge', false)
        addAnimationByPrefix('tails_emerge', 'idle', 'tails emerge idle', 8, false)
        --playAnim('tails_emerge', 'idle', false)

        makeAnimatedLuaSprite('souleggposes', 'souls/souleggposes', 130, -300)
        scaleObject('souleggposes', .5, .5) 
        setProperty('souleggposes.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('souleggposes', 'camOther')
        addLuaSprite('souleggposes', false)
        addAnimationByPrefix('souleggposes', 'idle', 'souleggposes idle', 8, true)
       -- playAnim('souleggposes', 'idle', true)

        addAnimationByPrefix('souleggposes', 'singLEFT', 'souleggposes left', 12, false)
        addAnimationByPrefix('souleggposes', 'singDOWN', 'souleggposes down', 12, false)
        addAnimationByPrefix('souleggposes', 'singUP', 'souleggposes up', 12, false)
        addAnimationByPrefix('souleggposes', 'singRIGHT', 'souleggposes right', 12, false)

        makeAnimatedLuaSprite('soulknuxposes', 'souls/soulknuxposes', 550, -30)
        scaleObject('soulknuxposes', .5, .5) 
        setProperty('soulknuxposes.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('soulknuxposes', 'camOther')
        addLuaSprite('soulknuxposes', false)
        addAnimationByPrefix('soulknuxposes', 'idle', 'soulknuxposes idle', 8, true)
       --playAnim('soulknuxposes', 'idle', true)

        addAnimationByPrefix('soulknuxposes', 'singLEFT', 'soulknuxposes left', 12, false)
        addAnimationByPrefix('soulknuxposes', 'singDOWN', 'soulknuxposes down', 12, false)
        addAnimationByPrefix('soulknuxposes', 'singUP', 'soulknuxposes up', 12, false)
        addAnimationByPrefix('soulknuxposes', 'singRIGHT', 'soulknuxposes right', 12, false)

        makeAnimatedLuaSprite('soultailsposes', 'souls/soultailsposes', -300, -30)
        scaleObject('soultailsposes', .5, .5) 
        setProperty('soultailsposes.alpha', 0)
        --doTweenX('egg_emergeX', 'egg_emerge', 230, 4.2, 'quadInOut')
        --doTweenY('egg_emergeY', 'egg_emerge', -240, 5.2, 'quadInOut')
        setObjectCamera('soultailsposes', 'camOther')
        addLuaSprite('soultailsposes', false)
        addAnimationByPrefix('soultailsposes', 'idle', 'soultailsposes idle', 8, true)
       -- playAnim('soultailsposes', 'idle', true)

        addAnimationByPrefix('soultailsposes', 'singLEFT', 'soultailsposes left', 12, false)
        addAnimationByPrefix('soultailsposes', 'singDOWN', 'soultailsposes down', 12, false)
        addAnimationByPrefix('soultailsposes', 'singUP', 'soultailsposes up', 12, false)
        addAnimationByPrefix('soultailsposes', 'singRIGHT', 'soultailsposes right', 12, false)

        makeAnimatedLuaSprite('still_and_know', 'HolyHell/still_and_know', -10, -300)
        scaleObject('still_and_know', .5, .5) 
        setObjectCamera('still_and_know', 'camOther')
        addLuaSprite('still_and_know', false)
        addAnimationByPrefix('still_and_know', 'Anim1', 'still and know that', 8, false)
        addAnimationByPrefix('still_and_know', 'Anim2', 'still and know i', 8, false)
        addAnimationByPrefix('still_and_know', 'Anim3', 'still and know am', 8, false)
        setProperty('still_and_know.alpha', 0)

        makeAnimatedLuaSprite('GOD', 'HolyHell/GOD', -10, -300)
        scaleObject('GOD', 1, 1) 
        setObjectCamera('GOD', 'camHUD')
        addLuaSprite('GOD', false)
        addAnimationByPrefix('GOD', 'Anim4', 'god i am god', 12, false)
        --addAnimationByPrefix('GOD', 'Anim5', 'GOD god', 12, false)
        setProperty('GOD.alpha', 0)

        makeLuaSprite('I', 'HolyHell/I', 230, -70)
        addLuaSprite('I', false)
        setObjectCamera('I', 'camOther')
        scaleObject('I', .4, .4) 
        setProperty('I.alpha', 0)

        makeLuaSprite('AM', 'HolyHell/AM', 230, -70)
        addLuaSprite('AM', false)
        setObjectCamera('AM', 'camOther')
        scaleObject('AM', .4, .4) 
        setProperty('AM.alpha', 0)

        makeLuaSprite('I AM GOD', 'HolyHell/I AM GOD', 230, -70)
        addLuaSprite('I AM GOD', false)
        setObjectCamera('I AM GOD', 'camOther')
        scaleObject('I AM GOD', .4, .4) 
        setProperty('I AM GOD.alpha', 0)

        makeLuaSprite('I AM GOD BRIGHT', 'HolyHell/I AM GOD BRIGHT', 230, -70)
        addLuaSprite('I AM GOD BRIGHT', false)
        setObjectCamera('I AM GOD BRIGHT', 'camOther')
        scaleObject('I AM GOD BRIGHT', .4, .4) 
        setProperty('I AM GOD BRIGHT.alpha', 0)


        --setProperty('camZoomingMult', 0)
    end
    function onStepHit()
      if curStep == 1 then 
        -- runHaxeCode([[
          --  FlxTween.tween(game, {defaultCamZoom: .39}, 2, {ease: FlxEase.sineInOut});
          --  FlxTween.tween(game.camOther, {zoom: .39}, 2, {ease: FlxEase.sineInOut});
          -- ]])
         end
      if curStep == 1060 then 
         setProperty('still_and_know.alpha', 1)
         playAnim('still_and_know','Anim1', false)
      end 
      if curStep == 1062 then 
         setProperty('still_and_know.alpha', 0)
      end
      if curStep == 1064 then 
         setProperty('still_and_know.alpha', 1)
      end
      if curStep == 1070 then 
         playAnim('still_and_know','Anim2', false)
      end 
      if curStep == 1077 then 
         setProperty('I.alpha', 1)
      end
      if curStep == 1072 then 
         playAnim('still_and_know','Anim3', false)
      end
      if curStep == 1078 then 
         setProperty('still_and_know.alpha', 0)
         setProperty('GOD.alpha', 1)
         playAnim('GOD','Anim4', false)
      end 
      if curStep == 1079 then 
         setProperty('AM.alpha', 1)
      end
      if curStep == 1082 then 
         --playAnim('GOD','Anim5', false)
         setProperty('I AM GOD BRIGHT.alpha', 1)
         setProperty('I AM GOD.alpha', 1)
         doTweenAlpha('I AM GOD BRIGHT A', 'I AM GOD BRIGHT', 0, 1.5)
      end
      if curStep == 1471 then 
        -- runHaxeCode([[
           -- FlxTween.tween(game, {defaultCamZoom: 1.2}, 2, {ease: FlxEase.sineInOut});
          -- ]])
          -- setProperty('isCameraOnForcedPos', true)
          -- doTweenX('tweenX', 'camFollow',900, 2, 'expoOut')
           --doTweenY('tweenY', 'camFollow',500,2, 'expoOut')
           doTweenAlpha('hudgone', 'camHUD', 0 ,1)
         end
         if curStep == 1487 then 
            playSound('Teleport', .9)
         end
         if curStep == 1489 then 
            runHaxeCode([[
           FlxTween.tween(game, {defaultCamZoom: 1.2}, 1, {ease: FlxEase.expoInOut});
           ]])
            setProperty('dad.alpha', 0)
            setProperty('cameraSpeed', 1)
            setProperty('isCameraOnForcedPos', false)
         end
         
         if curStep == 1581 then 
           -- setProperty('Pixel.alpha', 1)
            setProperty('boyfriend.alpha', 0)
           setProperty('gf.alpha', 0)
           --setProperty('tv_on.alpha', 1)
         end
        if curStep == 336 then 
         setProperty('isCameraOnForcedPos', true)
         doTweenX('tweenX2', 'camFollow',1325, 1.3, 'expoOut')
         doTweenY('tweenY2', 'camFollow',450,1.3, 'expoOut')
           cancelTween('tweenX')
           cancelTween('tweenY')
           runHaxeCode([[
            FlxTween.tween(game, {defaultCamZoom: .75}, 1, {ease: FlxEase.quadOut});
           ]])
        end 
        if curStep == 320 then 
         setProperty('isCameraOnForcedPos', true)
         doTweenX('tweenX', 'camFollow',795, 1, 'expoOut')
         doTweenY('tweenY', 'camFollow',500,1, 'expoOut')
         runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: 1.1}, 1.3, {ease: FlxEase.quadInOut});
                    ]])
         end
        if curStep == 327 then 
            doTweenAlpha('soulknuxA','soulknux', .8, .9)
            doTweenAlpha('saxophoneA','saxophone', .8, .9)
            doTweenAlpha('soultailsA','soultails', .8, .9)
            doTweenAlpha('keytarA','keytar', .8, .9)
            doTweenAlpha('souleggA','soulegg', .8, .9)
            doTweenAlpha('triangleA','triangle', .8, .9)
           
        end
        if curStep == 348 then
            doTweenAlpha('soultailsAA', 'soultails', .7, 3)
            doTweenAlpha('soulknuxAA', 'soulknux', .7, 3)
            doTweenAlpha('keytarAA', 'keytar', .7, 3)
            doTweenAlpha('saxophoneAA', 'saxophone', .7, 3)
            doTweenAlpha('souleggAA','soulegg', .7, .3)
            doTweenAlpha('triangleAA','triangle', .7, .3)
            --folowcam = true
        end
        if curStep == 448 then 
         setProperty('isCameraOnForcedPos', true)
         doTweenX('tweenX', 'camFollow',795, 1.4, 'sineInOut')
         doTweenY('tweenY', 'camFollow',500,1.4, 'sineInOut')
         runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: 1.2}, 1.5, {ease: FlxEase.quadInOut});
                    ]])
                  end
        if curStep == 464 then 
         setProperty('isCameraOnForcedPos', false)
         cancelTween('tweenX')
         cancelTween('tweenY')
         setProperty('cameraSpeed', .5)
         runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: .8}, 2, {ease: FlxEase.expoOut});
                    ]])
                  end
                  if curStep == 479 then 
                     setProperty('cameraSpeed', 1)
                  end
        if curStep == 712 then 
         runHaxeCode([[
            FlxTween.tween(game, {defaultCamZoom: 1}, .3, {ease: FlxEase.expoOut});
           ]])
         end
         if curStep == 716 then 
            runHaxeCode([[
            FlxTween.tween(game, {defaultCamZoom: 1.2}, .3, {ease: FlxEase.expoOut});
           ]])
         end
         if curStep == 720 then 
            setProperty('isCameraOnForcedPos', true)
            doTweenX('tweenX2', 'camFollow',1325, 1, 'expoOut')
            doTweenY('tweenY2', 'camFollow',450,1, 'expoOut')
              cancelTween('tweenX')
              cancelTween('tweenY')
              runHaxeCode([[
               FlxTween.tween(game, {defaultCamZoom: .75}, 1, {ease: FlxEase.expoOut});
              ]])
            end
            if curStep == 832 then 
               setProperty('isCameraOnForcedPos', true)
         doTweenX('tweenX', 'camFollow',795, 1.4, 'sineInOut')
         doTweenY('tweenY', 'camFollow',500,1.4, 'sineInOut')
         runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: 2}, 3, {ease: FlxEase.quadInOut});
                    ]])
               end
               if curStep == 848 then 
                  cancelTween('FogLeftAA')
                  cancelTween('FogLeftA')
                  cancelTween('FogRightAA')
                  cancelTween('FogRightA')
                  setProperty('FogRight.alpha', 0)
                  setProperty('FogLeft.alpha', 0)

                  cancelTween('soultailsAA')
                  cancelTween('soultailsAA2')
                  cancelTween('soulknuxA')
                  cancelTween('soulknuxA2')
                  cancelTween('keytarAA')
                  cancelTween('keytarAA2')
                  cancelTween('saxophoneAA')
                  cancelTween('saxophoneAA2')
                  cancelTween('souleggAA')
                  cancelTween('souleggAA2')
                  cancelTween('triangleAA')
                  cancelTween('triangleAA2')

                  setProperty('soultails.alpha', 0)
                  setProperty('soulknux.alpha', 0)
                  setProperty('keytar.alpha', 0)
                  setProperty('saxophone.alpha', 0)
                  setProperty('soulegg.alpha', 0)
                  setProperty('triangle.alpha', 0)


                  for i = 0, 7 do
                     noteTweenAlpha('alphaTween'..i, i, 0, .01, 'linear') -- Tween alpha over 1 second
                 end
                 setProperty('vignette.alpha', 0)
                 setProperty('healthBarBG.visible', false)
                 setProperty('healthBar.visible', false)
                 setProperty('scoreTxt.visible', false)
                 setProperty('iconP1.visible', false)
                 setProperty('iconP2.visible', false)
                 setProperty('timeBarBG.visible', false)
      setProperty('timeBar.visible', false)
      setProperty('timeTxt.visible', false)
                  setProperty('camGame.alpha', 0)
                  setProperty('isCameraOnForcedPos', false)
         runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: .8}, .1, {ease: FlxEase.quadInOut});
                    ]])
               end
               if curStep == 864 then 
                  setProperty('tails_emerge.alpha', 1)
                  playAnim('tails_emerge', 'idle', false)
               end
               if curStep == 868 then 
                  setProperty('tails_emerge.alpha', 0)
                  setProperty('soultailsposes.alpha', 1)
                  playAnim('soultailsposes', 'idle', true)
               end
               if curStep == 880 then 
                  setProperty('knuxemerge.alpha', 1)
                  playAnim('knuxemerge', 'idle', false)
               end 
               if curStep == 884 then 
                  setProperty('knuxemerge.alpha', 0)
                  setProperty('soulknuxposes.alpha', 1)
                  playAnim('soulknuxposes', 'idle', true)
               end
               if curStep == 896 then 
                  setProperty('egg_emerge.alpha', 1)
                  playAnim('egg_emerge', 'idle', false)
               end
               if curStep == 900 then 
                  setProperty('egg_emerge.alpha', 0)
                  setProperty('souleggposes.alpha', 1)
                  playAnim('souleggposes', 'idle', true)
               end
               if curStep == 912 then --fade in later
                  runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: .8}, .1, {ease: FlxEase.quadInOut});
                    ]])
                    for i = 0, 3 do
                     setPropertyFromGroup('opponentStrums', i, 'x', -900);
                  end
               
                  setPropertyFromGroup('playerStrums', 0, 'x', 115);
                  setPropertyFromGroup('playerStrums', 1, 'x', 265);
                  setPropertyFromGroup('playerStrums', 2, 'x', 905);
                  setPropertyFromGroup('playerStrums', 3, 'x', 1055);
               end
               if curStep == 1056 then 
                  setProperty('soultailsposes.alpha', 0)
                  setProperty('soulknuxposes.alpha', 0)
                  setProperty('souleggposes.alpha', 0) 
               end
               if curStep == 1079 then 
                  doTweenAlpha('vintageA', 'vignette', 1, 1)
                  for i = 0, 7 do
                     noteTweenAlpha('alphaTween'..i, i, 1, 1, 'linear') -- Tween alpha over 1 second
                 end
               end
               if curStep == 1088 then
                  setProperty('still_and_know.alpha', 0)
setProperty('GOD.alpha', 0)
                --  setProperty('camHUD.alpha', 1)
                  setProperty('camGame.alpha', 1)
                  setProperty('healthBarBG.visible', false)
                  setProperty('healthBar.visible', false)
                  setProperty('scoreTxt.visible', false)
                  setProperty('iconP1.visible', false)
                  setProperty('iconP2.visible', false)
                  runHaxeCode([[
                     FlxTween.tween(game, {defaultCamZoom: .88}, .01, {ease: FlxEase.quadInOut});
                    ]])
               
               end
               if curStep == 1343 then 
                 -- setProperty('camGame.alpha', 0)
                  setProperty('camHUD.alpha', 0)
                  setProperty('I.alpha', 0)
                  setProperty('AM.alpha', 0)
                  setProperty('I AM GOD.alpha', 0)
                  setProperty('flashblack.alpha', 1)
                  doTweenAlpha('ItsTime', 'flashblack', 0, 2)
               end
               if curStep == 1347 then 
                  
                  setProperty('healthBarBG.visible', true)
                  setProperty('healthBar.visible', true)
                  setProperty('scoreTxt.visible', true)
                  setProperty('iconP1.visible', true)
                  setProperty('iconP2.visible', true)
                  setProperty('timeBarBG.visible', true)
       setProperty('timeBar.visible', true)
       setProperty('timeTxt.visible', true)
setProperty('camHUD.alpha', 0)
                 -- setProperty('camGame.alpha', 1)
                 -- setProperty('camHUD.alpha', 1)
                 doTweenAlpha('TheHud', 'camHUD', 1, 1, 'sineInOut')
                  for i = 0, 3 do
                     setPropertyFromGroup('opponentStrums', i, 'x', opponentStrumPositions[i])
                     setPropertyFromGroup('playerStrums', i, 'x', playerStrumPositions[i])
                 end
               end
    end






    function onBeatHit()
        if curBeat % 4 == 0 and not sustainNote then
            playAnim('soultails', 'idle', true)
            playAnim('keytar', 'idle', true)
            playAnim('soulknux', 'idle', true)
            playAnim('saxophone', 'idle', true)
        end
    end

    function onCreate()

      for i = 0, getProperty('unspawnNotes.length')-1 do
		if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'tails' then
            setPropertyFromGroup('unspawnNotes', i, "colorSwap.saturation", -10)
            setPropertyFromGroup('unspawnNotes', i, 'noteSplashSat', -10);
			setPropertyFromGroup('unspawnNotes', i, 'hitHealth', '0'); --Default value is: 0.023, health gained on hit
			setPropertyFromGroup('unspawnNotes', i, 'missHealth', '0'); --Default value is: 0.0475, health lost on miss
			setPropertyFromGroup('unspawnNotes', i, 'hitCausesMiss', false);
            setPropertyFromGroup('unspawnNotes', i, 'noAnimation', true);
      else if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'knuk' then
               setPropertyFromGroup('unspawnNotes', i, "colorSwap.saturation", -10)
               setPropertyFromGroup('unspawnNotes', i, 'noteSplashSat', -10);
            setPropertyFromGroup('unspawnNotes', i, 'hitHealth', '0'); --Default value is: 0.023, health gained on hit
            setPropertyFromGroup('unspawnNotes', i, 'missHealth', '0'); --Default value is: 0.0475, health lost on miss
            setPropertyFromGroup('unspawnNotes', i, 'hitCausesMiss', false);
               setPropertyFromGroup('unspawnNotes', i, 'noAnimation', true);
			if getPropertyFromGroup('unspawnNotes', i, 'mustPress') then --Doesn't let Dad/Opponent notes get ignored
                setPropertyFromGroup('unspawnNotes', i, 'ignoreNote', true); --Miss has no penalties
			end
      end
		end
	end
end
    function opponentNoteHit(id, dir, type, isSustainNote)
        local animations = {'singLEFT', 'singDOWN', 'singUP', 'singRIGHT'}
        if type == '' then 
        playAnim('souleggposes', animations[dir + 1], true)
        playAnim('soulknuxposes', animations[dir + 1], true)
        playAnim('soultailsposes', animations[dir + 1], true)
        runTimer('backToIdle', 1.5)
        end
        if type == 'egg' then
         if isSustainNote then
             sustainNote = true
         else
             sustainNote = false
         end
 
         playAnim('souleggposes', animations[dir + 1], true)
         
     end
        if type == 'tails' then
            if isSustainNote then
                sustainNote = true
            else
                sustainNote = false
            end
    
            playAnim('keytar', animations[dir + 1], true)
            playAnim('soultailsposes', animations[dir + 1], true)
            
        end
        if type == 'knuk' then 
         if isSustainNote then
            sustainNote = true
        else
            sustainNote = false
        end
         playAnim('saxophone', animations[dir + 1], true)
         playAnim('soulknuxposes', animations[dir + 1], true)
        end
    end

    function onUpdatePost()
      setProperty('camZooming', true)
    if folowcam then
    setProperty('camFollow.x', camX)
    setProperty('camFollow.y', camY)
    end
    if target == 'bf' then
        cameraSetTarget('boyfriend')
        elseif target == 'dad' then
        cameraSetTarget('dad')
        elseif target == 'gf' then
        cameraSetTarget('gf')
        end
  


    folowcam = false
    camX = 1300
    camY = 400
      for i = 0, getProperty('notes.length') do
        if getPropertyFromGroup('notes', i, 'noteType') == 'tails' then
              setPropertyFromGroup('notes', i, 'alpha', 0)   
        else if getPropertyFromGroup('notes', i, 'noteType') == 'knuk' then
               setPropertyFromGroup('notes', i, 'alpha', 0)   
              end
  
           --   if getPropertyFromGroup('notes',i,'isSustainNote') then
         --   setPropertyFromGroup('notes', i, 'offset.x', -30)
         --    end
        end
        end
  end

  function onTimerCompleted(tag) 
   if tag == 'backToIdle' then 
      playAnim('souleggposes', 'idle', true)

      playAnim('soulknuxposes', 'idle', true)

      playAnim('soultailsposes', 'idle', true)
   end
end

function onUpdate(elapsed)
   setProperty('camHUD.zoom', getProperty('camHUD.zoom')) -- Lock zoom
end