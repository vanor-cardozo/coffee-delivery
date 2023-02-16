import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/coffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre -RS
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
