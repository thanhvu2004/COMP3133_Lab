const { response } = require("express");

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`Ping button clicked`);
    const message = "hello from client";
    clientIO.emit('ping', message);
    logEvent(`Sent: ping event emitted with message: ${message}`);
};

const sendFeedback = () =>{
    const category = document.getElementById('feedback-category').value;
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date: new Date(),
        user: clientIO.id,
        category: category,
        message: userInput,
    };

    clientIO.emit('send-feedback', feedback);

    logEvent(`Feedback sent to server: ${JSON.stringify(feedback)}`);
};

const sendChatMessage = () => {
  const message = document.getElementById("message-input").value;
  if (message.trim()) {
    clientIO.emit("chat-message", message);
    logEvent(`Sent: ${message}`);
  } else {
    logEvent("Message cannot be empty");
  }
};

clientIO.on('hello', (response) => {
    logEvent(`Ping successful.
        Server response with : ${JSON.stringify.response}`);
});

clientIO.on('chat-ack', () => {
  alert('Message delivered');
});

clientIO.on("feedback-ack", () => {
  alert("Feedback delivered");
});