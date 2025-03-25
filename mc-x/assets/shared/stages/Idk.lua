function onCreate()
    makeLuaSprite('8', 'Bg/8')
    addLuaSprite('8')
    scaleObject('8', 1.5, 1.5)

    makeLuaSprite('5', 'Bg/5', 200)
    addLuaSprite('5')
    scaleObject('5', 1.5, 1.5)
    setScrollFactor('5', 1.1 , 1)

    makeLuaSprite('3', 'Bg/3',150, 50)
    addLuaSprite('3')
    scaleObject('3', 1.5, 1.5)
    setScrollFactor('3', 1.2 , 1.1)
    doTweenY('3m', '3', 250, 5, 'quadInOut')

    makeLuaSprite('4', 'Bg/4', 150, 50)
    addLuaSprite('4')
    scaleObject('4', 1.5, 1.5)
    setScrollFactor('4', 1.2 , 1.1)
    doTweenY('4m', '4', 250, 5, 'quadInOut')

    makeLuaSprite('6', 'Bg/6')
    addLuaSprite('6', true)
    scaleObject('6', 1.5, 1.5)
    setScrollFactor('6', .9 , .9)

    makeAnimatedLuaSprite('Ring','Bg/Ring')addAnimationByPrefix('Ring','Dance','idle',24,true)
    objectPlayAnimation('Ring','Dance',false)
	scaleObject('Ring', 1.5, 1.5)
   setScrollFactor('Ring', .9 , .9)
   addLuaSprite('Ring', true)
   
    makeLuaSprite('2', 'Bg/2')
    addLuaSprite('2', true)
    scaleObject('2', 1.5, 1.5)

    makeLuaSprite('9', 'Bg/9')
    addLuaSprite('9', true)
    scaleObject('9', 1.5, 1.5)
end

function onTweenCompleted(tag)
    if tag == '3m' then 
        doTweenY('3m2', '3', 50, 5, 'quadInOut')
    end
    if tag == '3m2' then 
        doTweenY('3m', '3', 250, 5, 'quadInOut')
    end
    if tag =='4m' then 
        doTweenY('4m2', '4', 50, 5, 'quadInOut')
    end
    if tag == '4m2' then 
        doTweenY('4m', '4', 250, 5, 'quadInOut')
    end
end