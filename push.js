var push = require("web-push");

let vapIdKeys = {
  publicKey:
    "BBKAMx_AXG49_kRr4CWcD6PND2kPhq1xs7sRYizLTIr3SWvX773rmzhVNrfeKyf-mUvrRlOthentfm1Huo9FNYU",
  privateKey: "nOsczMCLlz1PNPsKAxHVVReZ2hRAfvi1-p8B7ALlLhs",
};

push.setVapidDetails(
  "mailto:diegoaw591@gmail.com",
  vapIdKeys.publicKey,
  vapIdKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/e7vItTbXjNI:APA91bE7i6B0kzXOgExVgXcdiAhvY2hERg1tZLc7N4f-B50dws3NhlBO5EHQ3LGQ9aMsvXxqi2YNiRE6DpFq_O68GCsTO-kpW3VOaLC91j75szaQEgksBRZdQGpV4Aw_ABSYWiM7pQhy",
  expirationTime: null,
  keys: {
    p256dh:
      "BAkSchAQJ3PVuslTZd1ztkqYuUEdxRj-EkTbDdCU2nrNansytIGpiOnkd5Cnbm-7Siwqxkp3j3flD9UZpT52Nts",
    auth: "QrdxNFeJpJPhrwLNeVOoEw",
  },
};
push.sendNotification(sub, "test message");
