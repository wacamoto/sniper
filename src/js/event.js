//all buliding & road

buliding = {
    "chruch":{
        "widows": 4,
        "locate": "",
    },
    "house":{
        "widows": 4,
        "locate": "",
    },
    "hospital":{
        "widows": 4,
        "locate": "",
    },
    "apartment":{
        "widows": 4,
        "locate": "",
    },
    "villa":{
        "widows": 4,
        "locate": "",
    },
}


sniper = function() {
    this.role;
    this.position;
    this.hideing;
    this.looking;
    this.aiming;
    this.moving;
    this.defence;
    this.killTimes;
    this.energy;
    this.moveCount;
}

sniper.prototype.hide = function() {}
sniper.prototype.look = function() {}
sniper.prototype.aim = function() {}
sniper.prototype.fire = function() {}
sniper.prototype.move = function() {}
sniper.prototype.defence = function() {}

sniper.prototype.map = function() {}
sniper.prototype.watch = function() {}
sniper.prototype.knife = function() {}
sniper.prototype.sniperGun = function() {}
sniper.prototype.smoke = function() {}

sniper.prototype.update = function() {}



var events = {};

events.connectReq = connectReq;
events.startGame = startGame;
events.message = message;
events.chat = chat;


// events.newRound = newRound;

// events.die = die;
// events.dawn = dawn;




function connectReq(data) {
    another_peer_id = data.id;
    conn = peer.connect(another_peer_id);
    conn.on('open', function(){
        conn.send('{"event":"startGame"}');   
        events.startGame();    
    });
}

function startGame(data) {
    $('#main').hide();
    $('#gameWindows').show();
}

function newReound() {
}

function chat(data) {
    console.log(data.detail);
}

function message(data) {
}

