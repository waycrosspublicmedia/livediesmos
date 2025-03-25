local defaultCamGame = 0.70;

function onCreate()
   precacheImage("luces");
   precacheImage("detalle");

   makeLuaSprite('myside','sala', -900, -360);
   scaleObject("myside", 1.3, 1.3);
   setBlendMode("myside",'add');
   addLuaSprite('myside');

   makeAnimatedLuaSprite('luces',"dance",-50,-50);
   addAnimationByPrefix("luces",'idle',"luces00");
   setObjectCamera("luces",'camOther');
   scaleObject("luces", 0.70, 0.75);
   setBlendMode("luces",'ADD');
   addLuaSprite("luces");

   makeLuaSprite('detalle',nil, 0, 0);
   makeGraphic("detalle",screenWidth,screenHeight,'727272');
   setObjectCamera("detalle",'camHUD');
   setBlendMode("detalle",'SUBTRACT');
   addLuaSprite('detalle');

   setProperty("defaultCamZoom", 0.9);

end

function onCreatePost()
   cameraSetTarget("boyfriend");
   setProperty("camHUD.alpha", 0);
   setProperty("luces.alpha", 0.0001);
   setProperty("detalle.alpha", 0.0001);

end

function onSongStart()
    doTweenCamera('camGame' ,defaultCamGame, 10, 'lineal');
    
end

function onStepHit()
   if curStep == 132 then
    doTweenAlpha("hud", "camHUD", 1, 1, "lineal");
    
   elseif curStep == 384 then
    doTweenCamera('camGame' ,0.9, 9, 'cubeOut');

    elseif curStep == 512 then
    doTweenCamera('camGame' ,defaultCamGame, 0.8, 'cubeOut');

    elseif curStep == 576 then
    doTweenCamera('camGame' ,0.9, 0.75, 'cubeOut');

    elseif curStep == 640 then
    cameraFlash("camGame", "FFFFFF", 1.2 , true);
    doTweenCamera('camGame' ,defaultCamGame, 0.4, 'quadOut');

    elseif curStep == 768 then
    doTweenCamera('camGame' , (defaultCamGame-0.15), 0.9, 'cubeOut');

    elseif curStep == 1024 then
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 1144 then --ara
    doTweenCamera('camGame' ,0.9, 0.75, 'cubeOut');

    elseif curStep == 1152 then
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 1408 then
    doTweenCamera('camGame' , 0.8, 0.9, 'cubeOut');

    elseif curStep == 1472 then
    doTweenCamera('camGame' , 0.9, 0.9, 'cubeOut');

    elseif curStep == 1536 then
    doTweenCamera('camGame' , (defaultCamGame-0.15), 0.9, 'cubeOut');

    elseif curStep == 1664 then
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 1920 then
    cameraFlash("camGame", "FFFFFF", 1.2 , true);
    setProperty("luces.alpha", 1);
    setProperty("detalle.alpha", 0.45);
    doTweenCamera('camGame' , 0.9, 0.75, 'cubeOut');

    elseif curStep == 2176 then
    doTweenCamera('camGame' ,(defaultCamGame-0.15), 0.9, 'cubeOut');
    
    elseif curStep == 2432 then
    cameraFlash("camGame", "FFFFFF", 1.2 , true)
    setProperty("luces.alpha", 0);
    setProperty("detalle.alpha", 0);
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 2560 then -- bf
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 2660 then
    doTweenCamera('camGame' , 0.9, 0.9, 'cubeOut');

    elseif curStep == 2620 then 
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 2624 then 
    doTweenCamera('camGame' , 0.9, 0.9, 'cubeOut');

    elseif curStep == 2688 then 
    doTweenCamera('camGame' , defaultCamGame, 0.9, 'cubeOut');

    elseif curStep == 2720 then 
    doTweenCamera('camGame' , 0.9, 0.9, 'cubeOut');

    elseif curStep == 2816 then
    doTweenCamera('camGame' ,(defaultCamGame-0.15), 0.9, 'cubeOut');
    
    end

end

--------------------  functiones  -------------------------------


function doTweenCamera(camera,val1,val2,ease)
    cancelTween("camZoomTW");
    setProperty("camZoomingMult", 0);
    setProperty("defaultCamZoom", val1);
    doTweenZoom('camZoomTW', camera, val1, val2, ease);
end

function onTweenCompleted(tag, vars)
if tag == 'camZoomTW' then
    setProperty("camZoomingMult", 1.0);
    end
end

function onMoveCamera(isDad)
    setTimeBarColors(getIconColor(isDad), '303030');
end

function getIconColor(chr)
    local chr = chr or "dad"
    return rgbToHex(getProperty(chr .. ".healthColorArray"));
end

function rgbToHex(array)
    return string.format('%.2x%.2x%.2x', array[1], array[2], array[3]);
end