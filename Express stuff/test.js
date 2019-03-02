var stripe = require("stripe")("sk_test_GP0JaWl6GuTd35bmZeuB28So");
var express = require('express'), bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();
const PORT = process.env.PORT || '5000';


app.get('/',function(req, res) {
  // for kicks, just sending checkout
  res.send('<form action="/charge" method="POST"><script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="pk_test_g1XsMdkWtRutvDl6ObB21Rf0"></script></form>')
});

app.post('/charge',urlencodedParser, function(req, res) {

  // grab a token
  var token = req.body.stripeToken;

  // creating a charge, for real use add things like error handling
  stripe.charges.create({
  amount: 2000,
  currency: "usd",
  source: token, // obtained with Stripe.js
  description: "Charge"
  }, function(err, charge) {
    res.send("You made a charge: "+ charge.id);
  });
});


app.listen(PORT)


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <WebView
      originWhitelist={['*']}
      source={{ html: '<form action="your-server-side-code" method="POST"><script src="https://checkout.stripe.com/checkout.js" class="stripe-button"'+
        'data-key="pk_test_g1XsMdkWtRutvDl6ObB21Rf0"'+
        'data-amount="999"'+
        'data-name="PIO"'+
        'data-description="Widget"'+
        'data-image="https://stripe.com/img/documentation/checkout/marketplace.png"'+
        'data-locale="auto"'+
        'data-zip-code="true">'+
      '</script>'+
    '</form>' }}
      />
      );
  }
}
