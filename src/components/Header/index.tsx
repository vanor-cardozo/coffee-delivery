import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/coffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { CoffeeContext } from '../../context/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  const { customerCart, customerAddress } = useContext(CoffeeContext)

  const itemsInCart = customerCart.filter((coffee) => coffee.quantity > 0)
  const countItems = itemsInCart
    .map((item) => item.quantity)
    .reduce((accum, curr) => accum + curr, 0)

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <span onClick={() => navigate('/')}>
        <img src={logo} alt="" />
      </span>
      <nav>
        <LocationButton>
          <MapPin
            size={22}
            weight="fill"
            onClick={() => navigate('/checkout')}
          />
          {customerAddress.city &&
            `${customerAddress.city}, ${customerAddress.state}`}
        </LocationButton>
        <CartButton onClick={() => navigate('/checkout')}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
        <p>{countItems}</p>
      </nav>
    </HeaderContainer>
  )
}
