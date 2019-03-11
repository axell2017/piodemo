from flask import Flask, render_template, request, url_for, redirect
import stripe

app = Flask(__name__)

pub_key = 'pk_test_g1XsMdkWtRutvDl6ObB21Rf0'
secret_key = 'sk_test_GP0JaWl6GuTd35bmZeuB28So'

stripe.api_key = secret_key
#add more routes for different functions
@app.route('/')
def index():
    return render_template('index.html', pub_key=pub_key)

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

@app.route('/pay', methods=['POST'])
def pay():
    #gives back information that was submitted in the html form
    print(request.form)

    customer = stripe.Customer.create(
        email=request.form['stripeEmail'],
        source=request.form['stripeToken']
    )

    charge = stripe.Charge.create(
        customer=customer.id,
        amount=999,
        currency='aud',
        description='this is the description of product'
    )
    return redirect(url_for('thanks'))

if __name__ == '__main__':
    app.debug=True
    app.run()