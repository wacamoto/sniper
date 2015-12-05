var your_peer_id;
var another_peer_id;
var peer;
var conn;


function init() {
    //generate your ID number
    your_peer_id = Math.floor(Math.random()*1000000).toString();
    console.log('your ID number: ' + your_peer_id);
    
    //show your ID number
    $('#yourID').text('share this number to your frined ' + your_peer_id);
    
    //input another ID number keypress "enter" to request connect 
    $('#anotherID').keypress(function(e) {
        code = e.keyCode ? e.keyCode : e.which;
        if(code == 13) {
            another_peer_id = $(this).val();
            $(this).val('');
            connect();
        }
    });

    //peerAPI key ->> ravoxvbzqf2sm7vi
    peer = new Peer(your_peer_id, {key:'ravoxvbzqf2sm7vi'});
    
    peer.on('connection', function(conn) {
        conn.on('data', function(data) {
            //data is JSON
            handleEvents(data);
        });
    });
}

function connect() {
    //connect another id
    console.log('connect to: ' + another_peer_id);
    conn = peer.connect(another_peer_id);
    
    //setting events
    conn.on('open', function(){
        conn.send('{"event":"connectReq","id":' + your_peer_id + '}');
    });

}

function handleEvents(data) {
    var json = JSON.parse(data);
    console.log(json);
    var eventName = json.event;
    events[eventName](json);
}

function sendEvents(data) {
    conn.send(JSON.stringify(data));
}

init()