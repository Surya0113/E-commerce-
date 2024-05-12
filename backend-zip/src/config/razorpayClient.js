const Razorpay = require('razorpay');

apiKey="rzp_test_38hQMu7eEpEdna"
apiSecret="B9gxo1VSdhbpenEq9gPNH56O"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;