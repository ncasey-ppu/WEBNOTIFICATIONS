let notificationCount = 0;

document.getElementById("notifyBtn").addEventListener("click", () => {
    const title = document.getElementById("titleInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    const icon = document.getElementById("iconInput").value.trim();

    if (!title || !message || !icon) {
        alert("Please enter a title, message, and icon first before clicking the button");
        return;
    }

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
        return;
    }

    //loop to count notification with 5 second delay
    const notify = () => {
        setTimeout(() => {
            notificationCount++;
            const fullMessage = `${message}\n(Notification #${notificationCount})`;
            showNotification(title, fullMessage, icon);
        }, 5000);
    };

    //ask for permission
    if (Notification.permission === "granted") {
        notify();
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                notify();
            }
        });
    }
});

function showNotification(title, message, icon) {
    new Notification(title, {
        body: message, 
        icon: icon
    });
}