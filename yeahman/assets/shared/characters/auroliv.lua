function onUpdate(elapsed)
	if curStep >= 0 then
	  songPos = getSongPosition()
	  local currentBeat = (songPos/1000)*(bpm/120)
	  doTweenY(dadTweenY, 'dad', 270-200*math.sin((currentBeat*0.25)*math.pi),0.001)
	end
  end