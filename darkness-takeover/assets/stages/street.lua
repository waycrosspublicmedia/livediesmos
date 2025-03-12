
function onCreate()

--bg1
makeLuaSprite('skybg1', 'animated/twinkle/Twinklebg1sky',-3700,-2090)
scaleObject('skybg1', 1.65, 1.65);
setLuaSpriteScrollFactor('skybg1',0.25, 0.25);

makeLuaSprite('bg1', 'animated/twinkle/Twinklebg1',-3700,-1590)
scaleObject('bg1', 1.65, 1.65);
setLuaSpriteScrollFactor('bg1',1, 1);

makeLuaSprite('buildingsbg1', 'animated/twinkle/Twinklebg1buildings',-3700,-1790)
scaleObject('buildingsbg1', 1.65, 1.65);
setLuaSpriteScrollFactor('buildingsbg1',0.95, 0.95);



addLuaSprite('skybg1',false)
addLuaSprite('buildingsbg1',false)
addLuaSprite('bg1',false)
--bg2

makeAnimatedLuaSprite('bg2', 'animated/twinkle/Twinklebg2',-3700,-1590)
addAnimationByPrefix('bg2', 'bg2Anim', 'Twinklebg2 Anim',18, true)
setProperty('bg2.alpha', 0)
scaleObject('bg2', 1.65, 1.65);

makeLuaSprite('shotgun', 'animated/twinkle/brokenshotgun',-3700,-1590)
scaleObject('shotgun', 1.65, 1.65);
setProperty('shotgun.alpha', 0)



addLuaSprite('bg2',false)
addLuaSprite('shotgun',true)
--bg3

makeAnimatedLuaSprite('bg3', 'animated/twinkle/Bg3',-3700,-1590)
addAnimationByPrefix('bg3', 'bg3Anim', 'Bg3 Anim',18, true)
setProperty('bg3.alpha', 0)
scaleObject('bg3', 1.65, 1.65);

makeAnimatedLuaSprite('buildingsbg3', 'animated/twinkle/BackBuildingskBg3',-3700,-1790)
addAnimationByPrefix('buildingsbg3', 'buildingsbg3Anim', 'BackBuildingskBg3 Anim',18, true)
scaleObject('buildingsbg3', 1.65, 1.65);
setProperty('buildingsbg3.alpha', 0)
setLuaSpriteScrollFactor('buildingsbg3',0.95, 0.95);

makeAnimatedLuaSprite('skybg3', 'animated/twinkle/SkybackBg3',-3700,-2090)
addAnimationByPrefix('skybg3', 'skybg3Anim', 'SkybackBg3 Anim',18, true)
scaleObject('skybg3', 1.65, 1.65);
setProperty('skybg3.alpha', 0)
setLuaSpriteScrollFactor('skybg3',0.25, 0.25);



addLuaSprite('skybg3',false)
addLuaSprite('buildingsbg3',false)
addLuaSprite('bg3',false)
--bg4

makeAnimatedLuaSprite('bg4', 'animated/twinkle/Twinklebg4',-3700,-1590)
addAnimationByPrefix('bg4', 'bg4Anim', 'Twinklebg4 Anim',18, true)
scaleObject('bg4', 1.65, 1.65);
setProperty('bg4.alpha', 0)

addLuaSprite('bg4',false)
--bg5

makeAnimatedLuaSprite('bg5', 'animated/twinkle/Whitebg',-3700,-1590)
addAnimationByPrefix('bg5', 'bg5Anim', 'Whitebg Anim',18, true)
scaleObject('bg5',1.65, 1.65);
setProperty('bg5.alpha', 0)

addLuaSprite('bg5',false)
--bg6

makeAnimatedLuaSprite('bg6', 'animated/twinkle/Twinklebg6',-3700,-1590)
addAnimationByPrefix('bg6', 'bg6Anim', 'Twinklebg6 Anim',18, true)
setProperty('bg6.alpha', 0)
scaleObject('bg6', 1.65, 1.65);

addLuaSprite('bg6',false)
---hud elements

makeAnimatedLuaSprite('effect_Anm', 'animated/effect', -250, -100);
addAnimationByPrefix('effect_Anm','effectanm','effect animation',18,true)
scaleObject('effect_Anm', 1.25, 1.25);
setObjectCamera('effect_Anm', 'hud')
setProperty('effect_Anm.alpha', 0)


makeAnimatedLuaSprite('FrontEffect', 'animated/twinkle/FrontThings',-2900,-500)
addAnimationByPrefix('FrontEffect', 'FrontThings5Anim', 'FrontThings Anim',18, true)
setProperty('FrontEffect.alpha', 0)
scaleObject('FrontEffect', 1, 0.65);
setObjectCamera('FrontEffect', 'hud')

	makeAnimatedLuaSprite('effect', 'animated/rooten/bgeffect', -1930, -700);
	addAnimationByPrefix('effect','bgeffectanm','bgeffect idle',24,true)
	scaleObject('effect', 2, 2);
setProperty('effect.alpha', 0.3)


	makeAnimatedLuaSprite('coolhud', 'animated/twinkle/TwinkleEffect', 0, 0)
	addAnimationByPrefix('coolhud','b9','TwinkleEffect Anim',24,true)
objectPlayAnimation ('coolhud', 'b9', true)
	scaleObject('coolhud', 1, 1)
setObjectCamera('coolhud', 'hud')
setProperty('coolhud.alpha', 0)
	addLuaSprite('coolhud',true)

	addLuaSprite('effect',true)
addLuaSprite('FrontEffect',true)
addLuaSprite('effect_Anm',false)
end