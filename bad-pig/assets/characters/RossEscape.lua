local randomAnim = 0

function onCreate()
   randomAnim = getRandomInt(1,3)
   addCharacterToList('RossRedDead', 'boyfriend')
   addCharacterToList('RossChuckDead', 'boyfriend')
   addCharacterToList('RossBFDead', 'boyfriend')
   if randomAnim == 1 then
      setPropertyFromClass('GameOverSubstate', 'characterName', 'RossRedDead');
      setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'rossdedred');
   end
   if randomAnim == 2 then
      setPropertyFromClass('GameOverSubstate', 'characterName', 'RossChuckDead');
      setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'rossdedchuck');
   end
   if randomAnim == 3 then
      setPropertyFromClass('GameOverSubstate', 'characterName', 'RossBFDead');
      setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'rossdedbf');
   end
   --debugPrint(randomAnim)
end

function onGameOverStart()

end

local bfded = false
function onGameOver()
   if not bfded then
      doTweenZoom("Zooming", 'camGame', 1.2, 0.001, 'linear')
      bfded = true
      return Function_Stop;
   end
   return Function_Continue;
end