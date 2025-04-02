function onCreate()
    addCharacterToList('bfPhoneDeath', 'bf')
    --hi
    makeAnimatedLuaSprite('line', 'song specific and bgs/mansionbg/line', 370, -170);
        addAnimationByPrefix('line', 'urghhh', 'line', 24, true)
    objectPlayAnimation('line', 'urghhh')
    scaleObject('line', 1, 2);

    makeLuaSprite('bg', 'song specific and bgs/mansionbg/bg', -20, -155);
    scaleObject('bg', 0.6, 0.55);

    addLuaSprite('bg', false);
    addLuaSprite('line', true);

    setPropertyFromClass('GameOverSubstate', 'characterName', 'bfPhoneDeath')
    setPropertyFromClass('GameOverSubstate', 'deathSoundName', 'MansionExplode')
end