var welcomeStr = new String();
var hour = (new Date()).getHours();
if(hour>=5&&hour<10)
welcomeStr = "おはよう！";
else if(hour>=10&&hour<17)
welcomeStr = "こんにちは！";
else 
welcomeStr = "こんばんは！";
document.write(welcomeStr);