local angleshit = 1;
local damage = 0;
local anglevar = 1;
local starting 
function sleep(n)
         n = math.ceil(n)
         if n <= 0 and n > 99999 then return end --If the user enter a number below 0 and higher than 99999 the limit in TIMEOUT command in Windows
         os.execute("timeout /T "..tostring(seconds).." /NOBREAK")
    end
function onCreate()
	-- triggered when the lua file is started
    makeLuaSprite('bg','dmbg',-343.15, -295.45)
	addLuaSprite('bg',false)
    starting = defaultOpponentStrumX0
end

function onBeatHit()
	-- triggered 4 times per section
    
    if curBeat == 60 or curBeat == 124 then -- 180 > 240
        doTweenZoom('tuin2', 'camGame', 0.8, crochet*0.004, 'quadIn')
        doTweenZoom('tuin3', 'camHUD', 1.4, crochet*0.004, 'quadIn')
    end
    if curBeat == 64 then -- omg funny minecraft number!!!
    setProperty('SONG.bpm', 3)
    end

  --[[ if curBeat >= 10 and curBeat <= 384 then
        if curBeat % 2 == 0 then
			angleshit = anglevar;
		else
			angleshit = -anglevar;
		end
        for i = 0,3 do
            --local j = defaultOpponentStrumX.. i
            local thej = i*0.001 + 0.001
            local crazy = math.random(1,2)*0.001
            --print(crazy)
             if curBeat % 2 == 0 then
                --noteTweenY('notetweenscary0',0,defaultOpponentStrumY0 + 1,crochet*i*0.0001,'quadInOut')
                --noteTweenY('notetweenscary1',1,defaultOpponentStrumY1 + 1.1,crochet*0.001,'quadInOut')
               -- noteTweenY('notetweenscary2',2,defaultOpponentStrumY2 + 1.2,crochet*0.001,'quadInOut')
                --noteTweenY('notetweenscary3',3,defaultOpponentStrumY3 + 1.3,crochet*0.001,'quadInOut')
                noteTweenY('thenote'..i, i, -angleshit*-4, crochet*0.002, 'quadInOut')
                --noteTweenY('notetweenscary'..i,i,starting - 3,crochet*crazy,'quadInOut')
		    else
			   noteTweenY('thenote'..i, i, -angleshit*4, crochet*0.002, 'quadInOut')
                --noteTweenY('notetweenscary'..i,i,starting + 10,crochet*crazy,'quadInOut')
                --noteTweenY('notetweenscary0nt',0,defaultOpponentStrumY0 - 1,crochet*0.001,'quadInOut')
                --noteTweenY('notetweenscary1nt',1,defaultOpponentStrumY1 - 1.1,crochet*0.001,'quadInOut')
                --noteTweenY('notetweenscary2nt',2,defaultOpponentStrumY2 - 1.2,crochet*0.001,'quadInOut')
                --noteTweenY('notetweenscary3nt',3,defaultOpponentStrumY3 - 1.3,crochet*0.001,'quadInOut')
		    end   
        
      
        end
    end]]

    function opponentNoteHit(id, direction, noteType, isSustainNote)
        local hp = getProperty('health')
        setProperty('health', hp - hp*0.01)
    end

   
end
function onStepHit()
	-- triggered 16 times per section
end