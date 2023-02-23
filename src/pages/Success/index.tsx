import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import {
  DivIcon1,
  DivIcon2,
  DivIcon3,
  IconAndText,
  IconAndTextDiv,
  SuccessContainer,
  SuccessImage,
  SuccessText,
} from './styles'

import { CoffeeContext } from '../../context/CoffeeContext'

import deliveryImage from '../../assets/deliveryImage.svg'

export function Success() {
  const { customerAddress, paymentType } = useContext(CoffeeContext)
  return (
    <SuccessContainer>
      <SuccessText>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <IconAndTextDiv>
          <IconAndText>
            <DivIcon1>
              <MapPin size={22} weight="fill" />
            </DivIcon1>
            <p>
              Entrega em{' '}
              <strong>{`${customerAddress.street}, ${customerAddress.number} ${customerAddress.number} ${customerAddress.neighborhood} - ${customerAddress.city}, ${customerAddress.state}`}</strong>
            </p>
          </IconAndText>
          <IconAndText>
            <DivIcon2>
              <Timer size={22} weight="fill" />
            </DivIcon2>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </IconAndText>
          <IconAndText>
            <DivIcon3>
              <CurrencyDollar size={22} weight="fill" />
            </DivIcon3>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentType}</strong>
            </p>
          </IconAndText>
        </IconAndTextDiv>
      </SuccessText>
      <SuccessImage>
        <img src={deliveryImage} alt="" />
      </SuccessImage>
    </SuccessContainer>
  )
}
