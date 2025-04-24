document.getElementById("notifyBtn").addEventListener("click", () => {
    const message = document.getElementById("messageInput").value.trim();

    if (!message) {
        alert("Please enter a message first before clicking the button");
        return;
    }

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
        return;
    }

    //ask for permission
    if (Notification.permission === "granted") {
        showNotification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(message);
            }
        });
    }
});

function showNotification(message) {
    new Notification("New Message", {
        body: message, 
        icon: "./images/hearteyes.png"
    });
}