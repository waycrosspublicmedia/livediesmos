local randomTimeLength = 0;
local shakeNotes = true;
local otherStrumY = 570;
local wasMidscrollOn = false;
function onCreate();
    setProperty('skipCredit', true);
    setProperty('skipCountdown', true);
    makeLuaSprite("funnyBlack", "", -800, -400);
    makeGraphic("funnyBlack", 3000, 2000, "0xFF000000");
    addLuaSprite("funnyBlack", true);
    if(middlescroll == true){
        setPropertyFromClass('ClientPrefs', 'middleScroll', false);
        wasMidscrollOn = true;
    }
    if(downscroll == true){
        otherStrumY = 50;
    }
}
function onCreatePost();
    setProperty('camHUD.alpha', 0);
    setTimeBarColors('0xFFFF0000', '0xFF000000');
}
function onSongStart();
    setProperty('cameraSpeed', '100');
    setProperty('camGame.zoom', 2);
}
function onStepHit();
    if(curStep == 1 || curStep == 8 || curStep == 16){
        setProperty('funnyBlack.alpha', 0);
        doTweenAlpha("womp", "funnyBlack", 1, 0.5, "quartIn");
    }
}
function onBeatHit();
    randomTimeLength = getRandomFloat(0, 1);
    if((curBeat >= 8 && curBeat < 40);
    || (curBeat >= 41 && curBeat < 70);
    || (curBeat >= 72 && curBeat < 102);
    || (curBeat >= 104 && curBeat < 136);
    || (curBeat >= 360 && curBeat < 422);
    || (curBeat >= 424 && curBeat < 454);
    || (curBeat >= 456 && curBeat < 486)){
        triggerEvent('Add Camera Zoom', '0.08', '0.05');
    }
    if(curBeat >= 152 && curBeat < 212){
        if(curBeat % 4 == 2){
            for i=3,7 do;
                noteSquish(i, 'x', 1);
            }
        }
        if(curBeat % 8 == 0){
            for i=3,7 do;
                noteSquish(i, 'y', 1);
            }
        }
    }
    if((curBeat >= 216 && curBeat < 344) && curBeat % 4 == 2){
        triggerEvent('Add Camera Zoom', '0.06', '0.06');
    }
    if(curBeat == 6){
        doTweenAlpha("funnyBlackLeave", "funnyBlack", 0, 0.25, "quartIn");
        setProperty('cameraSpeed', '1');
        for(i in 0...4){
            setPropertyFromGroup('opponentStrums', i, 'alpha', 0);
        }
    }
    if(curBeat == 8){
        setProperty('funnyBlack.alpha', 0);
        setProperty('camHUD.alpha', 1);
    }
    if(curBeat == 72){
        doTweenAlpha("vignetteGone", "vignette", 0, 0.8, "quartOut");
        shakeNotes = false;
    }
    if(curBeat == 104){
        for i=3,7 do;
            noteTweenY('noteReturn'+i, i, _G['defaultPlayerStrumY'+i - 3], 0.5);
        }
        backAndForth(1);
    }
    if(curBeat == 136){
        cancelTimer('backAndForth1');
        cancelTimer('backAndForth2');
        for(i in 0...4){
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }
            setPropertyFromGroup('playerStrums', i, 'y', otherStrumY);
        }
    }
    if(curBeat == 137 || curBeat == 140 || curBeat == 142 || curBeat == 145 || curBeat == 148 || curBeat == 150){
        for(i in 0...4){
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i]);
        }
    }
    if(curBeat == 138 || curBeat == 141 || curBeat == 144 || curBeat == 146 || curBeat == 149){
        for(i in 0...4){
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }
            setPropertyFromGroup('playerStrums', i, 'y', otherStrumY);
        }
    }
    if(curBeat == 139){
        for i=3,7 do;
            noteTweenAngle('angle'+i, i, 720, 0.5);
        }
    }
    if(curBeat == 147){
        for i=3,7 do;
            noteTweenAngle('angle'+i, i, 0, 0.5);
        }
    }
    if(curBeat == 152){
        setPropertyFromGroup('playerStrums', 0, 'x', defaultOpponentStrumX1);
        setPropertyFromGroup('playerStrums', 1, 'x', defaultOpponentStrumX3);
        setPropertyFromGroup('playerStrums', 2, 'x', defaultPlayerStrumX0);
        setPropertyFromGroup('playerStrums', 3, 'x', defaultPlayerStrumX2);
    }
    if(curBeat == 188){
        for i=1,2 do;
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }
            noteTweenY('dropDown1'+i, i + 4, otherStrumY, 0.8, "quartOut");
        }
    }
    if(curBeat == 190){
        for(i in 0...4){
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }
            noteTweenY('dropDown2'+i , i + 4, otherStrumY, 0.8, "quartOut");
        }
    }
    if(curBeat == 214){
        doTweenAlpha("vignetteReturn", "vignette", 1, 0.8, "quartIn");
    }
    if(curBeat == 216){
        cameraFlash('game', '0xFF000000', 1, true);
        for(i in 0...4){
            if(downscroll == false){
                setPropertyFromGroup('playerStrums', i, 'downScroll', false);
            }else{
                setPropertyFromGroup('playerStrums', i, 'downScroll', true);
            }
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i]);
            setPropertyFromGroup('playerStrums', i, 'x', defaultPlayerStrumX[i]);
        }
        setProperty('boyfriendCameraOffset[0]', boyfriendCameraOffset[0] + 100);
        setProperty('boyfriendCameraOffset[1]', boyfriendCameraOffset[1] + 100);
        setProperty('opponentCameraOffset[0]', opponentCameraOffset[0] - 150);
        shakeNotes = true;
    }
    if(curBeat == 280){
        shakeNotes = false;
        doTweenAlpha("vignetteKindaGone", "vignette", 0.5, 0.8, "quartOut");
    }
    if(curBeat == 344){
        setProperty('defaultCamZoom', 1.2);
        setProperty('camGame.zoom', 1.2);
        doTweenZoom('cameraZoomOut', 'camGame', 0.7, 5.5, "linear");
        cameraFlash('hud', '0xFF000000', 5.5, true);
        cameraFlash('game', '0xFF000000', 5.5, true);
        setProperty('vignette.alpha', 1);
        shakeNotes = true;
        setProperty('boyfriendCameraOffset[1]', boyfriendCameraOffset[1] - 100);
    }
    if(curBeat == 360){
        setProperty('boyfriendCameraOffset[0]', boyfriendCameraOffset[0] - 100);
        setProperty('opponentCameraOffset[0]', opponentCameraOffset[0] + 150);
    }
    if(curBeat == 424){
        doTweenAlpha("vignetteGone", "vignette", 0, 0.8, "quartOut");
        backAndForth(1);
        shakeNotes = false;
        for i=0,1 do;
            setPropertyFromGroup('playerStrums', i, 'angularVelocity', 3600);
        }
        for i=2,3 do;
            setPropertyFromGroup('playerStrums', i, 'angularVelocity', -3600);
        }
    }
    if(curBeat == 488){
        cancelTimer('backAndForth1');
        cancelTimer('backAndForth2');
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i]);
        }
    }
    if(curBeat == 508){
        setPropertyFromClass('FlxG.camera', 'bgColor', 0xFF000000);
    }
}
function onUpdate(elapsed);
    local currentBeat = (getSongPosition()/5000)*(curBpm/60);
    if(shakeNotes && shaking){
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'x', defaultPlayerStrumX[i] + getRandomInt(-2, 2) + Math.sin((currentBeat + i*0.25) * Math.PI));
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i] + getRandomInt(-2, 2) + Math.sin((currentBeat + i*0.25) * Math.PI));
        }
    }
    if((curBeat >= 72 && curBeat < 104) || (curBeat >= 143 && curBeat < 144)){
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i] - 50 * Math.sin((currentBeat + i*0.25) * Math.PI * 2));
        }
    }
    if((curBeat >= 104 && curBeat < 136) || (curBeat >= 424 && curBeat < 456)){
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i] + 50 * Math.cos((currentBeat*0.5) * Math.PI * 10));
        }
    }
    if(curBeat >= 280 && curBeat < 344){
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'x', defaultPlayerStrumX[i] - 40 * Math.sin((currentBeat + i*0.25) * Math.PI * 2));
        }
    }
    if(curBeat >= 456 && curBeat < 488){
        for(i in 0...4){
            setPropertyFromGroup('playerStrums', i, 'y',defaultPlayerStrumY[i] + 40 * Math.sin((currentBeat + i*0.25) * Math.PI * 2));
        }
    }
}
function onUpdatePost(elapsed);
    local currentBeat = (getSongPosition()/5000)*(curBpm/60);
    setProperty('timeTxt.text', 'TIME IS MEANINGLESS');
    setProperty('songPercent', randomTimeLength);
}
function noteSquish(note, axis, mult);
    if(axis == 'x'){
        setPropertyFromGroup('strumLineNotes', note, 'scale.x', mult);
        doTweenX('noteSquish'+axis+note, 'strumLineNotes.members['+note+'].scale', 0.7, 1, 'quadOut');
    }else{
        setPropertyFromGroup('strumLineNotes', note, 'scale.y', mult);
        doTweenY('noteSquish'+axis+note, 'strumLineNotes.members['+note+'].scale', 0.7, 1, 'quadOut');
    }
}
function backAndForth(num);
    if(num == 1){
        for(i in 0...4){
            noteTweenX('xBackAndForth1'+i, i + 4,defaultOpponentStrumX[i], 1.9, 'sineInOut');
        }
        runTimer('backAndForth1', 1.9, 1);
    }else{
        for(i in 0...4){
            noteTweenX('xBackAndForth2'+i, i + 4, defaultPlayerStrumX[i], 1.9, 'sineInOut');
        }
        runTimer('backAndForth2', 1.9, 1);
    }
}
function onTimerCompleted(whatTimer);
    if(whatTimer == 'backAndForth1'){
        backAndForth(2);
    }
    if(whatTimer == 'backAndForth2'){
        backAndForth(1);
    }
}
function onEndSong();
    if(wasMidscrollOn == true){
        setPropertyFromClass('ClientPrefs', 'middleScroll', true);
    }
}