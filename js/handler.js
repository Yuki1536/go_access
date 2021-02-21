function pageOnload(){
GetJavaScript();
}
var gSt='';
function GetJavaScript(){
if((window.screen.width != null)&&(window.screen.height != null)){
gSt=window.screen.width+' × '+window.screen.height+' ピクセル';
}
if(window.screen.availwidth)
{gSt+=' (タスクバーを除くサイズ '+window.screen.availwidth+'×'+window.screen.availheight+')';
}
putSt("iGetScreenSize");
if(ObjChk(screen.colorDepth)){
var wC = screen.colorDepth;
if	(wC==1){gSt='白黒 （1ビット）'}
else if	(wC==4){gSt='16色 （4ビット）'}
else if	(wC==8){gSt='256色 （8ビット）'}
else if	(wC==16){gSt='65,536色 （16ビット）'}
else if	(wC==24){gSt='1,677万色 （24ビット）'}
else if	(wC==32){gSt='1,677万色 （32ビット）'}
else		{gSt=wC+'ビットカラー'}
}
putSt("iGetScreenColor");
var now=new Date();
gSt=now.toLocaleString();
putSt("iGetPcTime");
if(ObjChk(document.referrer.length)){
if(document.referrer.length != 0){gSt=document.referrer;}
}
putSt("iGetReferrer");
if(ObjChk(navigator.appCodeName)){gSt=navigator.appCodeName;}
putSt("iGetAppCodeName");
if(ObjChk(navigator.appMinorVersion)){gSt=navigator.appMinorVersion;}
putSt("iGetAppMinorVersion");
if(ObjChk(navigator.appName)){gSt=navigator.appName;}
putSt("iGetAppName");
if(ObjChk(navigator.appVersion)){gSt=navigator.appVersion;}
putSt("iGetAppVersion");
var wL='';
var wLN='';
if(ObjChk(navigator.browserLanguage)){
wL=navigator.browserLanguage.toLowerCase();
if(wL.indexOf("ja")!=-1){wLN='「 日本語 」';}
gSt=navigator.browserLanguage+wLN;
}
putSt("iGetBrowserLanguage");
var wC='';
if(ObjChk(navigator.cookieEnabled)){
wC=navigator.cookieEnabled;
if(wC){gSt+='「 クッキーが利用可能 」';}
else{gSt+='「 クッキーが利用不可 」';}
gSt=navigator.cookieEnabled+gSt;
}
putSt("iGetCookieEnabled");
var wC='';
var wCN='';
if(ObjChk(navigator.cpuClass)){
wC=navigator.cpuClass.toLowerCase();
if(wC.indexOf("x86")!=-1){wCN='「 Intel社CPU または Intel社互換CPU 」';}
else if(wC.indexOf("68k")!=-1){wCN='「 Motorola社CPU または Motorola社互換CPU 」';}
else if(wC.indexOf("alpha")!=-1){wCN='「 DEC社CPU または DEC社互換CPU 」';}
else if(wC.indexOf("ppc")!=-1){wCN='「 IBM社CPU または IBM社互換CPU 」';}
gSt=navigator.cpuClass+wCN;
}
putSt("iGetCpuClass");
var wL='';
var wLN='';
if(ObjChk(navigator.language)){
wL=navigator.language.toLowerCase();
if(wL.indexOf("ja")!=-1){wLN='「 日本語 」';}
gSt=navigator.language+wLN;
}
putSt("iGetLanguage");
var i;
var j=0;
var wRc='';
if(ObjChk(navigator.mimeTypes.length)){
for (i=0;i<navigator.mimeTypes.length-1; i++) {
if((navigator.mimeTypes[i].type!='*')&&(navigator.mimeTypes[i].type!='...')){
j+=1;
wRc+=j+'. '+navigator.mimeTypes[i].type;
if(navigator.mimeTypes[i].suffixes!=''){wRc+='　( '+navigator.mimeTypes[i].suffixes+' )';}
wRc+='<br>';
}
}
gSt=wRc;
}
putSt("iGetMimeTypes");
//プラットフォーム
var wP='';
var wPN='';
if(ObjChk(navigator.platform)){
wP=navigator.platform.toLowerCase();
if(wP.indexOf("win")!=-1){wPN='「 Windows系 」';}
else if(wP.indexOf("mac")!=-1){wPN='「 Macintosh系 」';}
else if(wP.indexOf("sunos")!=-1){wPN='「 SunOS系 」';}
else if(wP.indexOf("linux")!=-1){wPN='「 Linux系 」';}
else if(wP.indexOf("beos")!=-1){wPN='「 BeOS系 」';}
else if(wP.indexOf("freebsd")!=-1){wPN='「 FreeBSD系 」';}
else if(wP.indexOf("hp-ux")!=-1){wPN='「 HP-Unix系 」';}
gSt=navigator.platform+wPN;
}
putSt("iGetPlatform");
var i;
var wRc='';
if(ObjChk(navigator.plugins.length)){
for (i=0;i<navigator.plugins.length-1; i++) {
wRc+=i+1+'. '+navigator.plugins[i].name+'<BR>';
wRc+='( '+navigator.plugins[i].description;
wRc+=' ['+navigator.plugins[i].filename+'] )<BR>';
}
gSt=wRc;
}
putSt("iGetPlugins");
var wL='';
var wLN='';
if(ObjChk(navigator.systemLanguage)){
wL=navigator.systemLanguage.toLowerCase();
if(wL.indexOf("ja")!=-1){wLN='「 日本語 」';}
gSt=navigator.systemLanguage+wLN;
}
putSt("iGetSystemLanguage");
if(ObjChk(navigator.userAgent)){gSt=navigator.userAgent;}
putSt("iGetUserAgent");
var wL='';
var wLN='';
if(ObjChk(navigator.userLanguage)){
wL=navigator.userLanguage.toLowerCase();
if(wL.indexOf("ja")!=-1){wLN='「 日本語 」';}
gSt=navigator.userLanguage+wLN;
}
putSt("iGetUserLanguage");
var wL='';
var wLN='';
if(ObjChk(navigator.javaEnabled())){
wL=navigator.javaEnabled();
if(wL){wLN='「 Javaアプレットが利用可能 」';}
else if(!wL){wLN='「 Javaアプレットが利用不可 」';}
gSt=navigator.javaEnabled()+wLN;
}
putSt("iGetJavaEnabled");
}
function putSt(argID){
if(gSt==''){gSt='<span style="color:#666666;">（お使いのブラウザから取得できませんでした）</span>';}
document.getElementById(argID).innerHTML  = gSt;
gSt='';
}
function ObjChk(pObj){
if(typeof pObj === "undefined"){return false;}
return true;
}