function onEvent(n,v1,v2)
	if n == 'Weffect' then
	   makeLuaSprite('flash2', '', 0, 0);
        makeGraphic('flash2',1280,720,'ffffff')
	      addLuaSprite('flash2', true);

	setBlendMode('flash2', 'add')
	setObjectCamera ('flash2', 'other')
	      setProperty('flash2.scale.x',1)
	      setProperty('flash2.scale.y',1)
	      setProperty('flash2.alpha',0)
		setProperty('flash2.alpha',0.2)
		doTweenAlpha('flTw','flash2',0,v1,'linear')
	end
end


function opponentNoteHit(id, direction, noteType, isSustainNote)
if dadName == 'rallo' then
if getProperty('health') >= 0.2 then
setProperty('health', getProperty('health') - 0.05)

end
elseif dadName == 'Corruptgmire' then
if getProperty('health') >= 0.1 then
setProperty('health', getProperty('health') - 0.085)

end
end
if getProperty('gf.animation.curAnim.name') == 'singUP' or getProperty('gf.animation.curAnim.name') == 'singLEFT' or getProperty('gf.animation.curAnim.name') == 'singDOWN' or getProperty('gf.animation.curAnim.name') == 'singRIGHT' then
setProperty('health', getProperty('health') + 0.07)
end
end
pCount = 0

function onCreatePost()
makeLuaSprite('oringpiss', nil, 0, 0)
makeGraphic('oringpiss', screenWidth, screenHeight, 'C86B00')
setBlendMode('oringpiss', 'add')
setProperty('oringpiss.alpha', 0)
setObjectCamera('oringpiss', 'other')
addLuaSprite('oringpiss', true)
	for i = 1, 1000 do
		par = ('Particle'..i);
		makeLuaSprite(par, 'particle', 100000000, 0)

setBlendMode(par, 'add')
		addLuaSprite(par, true)
runTimer('troh', 0.0001, 0)
end
end

function onTimerCompleted(tag)
if tag == 'troh' then
if dadName == 'Corruptgmire' then
setProperty('oringpiss.alpha', 0.3)
	pCount = pCount + 1
	if pCount > 1000 then
		pCount = 1
	end
		par = ('Particle'..pCount);
	setProperty(par..'.scale.x', 0.3)
	setProperty(par..'.scale.y', 1.5)
	setProperty(par..'.x', getProperty('boyfriend.x') + getRandomFloat(-1000, 1500))
	setProperty(par..'.y',getProperty('boyfriend.y') + 1000)
setProperty(par..'.color', getColorFromHex ('FF8800'))
	setProperty(par..'.velocity.y', getRandomFloat(-1000, -1500))

	setProperty(par..'.velocity.x', 500)

	setProperty(par..'.angle', 30)
	setProperty(par..'.alpha', 1);
doTweenAlpha('-.-. --.', par, 1, 10, 'linear')
end
end
end