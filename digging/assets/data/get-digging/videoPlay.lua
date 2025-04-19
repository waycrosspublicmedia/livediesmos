luaDebugMode = true

function onBeatHit()
    if curBeat == 1 then
        local videoPath = callMethodFromClass('backend.Paths', 'modsVideo', {'OLDtangle'}) -- change the 'VIDEO NAME' to whatever your video name is
        createInstance('videoSprite6', 'hxvlc.flixel.FlxVideoSprite', {x, y})
        setProperty('videoSprite6.camera', instanceArg('camOther'), false, true)
        callMethod('videoSprite6.load', {videoPath})
        addInstance('videoSprite6')
        setProperty('videoSprite6.autoPause', true)
        callMethod('videoSprite6.play')
        runTimer("videoLength", 0.001) -- change this to however long your video is 
    end
    if curBeat == 342 then
        local videoPath = callMethodFromClass('backend.Paths', 'modsVideo', {'friesThrowCutscene'}) -- change the 'VIDEO NAME' to whatever your video name is
        createInstance('videoSprite', 'hxvlc.flixel.FlxVideoSprite', {x, y})
        setProperty('videoSprite.camera', instanceArg('camHUD'), false, true)
        callMethod('videoSprite.load', {videoPath})
        addInstance('videoSprite')
        setProperty('videoSprite.autoPause', true)
        callMethod('videoSprite.play')
        runTimer("videoLength", 5.6) -- change this to however long your video is 
    end
    if curBeat == 548 then
        local videoPath = callMethodFromClass('backend.Paths', 'modsVideo', {'needleStuck'}) -- change the 'VIDEO NAME' to whatever your video name is
        createInstance('videoSprite1', 'hxvlc.flixel.FlxVideoSprite', {x, y})
        setProperty('videoSprite1.camera', instanceArg('camHUD'), false, true)
        callMethod('videoSprite1.load', {videoPath})
        addInstance('videoSprite1')
        setProperty('videoSprite1.autoPause', true)
        callMethod('videoSprite1.play')
    end
end

function onTimerCompleted(tag)
    if tag == 'videoLength' then
        callMethod('videoSprite6.destroy')
        callMethod('remove', {instanceArg('videoSprite6')})
        callMethod('videoSprite.destroy')
        callMethod('remove', {instanceArg('videoSprite')})
        callMethod('videoSprite1.destroy')
        callMethod('remove', {instanceArg('videoSprite1')})
    end
end

function onPause() -- thanks to larryfrosty in the psych discord for this! https://discord.com/channels/922849922175340586/922851510143045684/1318662197169094687
    callMethod('videoSprite6.pause')
    if callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite6.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.remove', {instanceArg('videoSprite6.pause')})
    end
    if callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite6.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.remove', {instanceArg('videoSprite6.resume')})
    end
    callMethod('videoSprite.pause')
    if callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.remove', {instanceArg('videoSprite.pause')})
    end
    if callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.remove', {instanceArg('videoSprite.resume')})
    end
    callMethod('videoSprite1.pause')
    if callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite1.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.remove', {instanceArg('videoSprite1.pause')})
    end
    if callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite1.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.remove', {instanceArg('videoSprite1.resume')})
    end
end

function onResume()
    callMethod('videoSprite6.resume')
    if not callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite6.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.add', {instanceArg('videoSprite6.pause')})
    end
    if not callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite6.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.add', {instanceArg('videoSprite6.resume')})
    end
    callMethod('videoSprite.resume')
    if not callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.add', {instanceArg('videoSprite.pause')})
    end
    if not callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.add', {instanceArg('videoSprite.resume')})
    end
    callMethod('videoSprite1.resume')
    if not callMethodFromClass('flixel.FlxG', 'signals.focusLost.has', {instanceArg('videoSprite1.pause')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusLost.add', {instanceArg('videoSprite1.pause')})
    end
    if not callMethodFromClass('flixel.FlxG', 'signals.focusGained.has', {instanceArg('videoSprite1.resume')}) then
        callMethodFromClass('flixel.FlxG', 'signals.focusGained.add', {instanceArg('videoSprite1.resume')})
    end
end