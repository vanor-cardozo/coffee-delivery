import {
  CardsContainer,
  DivCardHeader,
  DivCardFooter,
  CardContainer,
  CartButton,
} from './styles'

import imgCof from '../../../../assets/coffeeImages/coffee01.png'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CardsContainer>
      <CardContainer>
        <DivCardHeader>
          <img src={imgCof} />
          <p>TRADICIONAL</p>
          <p>EXPRESSO TRADICIONAL</p>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </DivCardHeader>
        <DivCardFooter>
          <p>R$ 9,90</p>
          <label>
            <input type="number" />
          </label>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </DivCardFooter>
      </CardContainer>
    </CardsContainer>
  )
}
