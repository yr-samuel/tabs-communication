console.log('Hello from Channel Two!');

function onSendMessage () {
    window.opener.postMessage(window.origin, '*');
}

window.addEventListener('message', event => {
    console.log(`Received message from ${event.data}`);
})