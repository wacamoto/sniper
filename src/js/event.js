// select your role
role = {
    "S":{
        "name": "Simo Hayha",
        "allegiance": "Finland",
    },
    "V":{
        "name": "Vasily Zaytsev",
        "allegiance": "Soviet Union",
    },
    "C":{
        "name": "Chris Kyle",
        "allegiance": "United States of America",
    },
    "a":{
        "name": "atthaus Hetzenauer",
        "allegiance": "Nazi Germany",
    },
}


// all bulidings & road
buliding = {
    "chruch":{
        "windows": 4,
        "locate": "",
    },
    "house":{
        "windows": 4,
        "locate": "",
    },
    "hospital":{
        "windows": 4,
        "locate": "",
    },
    "apartment":{
        "windows": 4,
        "locate": "",
    },
    "villa":{
        "windows": 4,
        "locate": "",
    },
}


sniper = function() {
    this.role = undefined;
    this.position = undefined;
    this.hideing = true;
    this.looking = false;
    this.aiming = false;
    this.moving = false;
    this.defence = false;
    this.killTimes = 0;
    this.moveCount = 60;
}

sniper.prototype.hide = function() {console.log('im hideing')}
sniper.prototype.look = function() {console.log('im looking')}
sniper.prototype.aim = function() {console.log('im aiming')}
sniper.prototype.fire = function() {console.log('take fire')}
sniper.prototype.move = function() {console.log('im moveing')}
sniper.prototype.defence = function() {console.log('defenced')}

sniper.prototype.map = function() {console.log('tool map')}
sniper.prototype.watch = function() {console.log('tool watch')}
sniper.prototype.knife = function() {console.log('tool knife')}
sniper.prototype.sniperGun = function() {console.log('tool sniperGun')}
sniper.prototype.smoke = function() {console.log('im smoking')}
sniper.prototype.whoami = function() {console.log('my role')}


var myslf = new sniper();
var enemy = new sniper();






var events = {};

events.connectReq = connectReq;
events.startGame = startGame;
events.message = message;
events.chat = chat;


// events.newRound = newRound;
// events.die = die;
// events.dawn = dawn;


function connectReq(data) {
    // two-way connect
    another_peer_id = data.id;
    console.log('connect to: ' + another_peer_id);
    conn = peer.connect(another_peer_id);
    conn.on('open', function(){
        // both start in to role choose
        conn.send('{"event":"startGame"}');   
        events.startGame();    
    });
}

function startGame(data) {
    $('#main').hide();
    $('#gameWindows').show();


}

function chooseRole(data) {
    enemy.role = role[data.role];
}

function initGame() {}

function newRound() {}

function update() {}









function chat(data) {
    console.log(data.detail);
}

function message(data) {
}

