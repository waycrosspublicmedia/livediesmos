function onEndSong()
if not middleScroll then
    setPropertyFromClass('backend.ClientPrefs', 'data.middleScroll', false)
end
end


function onCreate()
    
    setPropertyFromClass('backend.ClientPrefs', 'data.middleScroll', true)
setProperty('skipCountdown',true)
end