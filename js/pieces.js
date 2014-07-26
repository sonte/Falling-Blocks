function cube() {
var cube = new Object();
cube.pos = new Array();
cube.color = "bluebrick";
cube.centerpointy = 6;
cube.centerpointx = 7; 
cube.type = 7;
cube.pos[0] = 0;
cube.pos[1] = 12;
cube.pos[2] = 0;
cube.pos[3] = 13;
cube.pos[4] = 1;
cube.pos[5] = 12;
cube.pos[6] = 1;
cube.pos[7] = 13;
return cube;
}
function leftL() {
var leftL = new Object();
leftL.pos = new Array();
leftL.color = "greenbrick";
leftL.centerpointy = 4;
leftL.centerpointx = 5; 
leftL.type = 2;
leftL.pos[0] = 0;
leftL.pos[1] = 13;
leftL.pos[2] = 1;
leftL.pos[3] = 13;
leftL.pos[4] = 2;
leftL.pos[5] = 13;
leftL.pos[6] = 2;
leftL.pos[7] = 12;
return leftL;
}
function leftZ() {
var leftZ = new Object();
leftZ.pos = new Array();
leftZ.color = "greenbrick";
leftZ.centerpointy = 4;
leftZ.centerpointx = 5; 
leftZ.type = 4;
leftZ.pos[0] = 0;
leftZ.pos[1] = 12;
leftZ.pos[2] = 0;
leftZ.pos[3] = 13;
leftZ.pos[4] = 1;
leftZ.pos[5] = 13;
leftZ.pos[6] = 1;
leftZ.pos[7] = 14;
return leftZ;
}
function rightL() {
var rightL = new Object();
rightL.pos = new Array();
rightL.color = "redbrick";
rightL.centerpointy = 4;
rightL.centerpointx = 5; 
rightL.type = 1;
rightL.pos[0] = 0;
rightL.pos[1] = 12;
rightL.pos[2] = 1;
rightL.pos[3] = 12;
rightL.pos[4] = 2;
rightL.pos[5] = 12;
rightL.pos[6] = 2;
rightL.pos[7] = 13;
return rightL;
}
function straight() {
var straight = new Object();
straight.pos = new Array();
straight.color = "purplebrick";
straight.centerpointy = 4;
straight.centerpointx = 5; 
straight.type = 3;
straight.pos[0] = 0;
straight.pos[1] = 13;
straight.pos[2] = 1;
straight.pos[3] = 13;
straight.pos[4] = 2;
straight.pos[5] = 13;
straight.pos[6] = 3;
straight.pos[7] = 13;
return straight;
}
function tee(){
var tee = new Object();
tee.pos = new Array();
tee.color = "yellowbrick";
tee.centerpointy = 4;
tee.centerpointx = 5;
tee.type = 6;
tee.pos[0] = 0;
tee.pos[1] = 13;
tee.pos[2] = 1;
tee.pos[3] = 12;
tee.pos[4] = 1;
tee.pos[5] = 13;
tee.pos[6] = 2;
tee.pos[7] = 13;
return tee;
}
function rightZ() {
var rightZ = new Object();
rightZ.pos = new Array();
rightZ.color = "redbrick";
rightZ.centerpointy = 4;
rightZ.centerpointx = 5; 
rightZ.type = 5;
rightZ.pos[0] = 0;
rightZ.pos[1] = 14;
rightZ.pos[2] = 0;
rightZ.pos[3] = 13;
rightZ.pos[4] = 1;
rightZ.pos[5] = 13;
rightZ.pos[6] = 1;
rightZ.pos[7] = 12;
return rightZ;
}