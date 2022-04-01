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
    "https://fcm.googleapis.com/fcm/send/diL5VCH8ytM:APA91bGALnlai3ohfS-MgeVuWzC91y1wuuSDPf04UhfhaSdqcWBNp5BA_Eqlps5vycFZGCg3mCDrmJvuERSWzDca79ebgRv77Bpf5qh3I4LCfTRKQ_7l7fW_FcNyD_77hXrYrrOzrfkh",
  expirationTime: null,
  keys: {
    p256dh:
      "BGFdcVRgrrH7e1YxfCmYT471CBK-2lJitZVhgiB49YY3QwNiRCJY7cN22wLwe5iKyeGo4YSnaMkELhyYl-DESrY",
    auth: "QeFS3WwlHqMttN0i-IjnpA",
  },
};
push.sendNotification(sub, "test message");
