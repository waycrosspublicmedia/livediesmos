function onBeatHit();
  
}
function onUpdate(elapsed);
  
}
function transition(bg2In){
    if(bg2In){
        setProperty('bg2.alpha', 1);
    }else{
        setProperty('bg2.alpha', 0.00001);
    }
    cameraFlash('game', '0xFFFFFFFF', 5, true);
    
}