songended = false

function onUpdatePost()
    if songended == false then
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2 '..'Currently Playing: '..getProperty('curSong')..' By: Buttercookie | '..getProperty('scoreTxt.text'))
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