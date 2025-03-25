/*
@emi3_ his script very helped to working my (discord)
*/

import Main;
import flixel.util.FlxStringUtil;
import openfl.text.TextFormat;

var colors: Array < FlxColor > = [
  FlxColor.fromRGB(148, 0, 211),
  FlxColor.fromRGB(75, 0, 130),
  FlxColor.fromRGB(0, 0, 255),
  FlxColor.fromRGB(0, 255, 0),
  FlxColor.fromRGB(255, 255, 0),
  FlxColor.fromRGB(255, 127, 0),
  FlxColor.fromRGB(255, 0, 0)
];

var mem = 0;
var maxMem = 0;
var skull = 0;
var colorNum = 0;

var fpsText: String;

var oldFpsUpdateText = null;

function onCreate() {
  oldFpsUpdateText = Main.fpsVar.updateText;
  Main.fpsVar.defaultTextFormat = new TextFormat('vcr.ttf', 16, 0xffffff);
  Main.fpsVar.updateText = () -> {
    fpsText = 'FPS: '+Main.fpsVar.currentFPS+' • Memory: '+FlxStringUtil.formatBytes(mem)+'\nPort by LiterallyAsbelin';
    mem = Main.fpsVar.memoryMegas;
    if (maxMem < mem) maxMem = mem;
    Main.fpsVar.text = fpsText;
  }
}


function onDestroy() {
  Main.fpsVar.updateText = oldFpsUpdateText;
  //formatter issue :skull:
  Main.fpsVar.defaultTextFormat = new TextFormat('_sans',
    14,
    0xffffff);
}