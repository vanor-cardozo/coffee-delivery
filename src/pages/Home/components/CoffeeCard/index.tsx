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

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { useContext } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function CoffeeCard() {
  const { addQuantity, minusQuantity, customerCart } = useContext(CoffeeContext)
  const navigate = useNavigate()

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
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    onClick={() => navigate('/checkout')}
                  />
                </CartButton>
              </DivCardFooter>
            </DivCardHeader>
          </CardContainer>
        ))}
      </CardsContainer>
    </>
  )
}
