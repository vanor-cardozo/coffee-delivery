import { SloganItem } from './components/SloganItem'
import { HomeContainer, SloganContainer } from './styles'

import cupCoffee from '../../assets/homeImage.png'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <>
      <HomeContainer>
        <SloganContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h5>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h5>
          <SloganItem />
        </SloganContainer>
        <img
          src={cupCoffee}
          alt="Café em um copo para transporte especial, grãos e pó de café "
        />
      </HomeContainer>
      <CoffeeCard />
    </>
  )
}
