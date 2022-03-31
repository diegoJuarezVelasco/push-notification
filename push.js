var push = require('web-push');

let vapIdKeys =  {
    publicKey: 'BBKAMx_AXG49_kRr4CWcD6PND2kPhq1xs7sRYizLTIr3SWvX773rmzhVNrfeKyf-mUvrRlOthentfm1Huo9FNYU',
    privateKey: 'nOsczMCLlz1PNPsKAxHVVReZ2hRAfvi1-p8B7ALlLhs'
  }

push.setVapidDetails('mailto:diegoaw591@gmail.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

let sub = {

};
push.sendNotification(sub, 'test message');