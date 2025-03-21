-- script by ItsCapp don't steal, it's dumb

-- simply, offsets. they're the numbers in the top left of the character editor
idleoffsets = {'0', '0'} -- I recommend you have your idle offset at 0
leftoffsets = {'0', '0'}
downoffsets = {'0', '0'}
upoffsets = {'0', '0'}
rightoffsets = {'0', '0'}

-- change all of these to the name of the animation in your character's xml file
idle_xml_name = 'idle'
left_xml_name = 'right'
down_xml_name = 'down'
up_xml_name = 'up'
right_xml_name = 'left'

-- basically horizontal and vertical positions
x_position = 870
y_position = 100

-- scales your character (set to 1 by default)
xScale = 1.2
yScale = 1.2

-- invisible character (so basically if you wanna use the change character event, you need to make the second character invisible first)
invisible = true

-- pretty self-explanitory
name_of_character_xml = 'Metal Sonic'
name_of_character = 'Metal Sonic'
name_of_notetype = 'Metal Notes'
name_of_notetype2 = 'Metal K0 + Metal Sonic' -- you don't need this, but if you want a notetype that has multiple characters to sing you can use this.

-- if it's set to true the character appears behind the default characters, including gf, watch out for that
foreground = false
playablecharacter = true -- change to 'true' if you want to flipX

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

doIdle = true

function onCreate()


	makeAnimatedLuaSprite(name_of_character, 'characters/' .. name_of_character_xml, x_position, y_position);

	addAnimationByIndices(name_of_character, 'idle', idle_xml_name, '0,1,2,3,4', 16)
	addAnimationByIndices(name_of_character, 'idle-alt', 'altIdle', '0,1,2,3,4', 16)
	addAnimationByIndices(name_of_character, 'singLEFT', left_xml_name, '0,1,2,1,2,1,2,1,3,4', 16)
	addAnimationByIndices(name_of_character, 'singDOWN', down_xml_name, '0,1,1,1,1,1,1,2,3,4', 18)
	addAnimationByIndices(name_of_character, 'singUP', up_xml_name, '0,1,1,1,1,1,1,2,3,4', 16)
	addAnimationByIndices(name_of_character, 'singRIGHT', right_xml_name, '0,1,1,1,1,1,1,2,3,4', 16)

	addAnimationByIndices(name_of_character, 'running', left_xml_name, '0,1,2,3,4', 28)
	addAnimationByIndices(name_of_character, 'anim', 'anim', '0,1,2,3,4,4,4,4,4,4,4,4,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,11', 18)

	addAnimationByPrefix(name_of_character, 'missLEFT', 'miss', 16, false); -- MISS ANIMATIONS
	addAnimationByPrefix(name_of_character, 'missDOWN', 'miss', 16, false);
	addAnimationByPrefix(name_of_character, 'missUP', 'miss', 16, false);
	addAnimationByPrefix(name_of_character, 'missRIGHT', 'miss', 16, false);

	makeAnimatedLuaSprite('metalSteam', 'metalSteam', x_position, y_position)
	addLuaSprite('metalSteam', false)
	addAnimationByIndices('metalSteam', 'anim', 'anim', '0,1,2,3,4,5', 16)
	setProperty('metalSteam.flipX', true)
	setProperty('metalSteam.alpha', 0)


	if playablecharacter == true then
		setPropertyLuaSprite(name_of_character, 'flipX', true);
	else
		setPropertyLuaSprite(name_of_character, 'flipX', false);
	end

	scaleObject(name_of_character, xScale, yScale);


	objectPlayAnimation(name_of_character, 'idle');
	addLuaSprite(name_of_character, foreground);

	if invisible == true then
		setPropertyLuaSprite(name_of_character, 'alpha', 0)
	end
end


function onUpdate()
	if getProperty('Metal Sonic.animation.curAnim.finished') == true
		and getProperty('Metal Sonic.animation.curAnim.name') ~= 'idle'
			and getProperty('Metal Sonic.animation.curAnim.name') ~= 'idle-alt' then
		objectPlayAnimation(name_of_character, 'idle');
		doIdle = true
	end


end

local singAnims = {"singLEFT", "singDOWN", "singUP", "singRIGHT"}
function opponentNoteHit(id, direction, noteType, isSustainNote)
	if noteType == name_of_notetype or noteType == name_of_notetype2 then
		doIdle = false
		objectPlayAnimation(name_of_character, singAnims[direction + 1], true);


		if direction == 0 then
			setProperty(name_of_character .. '.offset.x', leftoffsets[1]);
			setProperty(name_of_character .. '.offset.y', leftoffsets[2]);

			if isSustainNote then
				objectPlayAnimation(name_of_character, singAnims[direction + 1], true);
			end
		elseif direction == 1 then
			setProperty(name_of_character .. '.offset.x', downoffsets[1]);
			setProperty(name_of_character .. '.offset.y', downoffsets[2]);

			if isSustainNote then
				objectPlayAnimation(name_of_character, singAnims[direction + 1], true);
			end
		elseif direction == 2 then
			setProperty(name_of_character .. '.offset.x', upoffsets[1]);
			setProperty(name_of_character .. '.offset.y', upoffsets[2]);

			if isSustainNote then
				objectPlayAnimation(name_of_character, singAnims[direction + 1], true);
			end
		elseif direction == 3 then
			setProperty(name_of_character .. '.offset.x', rightoffsets[1]);
			setProperty(name_of_character .. '.offset.y', rightoffsets[2]);

			if isSustainNote then
				objectPlayAnimation(name_of_character, singAnims[direction + 1], true);
			end
		end
	end

	if noteType == name_of_notetype then
		setHealthBarColors('000039', '2a3bc5') --Sonic Colors (lol)
		runHaxeCode([[
			game.icon]] .. string.upper('P1') .. [[.changeIcon(']] .. 'sonic' .. [[')
		]]);

		runHaxeCode([[
			game.icon]] .. string.upper('P2') .. [[.changeIcon(']] .. 'metal' .. [[')
		]]);
	else
		setHealthBarColors('1A1A71', 'D92B2D') --KO Colors
		runHaxeCode([[
			game.icon]] .. string.upper('P1') .. [[.changeIcon(']] .. 'ko_mm' .. [[')
		]]);

		runHaxeCode([[
			game.icon]] .. string.upper('P2') .. [[.changeIcon(']] .. 'k0' .. [[')
		]]);
	end

end

-- I know this is messy, but it's the only way I know to make it work on both sides.
local singAnims = {"singLEFT", "singDOWN", "singUP", "singRIGHT"}
function goodNoteHit(id, direction, noteType, isSustainNote)
	if noteType == name_of_notetype or noteType == name_of_notetype2 then
		doIdle = false
		objectPlayAnimation(name_of_character, singAnims[direction + 1], true);

		if direction == 0 then
			setProperty(name_of_character .. '.offset.x', leftoffsets[1]);
			setProperty(name_of_character .. '.offset.y', leftoffsets[2]);
		elseif direction == 1 then
			setProperty(name_of_character .. '.offset.x', downoffsets[1]);
			setProperty(name_of_character .. '.offset.y', downoffsets[2]);
		elseif direction == 2 then
			setProperty(name_of_character .. '.offset.x', upoffsets[1]);
			setProperty(name_of_character .. '.offset.y', upoffsets[2]);
		elseif direction == 3 then
			setProperty(name_of_character .. '.offset.x', rightoffsets[1]);
			setProperty(name_of_character .. '.offset.y', rightoffsets[2]);
		end
	end
end

function onTimerCompleted(tag)

end

function onBeatHit()
	-- triggered 4 times per section
	if curBeat % 2 == 0 and doIdle then
		if curBeat >= 239 then
			objectPlayAnimation(name_of_character, 'idle');
		else
			objectPlayAnimation(name_of_character, 'idle-alt');
		end
		setProperty(name_of_character .. '.offset.x', idleoffsets[1]);
		setProperty(name_of_character .. '.offset.y', idleoffsets[2]);
		doIdle = true
	end



	
end

function onStepHit()
	if curStep == 939 then
		objectPlayAnimation(name_of_character, 'anim');
		doIdle = false
	end

	if curStep == 936 then
		setProperty('metalSteam.alpha', 1)
	objectPlayAnimation('metalSteam', 'anim');
	doTweenAlpha('metalSteam', 'metalSteam', 0, 0.4, 'linear')
	end
	
end

function onCountdownTick(counter)
	-- counter = 0 -> "Three"
	-- counter = 1 -> "Two"
	-- counter = 2 -> "One"
	-- counter = 3 -> "Go!"
	-- counter = 4 -> Nothing happens lol, tho it is triggered at the same time as onSongStart i think
	if counter % 2 == 0 then
		if doIdle == true then
			objectPlayAnimation(name_of_character, 'idle');
			setProperty(name_of_character .. '.offset.x', idleoffsets[1]);
			setProperty(name_of_character .. '.offset.y', idleoffsets[2]);
		end
	end
end