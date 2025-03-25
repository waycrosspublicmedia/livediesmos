function onCreatePost()
    runHaxeCode([[
var chars = [game.dad, game.dadMap.get("rambley1")];
for(char in chars) if(char != null && char.curCharacter == "rambley1")
char.danceEveryNumBeats = 2;
]])
close(true)
end