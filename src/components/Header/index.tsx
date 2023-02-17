import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/coffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <span onClick={() => navigate('/')}>
        <img src={logo} alt="" />
      </span>
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre -RS
        </LocationButton>
        <CartButton onClick={() => navigate('/checkout')}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
