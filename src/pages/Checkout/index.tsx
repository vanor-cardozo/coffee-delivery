import { CheckoutContainer } from './styles'

import { PaymentOptions } from './components/PaymentOptions/PaymentOptions'
import { AddressForm } from './components/AddressForm/AddressForm'

export function Checkout() {
  return (
    <CheckoutContainer>
      <h4>Complete seu pedido</h4>
      <AddressForm />
      <PaymentOptions />
    </CheckoutContainer>
  )
}
