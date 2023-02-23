import React, { useContext } from 'react'
import {
  ButtonDiv,
  ButtonsDiv,
  CartCoffeeDiv,
  ConfirmButton,
  RemoveButton,
  ResumeCoffeeCard,
  SelectButtons,
  SelectDiv,
  TextContainer,
  TextDiv,
} from './styles'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CartCoffee() {
  const { customerCart, minusQuantity, addQuantity } = useContext(CoffeeContext)
  const itemsSelected = customerCart.filter((coffee) => coffee.quantity > 0)

  function subTotal(price, quantity) {
    const sub = price * quantity
    return sub.toFixed(2)
  }

  const itemsTotal = itemsSelected
    .map((item) => item.quantity * item.price)
    .reduce((accum, curr) => accum + curr, 0)

  const cartTotal = itemsTotal + 3.5

  return (
    <CartCoffeeDiv>
      {itemsSelected.map((coffee) => (
        <ResumeCoffeeCard key={coffee.id}>
          <img src={coffee.coffeeImage} alt={coffee.name} />
          <SelectDiv>
            <h5>{coffee.name}</h5>
            <ButtonsDiv>
              <SelectButtons>
                <Minus size={22} onClick={() => minusQuantity(coffee.id)} />
                <h6>{coffee.quantity}</h6>
                <Plus size={22} onClick={() => addQuantity(coffee.id)} />
              </SelectButtons>
              <RemoveButton>
                <Trash size={20} weight="light" />
                REMOVER
              </RemoveButton>
            </ButtonsDiv>
          </SelectDiv>
          <h4>R$ {subTotal(coffee.price, coffee.quantity)}</h4>
        </ResumeCoffeeCard>
      ))}
      <TextContainer>
        <TextDiv>
          <p>Total de itens</p>
          <h5>R$ {itemsTotal.toFixed(2)}</h5>
        </TextDiv>
        <TextDiv>
          <p>Entrega</p>
          <h5>R$ 3.50</h5>
        </TextDiv>
        <TextDiv>
          <h4>Total</h4>
          <h4>R$ {cartTotal.toFixed(2)}</h4>
        </TextDiv>
      </TextContainer>
      <ButtonDiv>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </ButtonDiv>
    </CartCoffeeDiv>
  )
}
