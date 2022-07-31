import React from 'react'
import Navbar from '../components/navbar'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from '../components/CheckoutForm'
const stripePromise = loadStripe(
  'pk_test_51LPrzeDJlXldxCrkoecGBPfzGTsC6JpUYg8475X5zjh8oJoJtZNgwUmUKRIuy7XSjXPm45G5MyXIhg5DS4BGOYrV00ausZdr7e'
)
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Navbar />
      <CheckoutForm />
    </Elements>
  )
}

export default Payment