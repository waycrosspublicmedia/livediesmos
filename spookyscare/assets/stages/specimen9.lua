function onCreate()
    makeAnimatedLuaSprite('hallway', 'song specific and bgs/specimen9/hallway', -300, -300)
        addAnimationByPrefix('hallway', 'g', 'hallway', 48, true)
        addAnimationByPrefix('hallway', 'hallwaybutfasterlol', 'hallway', 58, true)
    objectPlayAnimation('hallway', 'hallwaybutfasterlol', true)
    scaleObject('hallway', 1.75, 1.75)

    addLuaSprite('hallway')
end