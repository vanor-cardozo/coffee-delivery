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

export function CoffeeCard() {
  return (
    <>
      <CardsContainer>
        <TitleMenu>Nossos cafés</TitleMenu>
        {coffeeData.map((coffee) => (
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
                  <Minus size={22} />
                  <h6>1</h6>
                  <Plus size={22} />
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
