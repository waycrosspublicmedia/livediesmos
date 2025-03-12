function onCreate()

addCharacterToList('CorruptStewiePh3', 'dad')
addCharacterToList('CorruptStewiePh2', 'dad')
addCharacterToList('CorruptStewiePh1', 'dad')
addCharacterToList('StewieTwinkleUncorrAlt', 'dad')
addCharacterToList('StewieTwinkleUncorr', 'dad')


addCharacterToList('Quagmire2Twinkle', 'boyfriend')
addCharacterToList('QuagmireTwinkle', 'boyfriend')
addCharacterToList('QuagmireTwinkle3', 'boyfriend')
addCharacterToList('QuagmireTwinkle4', 'boyfriend')

addCharacterToList('GQG', 'boyfriend')

makeAnimatedLuaSprite('bfAt3', 'characters/Quag_5', getProperty('boyfriend.x') - 170, getProperty('boyfriend.y') + 150)

addAnimationByIndices('bfAt3', 'help', 'Quag 5 Helping', '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24')--this is dumb

setProperty('bfAt3.alpha', 0)
setProperty('bfAt3.scale.x', 1.2)
setProperty('bfAt3.scale.y', 1.2)
addLuaSprite('bfAt3', true)
end

function onCreatePost()

originalYforBF = getProperty('boyfriend.y')
originalXfordad = getProperty('dad.x')
norzoo = 0.65
setProperty('iconP1.alpha', 0)
setProperty('iconP2.alpha', 0)
setProperty('healthBar.alpha', 0)
setProperty('healthBarBG.alpha', 0)
setProperty('scoreTxt.alpha', 0)

makeAnimatedLuaSprite('dadat', 'characters/StewieTwinkleUncorr', getProperty('dad.x'), getProperty('dad.y'))
addAnimationByPrefix('dadat', 'Brah', 'StewieTwinkleUncorr Breakaway', 13, false)
addAnimationByPrefix('dadat', 'tp', 'StewieTwinkleUncorr TP', 13, false)
setProperty('dadat.alpha', 0)
setProperty('dadat.scale.x', 1.2)
setProperty('dadat.scale.y', 1.2)
addLuaSprite('dadat', true)

makeAnimatedLuaSprite('bfAt', 'characters/QuagmireTwinkle3', getProperty('boyfriend.x'), getProperty('boyfriend.y'))
addAnimationByPrefix('bfAt', 'stab', 'QuagmireTwinkle3 stab', 17, false)
addAnimationByPrefix('bfAt', 'unstab', 'QuagmireTwinkle3 unstab', 4, false)
setProperty('bfAt.alpha', 0)
setProperty('bfAt.scale.x', 1.2)
setProperty('bfAt.scale.y', 1.2)
addLuaSprite('bfAt', true)

makeAnimatedLuaSprite('bfAt2', 'characters/QuagmireTwinkle4', getProperty('boyfriend.x'), getProperty('boyfriend.y'))
addAnimationByPrefix('bfAt2', 'giggity', 'QuagmireTwinkle4 giggity', 15, true)
setProperty('bfAt2.alpha', 0)
setProperty('bfAt2.scale.x', 1.2)
setProperty('bfAt2.scale.y', 1.2)
addLuaSprite('bfAt2', true)

setProperty('boyfriend.color', getColorFromHex('2B2B2B'))


	   makeLuaSprite('did2', '', 0, 0);
        makeGraphic('did2',1280,720,'ffffff')
setProperty('did2.alpha', 0)
setLuaSpriteScrollFactor('did2',0, 0);
	      addLuaSprite('did2', false);
	setBlendMode('did2', 'SUBTRACT')

	   makeLuaSprite('did', '', 0, 0);
        makeGraphic('did',1280,720,'ffffff')
	      addLuaSprite('did', false);
	setBlendMode('did', 'SUBTRACT')
	setObjectCamera('did', 'HUD')



end


function onSongStart()
doTweenAlpha('al', 'did', 0.3, 15, 'linear')
setProperty('timeTxt.visible', false)
setProperty('timeBar.visible', false)
setProperty('timeBarBG.visible', false)



for i = 0,7 do
setPropertyFromGroup('strumLineNotes', i, 'alpha', 0.2)
end
end

zoo = 0.65
zoom_c = false
camseen = false
flashingband = false
function onUpdate()
setProperty('bfAt.offset.x', 1050)
setProperty('bfAt.offset.y', 370)

setProperty('bfAt2.offset.x', 60)
setProperty('bfAt2.offset.y', -1)

setProperty('bfAt3.offset.x', 1041)

setProperty('dadat.x', getProperty('dad.x'))
setProperty('dadat.y', getProperty('dad.y'))
if getProperty('dadat.animation.curAnim.name') == 'Brah' then
setProperty('dadat.offset.x', 150)
setProperty('dadat.offset.y', 10)
elseif getProperty('dadat.animation.curAnim.name') == 'tp' then
setProperty('dadat.offset.x', 22)
setProperty('dadat.offset.y', -30)
end

if zoom_c then
setProperty('defaultCamZoom', zoo)
end

if camseen == 1 then
setProperty('camFollow.x', 500)
setProperty('camFollow.y', 300)
elseif camseen == 2 then
setProperty('camFollow.x', 1400)
setProperty('camFollow.y', 500)
elseif camseen == 3 then
setProperty('camFollow.x', 500)
setProperty('camFollow.y', 500)
end

if dadName == 'CorruptStewiePh3' then
setProperty('effect.alpha', 0.7)
elseif dadName == 'CorruptStewiePh1' then
setProperty('effect.alpha', 1)
else
setProperty('effect.alpha', 0)
end
end

betslow = false
randomzoom = false
allow_it_man = false

function onStepHit()
if curStep == 200 then
setProperty('timeTxt.visible', true)
setProperty('timeBar.visible', true)
setProperty('timeBarBG.visible', true)
setProperty('timeTxt.alpha', 0)
setProperty('timeBar.alpha', 0)
setProperty('timeBarBG.alpha', 0)

elseif curStep == 240 then
doTweenZoom('why', 'camGame', 0.8, 1.5, 'quadInOut')
elseif curStep == 256 then
doTweenZoom('why', 'camGame', 5, 0.1, 'linear')
doTweenAlpha('al', 'did', 0, 0.1, 'linear')

doTweenAlpha('tial', 'iconP1', 1, 2, 'linear')
doTweenAlpha('tial2', 'iconP2', 1, 1.9, 'linear')
doTweenAlpha('tial3', 'healthBar', 1, 1.8, 'linear')
doTweenAlpha('tial4', 'healthBarBG', 1, 1.7, 'linear')
doTweenAlpha('tial5', 'scoreTxt', 1, 1.6, 'linear')
doTweenAlpha('tial6', 'timeTxt', 1, 1.5, 'linear')
doTweenAlpha('tial7', 'timeBarBG', 1, 1.5, 'linear')
doTweenAlpha('tial8', 'timeBar', 1, 1.5, 'linear')
setProperty('boyfriend.color', getColorFromHex ('ffffff'))
setProperty('cameraSpeed', 1.5)
if not middlescroll then

noteTweenAlpha('tial9', 4, 1, 1.4, 'linear')
noteTweenAlpha('tial10', 5, 1, 1.4, 'linear')
noteTweenAlpha('tial11', 6, 1, 1.4, 'linear')
noteTweenAlpha('tial12', 7, 1, 1.4, 'linear')

noteTweenAlpha('tial13', 0, 1, 1.4, 'linear')
noteTweenAlpha('tial14', 1, 1, 1.4, 'linear')
noteTweenAlpha('tial15', 2, 1, 1.4, 'linear')
noteTweenAlpha('tial16', 3, 1, 1.4, 'linear')
else

noteTweenAlpha('tial9', 4, 1, 1.4, 'linear')
noteTweenAlpha('tial10', 5, 1, 1.4, 'linear')
noteTweenAlpha('tial11', 6, 1, 1.4, 'linear')
noteTweenAlpha('tial12', 7, 1, 1.4, 'linear')

noteTweenAlpha('tial13', 0, 0.5, 1.4, 'linear')
noteTweenAlpha('tial14', 1, 0.5, 1.4, 'linear')
noteTweenAlpha('tial15', 2, 0.5, 1.4, 'linear')
noteTweenAlpha('tial16', 3, 0.5, 1.4, 'linear')
end
elseif curStep == 268 then
doTweenZoom('why', 'camGame', zoo + 0.2, 0.2, 'linear')

zoom_c = true
elseif curStep == 276 then
doTweenZoom('why', 'camGame', zoo - 0.2, 0.2, 'linear')
elseif curStep == 288 then
doTweenZoom('why', 'camGame', zoo - 0.1, 0.2, 'linear')
elseif curStep == 300 then
doTweenZoom('why', 'camGame', zoo + 0.1, 0.2, 'linear')
elseif curStep == 308 then
doTweenZoom('why', 'camGame', zoo + 0.1, 0.2, 'linear')
elseif curStep == 320 then
doTweenZoom('why', 'camGame', zoo - 0.2, 0.5, 'linear')
elseif curStep == 328 then
doTweenZoom('why', 'camGame', zoo + 0.2, 0.2, 'linear')
elseif curStep == 352 then
doTweenZoom('why', 'camGame', zoo - 0.2, 0.5, 'linear')
elseif curStep == 364 then
doTweenZoom('why', 'camGame', zoo + 0.6, 0.5, 'linear')
zoom_c = false
elseif curStep == 384 then
doTweenZoom('why', 'camGame', 5, 0.1, 'linear')
setProperty('defaultCamZoom', norzoo)
betslow = true
cameraFlash('camOther', 'ffffff', 1, true)

	   makeLuaSprite('did', '', 0, 0);
        makeGraphic('did',1280,720,'ffffff')
	      addLuaSprite('did', false);
	setBlendMode('did', 'SUBTRACT')
	setObjectCamera('did', 'other')
    setProperty('did.alpha', 0)
elseif curStep == 496 then
doTweenZoom('why', 'camGame', 1, 2, 'linear')
betslow = false

elseif curStep == 512 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh3')
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('defaultCamZoom', 0.45)
setProperty('bg2.alpha', 1)
removeLuaSprite('bg1', true)
elseif curStep == 544 then
doTweenZoom('why', 'camGame', 0.2, 0.8, 'linear')
setProperty('defaultCamZoom', 0.2)
doTweenAlpha('8al', 'camGame', 0, 0.6, 'linear')
doTweenAlpha('88al', 'camHUD', 0, 0.6, 'linear')
elseif curStep == 560 then
doTweenZoom('why', 'camGame', 5, 0.1, 'linear')
doTweenAlpha('8al', 'camGame', 1, 0.01, 'linear')
doTweenAlpha('88al', 'camHUD', 1, 0.01, 'linear')
setProperty('defaultCamZoom', norzoo)

elseif curStep == 568 then
setProperty('defaultCamZoom', 0.75)
elseif curStep == 570 then
setProperty('defaultCamZoom', 0.85)
elseif curStep == 572 then
setProperty('defaultCamZoom', 0.95)
elseif curStep == 574 then
setProperty('defaultCamZoom', 1.05)
elseif curStep == 576 then
setProperty('defaultCamZoom', norzoo)
triggerEvent('Change Character', 'boyfriend', 'Quagmire2Twinkle')
elseif curStep == 640 then
setProperty('defaultCamZoom', 0.45)
camseen = 1
elseif curStep == 704 then
setProperty('defaultCamZoom', norzoo)
camseen = false
elseif curStep == 736 then
setProperty('defaultCamZoom', 0.5)
elseif curStep == 752 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 758 then
setProperty('defaultCamZoom', 0.65)
elseif curStep == 762 then
triggerEvent('Change Character', 'boyfriend', 'QuagmireTwinkle3')
setProperty('bfAt.alpha', 1)
objectPlayAnimation('bfAt', 'stab', true)
setProperty('boyfriend.alpha', 0)
elseif curStep == 768 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh2')
setProperty('bfAt.alpha', 0)
setProperty('boyfriend.alpha', 1)
doTweenAlpha('al', 'did', 0, 0.5, 'linear')

setProperty('shotgun.alpha', 1)
setProperty('buildingsbg3.alpha', 1)
setProperty('bg3.alpha', 1)
setProperty('skybg3.alpha', 1)
setProperty('skybg1.alpha', 0)
removeLuaSprite('bg2', true)
removeLuaSprite('buildingsbg1', true)
setProperty('did.alpha', 1)
setProperty('effect_Anm.alpha', 1)
elseif curStep == 784 then
doTweenZoom('why', 'camGame', 0.45, 0.3, 'linear')
zoo = 0.45
zoom_c = true
elseif curStep == 800 then
doTweenZoom('why', 'camGame', 0.55, 0.3, 'linear')
zoo = 0.55
elseif curStep == 816 then
doTweenZoom('why', 'camGame', 0.35, 0.3, 'linear')
zoo = 0.35
elseif curStep == 832 then
doTweenZoom('why', 'camGame', 0.45, 0.3, 'linear')
zoo = 0.45
elseif curStep == 848 then
doTweenZoom('why', 'camGame', 0.35, 0.3, 'linear')
zoo = 0.35
elseif curStep == 852 then
doTweenZoom('why', 'camGame', 0.45, 0.3, 'linear')
zoo = 0.45
elseif curStep == 863 then
doTweenZoom('why', 'camGame', 0.65, 0.3, 'linear')
zoo = 0.65
elseif curStep == 884 then
doTweenZoom('why', 'camGame', 0.55, 0.2, 'linear')
zoo = 0.55
elseif curStep == 886 then
doTweenZoom('why', 'camGame', 0.45, 0.2, 'linear')
zoo = 0.45
elseif curStep == 888 then
doTweenZoom('why', 'camGame', 0.65, 0.2, 'linear')
zoo = 0.65
elseif curStep == 895 then
doTweenZoom('why', 'camGame', 0.45, 0.5, 'linear')
zoo = 0.45
elseif curStep == 928 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh3')
cameraFlash('camOther', 'ffffff', 1, true)
elseif curStep == 960 then
doTweenZoom('why', 'camGame', 0.55, 0.5, 'linear')
zoo = 0.55
elseif curStep == 992 then
zoom_c = false
setProperty('defaultCamZoom', 0.45)
camseen = 1
elseif curStep == 1020 then
doTweenZoom('why', 'camGame', 0.65, 0.2, 'linear')
setProperty('defaultCamZoom', 0.65)
camseen = false
elseif curStep == 1024 then
setProperty('bfAt.alpha', 1)
objectPlayAnimation('bfAt', 'unstab', true)
setProperty('boyfriend.alpha', 0)
setProperty('defaultCamZoom', 0.65)
camseen = 2
setProperty('did2.alpha', 1)
doTweenAlpha('al', 'did', 0.2, 1, 'linear')
doTweenAlpha('alf', 'effect_Anm', 0.2, 1, 'linear')
setProperty('did.alpha', 1)
setProperty('dad.alpha', 0)
setProperty('iconP1.alpha', 0)
setProperty('iconP2.alpha', 0)
setProperty('healthBar.alpha', 0)
setProperty('healthBarBG.alpha', 0)
setProperty('scoreTxt.alpha', 0)
setProperty('timeTxt.alpha', 0)
setProperty('timeBar.alpha', 0)
setProperty('timeBarBG.alpha', 0)
setProperty('skybg3.alpha', 0)
setProperty('shotgun.alpha', 0)
setProperty('buildingsbg3.alpha', 0)
setProperty('bg3.alpha', 0)

for i = 0,7 do
setPropertyFromGroup('strumLineNotes', i, 'alpha', 0.2)
end

elseif curStep == 1072 then


if not middlescroll then

noteTweenAlpha('tial9', 4, 1, 1.4, 'linear')
noteTweenAlpha('tial10', 5, 1, 1.4, 'linear')
noteTweenAlpha('tial11', 6, 1, 1.4, 'linear')
noteTweenAlpha('tial12', 7, 1, 1.4, 'linear')

noteTweenAlpha('tial13', 0, 1, 1.4, 'linear')
noteTweenAlpha('tial14', 1, 1, 1.4, 'linear')
noteTweenAlpha('tial15', 2, 1, 1.4, 'linear')
noteTweenAlpha('tial16', 3, 1, 1.4, 'linear')
else

noteTweenAlpha('tial9', 4, 1, 1.4, 'linear')
noteTweenAlpha('tial10', 5, 1, 1.4, 'linear')
noteTweenAlpha('tial11', 6, 1, 1.4, 'linear')
noteTweenAlpha('tial12', 7, 1, 1.4, 'linear')

noteTweenAlpha('tial13', 0, 0.5, 1.4, 'linear')
noteTweenAlpha('tial14', 1, 0.5, 1.4, 'linear')
noteTweenAlpha('tial15', 2, 0.5, 1.4, 'linear')
noteTweenAlpha('tial16', 3, 0.5, 1.4, 'linear')
end

elseif curStep == 1144 then
doTweenZoom('why', 'camGame', 1, 0.8, 'linear')
doTweenAlpha('8al', 'camGame', 0, 0.8, 'linear')
doTweenAlpha('88al', 'camHUD', 0, 0.8, 'linear')
triggerEvent('Change Character', 'dad', 'CorruptStewiePh2')
elseif curStep == 1152 then

triggerEvent('Change Character', 'boyfriend', 'QuagmireTwinkle4')
removeLuaSprite('did2', true)
setProperty('dad.alpha', 1)

setProperty('effect.alpha', 0.4)
setProperty('effect_Anm.alpha', 0.4)

doTweenAlpha('al', 'did', 0.2, 1, 'linear')
removeLuaSprite('bfAt', true)
setProperty('did.alpha', 0)
setProperty('boyfriend.alpha', 1)

doTweenAlpha('8al', 'camGame', 1, 0.01, 'linear')
doTweenAlpha('88al', 'camHUD', 1, 0.01, 'linear')
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('defaultCamZoom', 0.45)
doTweenZoom('why', 'camGame', 5, 0.01, 'linear')
setProperty('skybg3.alpha', 1)
setProperty('shotgun.alpha', 1)
setProperty('buildingsbg3.alpha', 1)
setProperty('bg3.alpha', 1)
camseen = 1
doTweenAlpha('tial', 'iconP1', 1, 2, 'linear')
doTweenAlpha('tial2', 'iconP2', 1, 1.9, 'linear')
doTweenAlpha('tial3', 'healthBar', 1, 1.8, 'linear')
doTweenAlpha('tial4', 'healthBarBG', 1, 1.7, 'linear')
doTweenAlpha('tial5', 'scoreTxt', 1, 1.6, 'linear')
doTweenAlpha('tial6', 'timeTxt', 1, 1.5, 'linear')
doTweenAlpha('tial7', 'timeBarBG', 1, 1.5, 'linear')
doTweenAlpha('tial8', 'timeBar', 1, 1.5, 'linear')
elseif curStep == 1168 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 1184 then
setProperty('defaultCamZoom', 0.65)
elseif curStep == 1200 then
setProperty('defaultCamZoom', 0.75)
elseif curStep == 1208 then
setProperty('defaultCamZoom', 0.6)
elseif curStep == 1212 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1216 then
setProperty('defaultCamZoom', norzoo)
camseen = false
elseif curStep == 1232 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 1248 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1264 then
setProperty('defaultCamZoom', 0.35)
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('did.alpha', 0)
triggerEvent('Change Character', 'dad', 'CorruptStewiePh3')
elseif curStep == 1280 then
betslow = true
setProperty('defaultCamZoom', 0.65)
elseif curStep == 1343 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh2')
cameraFlash('camOther', 'ffffff', 1, true)
elseif curStep == 1392 then
setProperty('defaultCamZoom', 1)
doTweenZoom('dk', 'camGame', 1, 2, 'linear')
setProperty('bfAt2.alpha', 1)
objectPlayAnimation('bfAt2', 'giggity', true)
setProperty('boyfriend.alpha', 0)
camseen = 2
betslow = false

elseif curStep == 1408 then
triggerEvent('Change Character', 'boyfriend', 'GQG')

cameraFlash('camOther', 'ffffff', 1, true)
setProperty('boyfriend.alpha', 1)
doTweenZoom('dk', 'camGame', 0.55, 0.01, 'linear')
removeLuaSprite('bfAt2', true)
removeLuaSprite('skybg3', true)
removeLuaSprite('bg3', true)
camseen = false
setProperty('defaultCamZoom', 0.55)
setProperty('skybg1.alpha', 1)
setProperty('bg4.alpha', 1)
elseif curStep == 1472 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh3')
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
doTweenZoom('why', 'camGame', 5, 0.01, 'linear')
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1536 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 1552 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1568 then
setProperty('defaultCamZoom', 0.65)
elseif curStep == 1584 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 1600 then
cameraFlash('camOther', 'ffffff', 1, true)
triggerEvent('Change Character', 'dad', 'CorruptStewiePh2')
elseif curStep == 1616 then
setProperty('defaultCamZoom', 0.65)
elseif curStep == 1632 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1648 then
setProperty('defaultCamZoom', 0.55)
elseif curStep == 1696 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1711 then
setProperty('defaultCamZoom', 0.65)
elseif curStep == 1728 then
triggerEvent('Change Character', 'dad', 'CorruptStewiePh3')
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
doTweenZoom('why', 'camGame', 5, 0.01, 'linear')
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1759 then
setProperty('defaultCamZoom', 0.4)
elseif curStep == 1775 then
setProperty('defaultCamZoom', 0.45)
elseif curStep == 1791 then
betslow = true
elseif curStep == 1894 then
betslow = false
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
doTweenZoom('why', 'camGame', norzoo, 0.01, 'linear')
setProperty('defaultCamZoom', norzoo)
elseif curStep == 1900 then
doTweenZoom('why', 'camGame', 1, 0.01, 'linear')
setProperty('defaultCamZoom', 1)
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
elseif curStep == 1906 then
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
doTweenZoom('why', 'camGame', norzoo, 0.01, 'linear')
setProperty('defaultCamZoom', norzoo)
elseif curStep == 1912 or curStep == 1914 or curStep == 1916 or curStep == 1918 then
setProperty('camGame.alpha', 0)
setProperty('camHUD.alpha', 0)
elseif curStep == 1913 or curStep == 1915 or curStep == 1917 or curStep == 1919 then
setProperty('camGame.alpha', 1)
setProperty('camHUD.alpha', 1)
elseif curStep == 1920 then

setProperty('boyfriend.y', getProperty('boyfriend.y') + 90)
setProperty('dad.x', getProperty('dad.x') + 190)
triggerEvent('Change Character', 'dad', 'CorruptStewiePh1')
setProperty('boyfriend.color', getColorFromHex ('000000'))
cameraFlash('camOther', 'ffffff', 1, true)
removeLuaSprite('bg4', true)
setProperty('cameraSpeed', 0.5)
setProperty('bg5.alpha', 1)
camseen = 1
setProperty('defaultCamZoom', 0.3)
setProperty('effect_Anm.visible', false)
setProperty('effect.visible', false)
setProperty('FrontEffect.alpha', 0.6)
setProperty('iconP1.alpha', 0)
setProperty('iconP2.alpha', 0)
setProperty('healthBar.alpha', 0)
setProperty('healthBarBG.alpha', 0)
setProperty('scoreTxt.alpha', 0)
setProperty('timeTxt.alpha', 0)
setProperty('timeBar.alpha', 0)
setProperty('timeBarBG.alpha', 0)


elseif curStep == 2176 then
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('FrontEffect.color', getColorFromHex('000000'))
triggerEvent('Change Character', 'dad', 'StewieTwinkleUncorrAlt')
setProperty('bfAt3.alpha', 1)
setProperty('coolhud.alpha', 0.8)
objectPlayAnimation('bfAt3', 'help', true)
setProperty('boyfriend.alpha', 0)
runTimer('chan7g', 2.35)
betslow2 = true

elseif curStep == 2432 then
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('bg5.alpha', 0)
setProperty('cameraSpeed', 1)
setProperty('iconP1.alpha', 1)
setProperty('iconP2.alpha', 1)
setProperty('healthBar.alpha', 1)
setProperty('healthBarBG.alpha', 1)
setProperty('scoreTxt.alpha', 1)
setProperty('timeTxt.alpha', 1)
setProperty('timeBar.alpha', 1)
setProperty('timeBarBG.alpha', 1)
setProperty('bg6.alpha', 1)
camseen = 0
setProperty('boyfriend.y', originalYforBF)
setProperty('dad.x', originalXfordad)
triggerEvent('Change Character', 'dad', 'StewieTwinkleUncorr')
setProperty('boyfriend.color', getColorFromHex ('ffffff'))
removeLuaSprite('FrontEffect', true)
removeLuaSprite('effect', true)
removeLuaSprite('coolhud', true)
removeLuaSprite('effect_Anm', true)
betslow2 = false
randomzoom = true

elseif curStep == 2569 or curStep == 2585 or curStep == 2601 or curStep == 2585 or curStep == 2633 or curStep == 2649 or curStep == 2665 then
flashingband = true
elseif curStep == 2579 or curStep == 2593 or curStep == 2609 or curStep == 2641 or curStep == 2657 or curStep == 2673 then
flashingband = false

elseif curStep == 2688 then
randomzoom = false
setProperty('boyfriend.x', getProperty('boyfriend.x') + 700)

setProperty('boyfriend.y', getProperty('boyfriend.y') + 110)
cameraFlash('camOther', 'ffffff', 1, true)
setProperty('boyfriend.color', getColorFromHex('000000'))
setProperty('dad.color', getColorFromHex('000000'))
setProperty('bg5.alpha', 1)
removeLuaSprite('bg6', true)
removeLuaSprite('shotgun', true)
removeLuaSprite('effect_Anm', true)
camseen = 3
setProperty('defaultCamZoom', 0.3)
setProperty('iconP1.alpha', 0)
setProperty('iconP2.alpha', 0)
setProperty('healthBar.alpha', 0)
setProperty('healthBarBG.alpha', 0)
setProperty('scoreTxt.alpha', 0)
setProperty('timeTxt.alpha', 0)
setProperty('timeBar.alpha', 0)
setProperty('timeBarBG.alpha', 0)
setProperty('dad.alpha', 0)
objectPlayAnimation('dadat', 'Brah', true)
setProperty('dadat.alpha', 1)

elseif curStep == 2720 then
doTweenX('sad', 'boyfriend', getProperty('boyfriend.x') - 300, 0.5, 'linear')
setProperty('defaultCamZoom', 0.4)

elseif curStep == 2752 then
doTweenX('sad', 'boyfriend', getProperty('boyfriend.x') - 300, 0.5, 'linear')
setProperty('defaultCamZoom', 0.5)
doTweenAlpha('i81', 'camGame', 0, 2, 'quadInOut')

elseif curStep == 2784 then
doTweenAlpha('i81', 'camGame', 1, 2, 'quadInOut')

elseif curStep == 2800 then
setProperty('defaultCamZoom', 0.52)
elseif curStep == 2804 then
setProperty('defaultCamZoom', 0.54)
elseif curStep == 2808 then
setProperty('defaultCamZoom', 0.56)
elseif curStep == 2812 then
setProperty('defaultCamZoom', 0.58)
elseif curStep == 2816 then
doTweenX('sad', 'boyfriend', getProperty('boyfriend.x') - 300, 0.5, 'linear')
setProperty('defaultCamZoom', 0.5)
doTweenAlpha('i81', 'camGame', 0, 3, 'quadInOut')
doTweenAlpha('i810', 'camHUD', 0, 3, 'quadInOut')
doTweenAlpha('i8810', 'camOther', 0, 3, 'quadInOut')
objectPlayAnimation('dadat', 'tp', true)
end

if curStep %1 == 0 and randomzoom then
zoomen = math.random(1, 5)
end
end


function goodNoteHit(id, direction, noteType, isSustainNote)
if randomzoom and not isSustainNote then
if zoomen == 1 then
setProperty('defaultCamZoom', 0.35)
doTweenZoom('why', 'camGame', 0.35, 0.1, 'linear')
elseif zoomen == 2 then
setProperty('defaultCamZoom', 0.45)
doTweenZoom('why', 'camGame', 0.45, 0.1, 'linear')
elseif zoomen == 3 then
setProperty('defaultCamZoom', 0.55)
doTweenZoom('why', 'camGame', 0.55, 0.1, 'linear')
elseif zoomen == 4 then
setProperty('defaultCamZoom', 0.65)
doTweenZoom('why', 'camGame', 0.65, 0.1, 'linear')
elseif zoomen == 5 then
setProperty('defaultCamZoom', 0.75)
doTweenZoom('why', 'camGame', 0.75, 0.1, 'linear')
end
end

if not isSustainNote and flashingband then
setProperty('camGame.alpha', 0)
runTimer('fl', 0.1)
end
end



function opponentNoteHit(id, direction, noteType, isSustainNote)
if randomzoom and not isSustainNote then
if zoomen == 1 then
setProperty('defaultCamZoom', 0.35)
doTweenZoom('why', 'camGame', 0.35, 0.1, 'linear')
elseif zoomen == 2 then
setProperty('defaultCamZoom', 0.45)
doTweenZoom('why', 'camGame', 0.45, 0.1, 'linear')
elseif zoomen == 3 then
setProperty('defaultCamZoom', 0.55)
doTweenZoom('why', 'camGame', 0.55, 0.1, 'linear')
elseif zoomen == 4 then
setProperty('defaultCamZoom', 0.65)
doTweenZoom('why', 'camGame', 0.65, 0.1, 'linear')
elseif zoomen == 5 then
setProperty('defaultCamZoom', 0.75)
doTweenZoom('why', 'camGame', 0.75, 0.1, 'linear')
end
end

if not isSustainNote and flashingband then
setProperty('camGame.alpha', 0)
runTimer('fl', 0.1)
end
end


function onTimerCompleted(tag)
if tag == 'chan7g' then
setProperty('boyfriend.alpha', 1)
removeLuaSprite('bfAt3', true)


elseif tag == 'fl' then
setProperty('camGame.alpha', 1)
end
end


function onUpdatePost()


if boyfriendName == 'QuagmireTwinkle3' or boyfriendName == 'QuagmireTwinkle4' then
		for i = 0, getProperty('playerStrums.length')-1 do
			setPropertyFromGroup('playerStrums', i, 'texture', 'CorruptedNotes');
		end

else
		for i = 0, getProperty('playerStrums.length')-1 do
			setPropertyFromGroup('playerStrums', i, 'texture', 'NOTE_assets');
		end

end
end

function onBeatHit()
if betslow then
if curBeat %2 == 0 then
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
if hitbet then
doTweenZoom('why', 'camGame', 1, 0.01, 'linear')
setProperty('defaultCamZoom', 1)
hitbet = false

elseif not hitbet then
doTweenZoom('why', 'camGame', norzoo, 0.01, 'linear')
setProperty('defaultCamZoom', norzoo)
hitbet = true
end
end
end

if betslow2 then
if curBeat %2 == 0 then
doTweenAlpha('al', 'did', 0, 0.3, 'linear')
setProperty('did.alpha', 0.5)
if hitbet then
doTweenZoom('why', 'camGame', 0.5, 0.2, 'linear')
setProperty('defaultCamZoom', 0.5)
hitbet = false

elseif not hitbet then
doTweenZoom('why', 'camGame', 0.3, 0.2, 'linear')
setProperty('defaultCamZoom', 0.3)
hitbet = true
end
end
end
end