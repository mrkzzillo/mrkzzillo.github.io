<!DOCTYPE html>
<html>
<head>
    <title>AI Chat</title>
</head>
<body>
    <h1>AI Chat</h1>

    <p id="private-browsing-message">For private browsing, please use the <a href="https://duckduckgo.com/app" target="_blank">DuckDuckGo app</a> for private searching.</p>

    <div id="chatbox">
        <div id="messages"></div>
        <div id="input-box">
            <input type="text" id="user-input" placeholder="Ask a question">
            <button id="send-button">Send</button>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const messagesContainer = document.getElementById("messages");
            const userInput = document.getElementById("user-input");
            const sendButton = document.getElementById("send-button");

            sendButton.addEventListener("click", function() {
                const question = userInput.value;
                userInput.value = "";

                const message = document.createElement("div");
                message.classList.add("message");
                message.innerHTML = "<strong>You:</strong> " + question;
                messagesContainer.appendChild(message);

                fetch("https://api.duckduckgo.com/?q=" + question + "&format=json", {
                    credentials: 'omit', // Block user cookies
                    mode: 'no-cors', // Block CORS tracking
                })
                .then(response => response.json())
                .then(data => {
                    const answer = data.AbstractText;

                    const answerMessage = document.createElement("div");
                    answerMessage.classList.add("message");
                    answerMessage.innerHTML = "<strong>AI:</strong> " + answer;
                    messagesContainer.appendChild(answerMessage);
                });
            });
        });
    </script>
</body>
</html>
