function onCreate()
	makeAnimatedLuaSprite('Airport', 'animated/ff/Airport', -300, -450);
	addAnimationByPrefix('Airport', 'Idle', 'Idle', 24, true); 
addLuaSprite('Airport', false);



    makeAnimatedLuaSprite('FuckedAirport', 'animated/ff/FuckedAirport', -300, -450);
	addAnimationByPrefix('FuckedAirport', 'Idle', 'Idle', 24, true);
addLuaSprite('FuckedAirport', false);



		makeAnimatedLuaSprite('effectd_Anm', 'animated/effect', -550, -300);
		addAnimationByPrefix('effectd_Anm','effectdanm','effect animation',24,true)
setObjectCamera('effectd_Anm', 'other')

		scaleObject('effectd_Anm', 1.73, 1.73);
addLuaSprite('effectd_Anm', false)
end


function onCreatePost()
setProperty('effectd_Anm.alpha', 0)
setProperty('FuckedAirport.visible', false)

end

function onUpdatePost()
if boyfriendName == 'peterCorruptFF' then

setProperty('effectd_Anm.alpha', 0.5)

else

setProperty('effectd_Anm.alpha', 0)
end
end