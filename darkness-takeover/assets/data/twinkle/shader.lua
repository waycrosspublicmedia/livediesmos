
Chromashit = 0;

function onCreatePost() 
    initLuaShader("vcr")

    makeLuaSprite("temporaryShader2")
    makeGraphic("temporaryShader2", screenWidth, screenHeight)

    setSpriteShader("temporaryShader2", "vcr")

    makeLuaSprite("temporaryShader1")
    makeGraphic("temporaryShader1", screenWidth, screenHeight)

    setSpriteShader("temporaryShader1", "vcr")


end


function onStepHit ()
if curStep == 512 then
		runHaxeCode([[
			trace(ShaderFilter);
			game.camHUD.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader2").shader)]);
		]])
		addHaxeLibrary("ShaderFilter1", "openfl.filters")

		runHaxeCode([[
			trace(ShaderFilter);
			game.camGame.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader1").shader)]);
		]])
		addHaxeLibrary("ShaderFilter2", "openfl.filters")

end
if dadName == 'CorruptStewiePh3' then
if curStep %2 == 0 then
Chromashit = Chromashit - 0.01
else
Chromashit = Chromashit + 0.01
end
end
end

v = 1
function opponentNoteHit()
if dadName == 'CorruptStewiePh3' then
	Chromashit = Chromashit + getRandomFloat(0.005, 0.05)
cameraShake('camHUD', 0.02, 0.02)
cameraShake('camGame', 0.02, 0.02)

else
	Chromashit = 0

end
end


function boundTo(value, min, max)
return math.max(min, math.min(max, value))
end

function math.lerp(from,to,i)
return from+(to-from)*i
end

function setChrome(chromeOffset)

if rgb == 1 then
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * 0);

elseif rgb == 2 then
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * 0);
elseif rgb == 3 then
    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * 0);
elseif rgb == 4 then
    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * 0);
elseif rgb == 5 then
    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * 0);
elseif rgb == 6 then
    setShaderFloat("temporaryShader2", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "gOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader2", "bOffset", chromeOffset * getRandomFloat(-2, 2));
    setShaderFloat("temporaryShader1", "bOffset", chromeOffset * getRandomFloat(-2, 2));

    setShaderFloat("temporaryShader2", "rOffset", chromeOffset * 0);
    setShaderFloat("temporaryShader1", "rOffset", chromeOffset * 0);
end
end


function onUpdate(elapsed)

    Chromashit = math.lerp(Chromashit, v / 300, boundTo(elapsed * 10, 0, 50));
    setChrome(Chromashit)

rgb = math.random(1,6)
if dadName == 'CorruptStewiePh3' then
v = 1
else
v = 0
end
end