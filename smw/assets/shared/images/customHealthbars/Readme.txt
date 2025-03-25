Step 1. In order to add custom healthbars to different songs you will need to make a new folder with the name of the song (lowercase), make sure all the images inside the new folder are exactly the same names as the base folders
Step 2. If your healthbar is animated, needs offsets etc, then go into the customHealthbars.lua file and add a new table to the "BarData" array

    {'songName', --song name | {'songName'} | (MUST BE EXACT)
    {0,0}, --p1 icon offsets | {x,y}
    {0,0}, --p2 icon offsets | {x,y}
    {0,0}, --health bar downscroll offsets | {x,y}
    {0,0}, --health bar upscroll offsets | {x,y}
    {0,0}, --inner bar offsets | {x,y}
    {24,24,24}, --framerate | {healthbarBG, playerSide, opponentSide} | (if the bar is flipped then player side will be opponents and vice versa)
    false --if its flipped or not | true / false
    }

    if there is already a table inside the array then add a comma to the end of it and add the new table in below it, if you dont understand, then ask in the psych engine discord servers #Help-scripts