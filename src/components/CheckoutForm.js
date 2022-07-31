import React from 'react'
import {
  useStripe,
  useElements,
  IdealBankElement,
} from '@stripe/react-stripe-js'

import IdealBankSection from './IdealBankSection'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const idealBank = elements.getElement(IdealBankElement)

    // For brevity, this example is using uncontrolled components for
    // the accountholder's name. In a real world app you will
    // probably want to use controlled components.
    // https://reactjs.org/docs/uncontrolled-components.html
    // https://reactjs.org/docs/forms.html#controlled-components

    const accountholderName = event.target['accountholder-name']
      
    const { error } = await stripe.confirmIdealPayment(`${process.env.secret}`, {
      payment_method: {
        ideal: idealBank,
        billing_details: {
          name: accountholderName.value,
        },
      },
      return_url: 'http://localhost:3000/checkout/complete',
    })

    if (error) {
      // Show error to your customer.
      console.log(error.message)
    }

    // Otherwise the customer will be redirected away from your
    // page to complete the payment with their bank.
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <label>
          Name
          <input name='accountholder-name' placeholder='Jenny Rosen' required />
        </label>
      </div>
      <div className='form-row'>
        <IdealBankSection />
      </div>
      <button type='submit' disabled={!stripe}>
        Submit Payment
      </button>
    </form>
  )
}
