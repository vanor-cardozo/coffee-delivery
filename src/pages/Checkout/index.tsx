import { CartDiv, CheckoutContainer, FormDiv } from './styles'

import { PaymentOptions } from './components/PaymentOptions/PaymentOptions'
import { AddressForm } from './components/AddressForm/AddressForm'
import { CartCoffee } from './components/CartCoffee/CartCoffee'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormDiv>
        <h4>Complete seu pedido</h4>
        <AddressForm />
        <PaymentOptions />
      </FormDiv>
      <CartDiv>
        <h4>Cafés selecionados</h4>
        <CartCoffee />
      </CartDiv>
    </CheckoutContainer>
  )
}
