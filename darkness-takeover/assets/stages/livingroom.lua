function onCreate()
		makeAnimatedLuaSprite('bg1_Anm', 'livingroomAnim', -700, -300);
		addAnimationByPrefix('bg1_Anm','bg1anm','livingroomAnim Anim',24,true)
		setProperty('bg1_Anm.visible', true)
		scaleObject('bg1_Anm', 0.85, 0.85);
		addLuaSprite('bg1_Anm', false)

		makeAnimatedLuaSprite('bg3_Anm', 'animated/bg3', -700, -300);
		addAnimationByPrefix('bg3_Anm','bg3anm','bg3 animation',24,true)
		setProperty('bg3_Anm.visible', false)
		scaleObject('bg3_Anm', 0.85, 0.85);
		addLuaSprite('bg3_Anm', false)

		makeAnimatedLuaSprite('bg2_Anm', 'animated/bg2', -700, -300);
		addAnimationByPrefix('bg2_Anm','bg2anm','bg2 animation',24,true)
		setProperty('bg2_Anm.visible', false)
		scaleObject('bg2_Anm', 0.85, 0.85);
		addLuaSprite('bg2_Anm', false)

		makeAnimatedLuaSprite('effectd_Anm', 'animated/effect', -550, -300);
		addAnimationByPrefix('effectd_Anm','effectdanm','effect animation',24,true)
setObjectCamera('effectd_Anm', 'other')
setProperty('effectd_Anm.alpha', 0)
		scaleObject('effectd_Anm', 1.73, 1.73);
addLuaSprite('effectd_Anm', false)
end
