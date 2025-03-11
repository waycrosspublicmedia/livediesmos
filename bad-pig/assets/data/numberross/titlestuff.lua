songended = false

local ffi = require("ffi")  -- LuaJIT Extension
local user32 = ffi.load("user32")   -- LuaJIT User32 DLL Handler Function

ffi.cdef([[
enum{
    MB_OK = 0x00000000L,
    MB_OKCANCEL = 0x00000001L,
    MB_ABORTRETRYIGNORE = 0x00000002L,
    MB_YESNOCANCEL = 0x00000003L,
    MB_YESNO = 0x00000004L,
    MB_RETRYCANCEL = 0x00000005L,
    MB_CANCELTRYCONTINUE = 0x00000006L,
    MB_ICONINFORMATION = 0x00000040L,
};

typedef void* HANDLE;
typedef HANDLE HWND;
typedef const char* LPCSTR;
typedef unsigned UINT;

int MessageBoxA(HWND, LPCSTR, LPCSTR, UINT);
int MessageBoxW(HWND, LPCSTR, LPCSTR, UINT);
]])

function onUpdatePost()
    if songended == false then
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2 '..'Currently Playing: '..getProperty('curSong')..' By: Cyratu | '..getProperty('scoreTxt.text'))
    end
end
function onDestroy()
    songended = true
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2')
end

function onGameOver()
    songended = true
    setPropertyFromClass('lime.app.Application', 'current.window.title', 'FNF VS ROSS V2'..' Song: '..getProperty('curSong')..' | GameOver')
    user32.MessageBoxA(nil, "i didn't know what to do for the game over animation so i will just close the game, sorry.", "", ffi.C.MB_OK + ffi.C.MB_ICONINFORMATION)
    os.exit()
    return Function_Continue
end