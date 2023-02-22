import {
  CardsContainer,
  DivCardHeader,
  DivCardFooter,
  CardContainer,
  CartButton,
  SelectButtons,
  TagClassification,
  TagsContainer,
  TitleMenu,
} from './styles'

import { coffeeData } from '../../../../data'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function CoffeeCard() {
  const [customerCart, setCustomerCart] = useState(coffeeData)
  // const [quantity, setQuantity] = useState(0)

  const addQuantity = (id: number) => {
    const findCoffee = customerCart.findIndex((coffee) => coffee.id === id)
    const tempCustomerCart = [...customerCart]
    tempCustomerCart[findCoffee].quantity =
      tempCustomerCart[findCoffee].quantity + 1
    setCustomerCart(tempCustomerCart)
  }

  const minusQuantity = (id: number) => {
    const findCoffee = customerCart.findIndex((coffee) => coffee.id === id)
    const tempCustomerCart = [...customerCart]
    if (tempCustomerCart[findCoffee].quantity > 0) {
      tempCustomerCart[findCoffee].quantity =
        tempCustomerCart[findCoffee].quantity - 1
      setCustomerCart(tempCustomerCart)
    }
  }

  return (
    <>
      <CardsContainer>
        <TitleMenu>Nossos cafés</TitleMenu>
        {customerCart.map((coffee) => (
          <CardContainer key={coffee.id}>
            <DivCardHeader>
              <img src={coffee.coffeeImage} alt={coffee.name} />
              <TagsContainer>
                {coffee.classification.map((item) => (
                  <TagClassification key={item}>{item}</TagClassification>
                ))}
              </TagsContainer>
              <h4>{coffee.name}</h4>
              <p>{coffee.description}</p>
              <DivCardFooter>
                <h5>R$</h5>
                <h4>{coffee.price.toFixed(2)}</h4>
                <SelectButtons>
                  <Minus size={22} onClick={() => minusQuantity(coffee.id)} />
                  <h6>{coffee.quantity}</h6>
                  <Plus size={22} onClick={() => addQuantity(coffee.id)} />
                </SelectButtons>
                <CartButton>
                  <ShoppingCart size={22} weight="fill" />
                </CartButton>
              </DivCardFooter>
            </DivCardHeader>
          </CardContainer>
        ))}
      </CardsContainer>
    </>
  )
}
