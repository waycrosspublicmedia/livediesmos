function opponentNoteHit()
       health = getProperty('health')
    if getProperty('health') > 0.025 then
       setProperty('health', health- 0.02);
end
end

function onCreate()
  setProperty('skipCountdown', true);
end