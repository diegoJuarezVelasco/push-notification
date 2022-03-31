self.addEventListener("push", function (event) {
  const options = {
    body: "Yay it works.",
    icon: "images/icon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "explore service",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };

  event.waitUntil(self.registration.showNotification('Hello world', options));
});
