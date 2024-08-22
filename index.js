document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messagesContainer = document.getElementById('messages');

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }

    sendMessageButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            appendMessage(message);
            messageInput.value = ''; // Clear input field
        }
    });

    // Optional: Send message on Enter key
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessageButton.click();
        }
    });
});
