songended = false
local seenDaEnd = false

function onUpdatePost()
    if songended == false then
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2 '..'Currently Playing: '..getProperty('curSong')..' By: Arm4GeDon | '..getProperty('scoreTxt.text'))
    end
end
function onDestroy()
    songended = true
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2')
end

function onGameOver()
    songended = true
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2'..' Song: '..getProperty('curSong')..' | GameOver')
    return Function_Continue
end

function onEndSong()
	if isStoryMode and not seenDaEnd then
		makeLuaSprite('bg','',0,0)
		makeGraphic('bg',1280,720,'000000')
		addLuaSprite('bg',true)
		setObjectCamera('bg','camHUD')

		setProperty('camGame.visible',false)
		setProperty('camHUD.visible',false)
		seenDaEnd = true
		startVideo('Cutscene4')
		songended = true
		setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2'..' | The End')
		return Function_Stop;
	else
		return Function_Continue;
	end
end