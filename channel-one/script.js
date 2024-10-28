console.log('Hello from Channel One!');
/** @type {WindowProxy | null} **/
let target = null;

function onOpenTarget () {
    target = window.open('http://127.0.0.1:3001');
}

function onSendMessage () {
    target.postMessage(window.origin, '*')
}

window?.addEventListener('message', function (event) {
    console.log(`Received message from ${event.data}`);
});