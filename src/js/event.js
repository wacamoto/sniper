var events = {};

events.connectReq = connectReq;
events.startGame = startGame;
events.message = message;
events.chat = chat;

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


function chat(data) {
    console.log(data.detail);
}

function message(data) {
}

