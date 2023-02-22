import React, { useState } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  ButtonsDiv,
  PaymentButton,
  PaymentButtonSelected,
  PaymentDiv,
  TextDiv,
  TitleAndSubtitlePayment,
} from './styles'

export function PaymentOptions() {
  const [paymentType, setPaymentType] = useState('')

  const handlePaymentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    e.preventDefault()
    setPaymentType(e.target.value)
  }

  return (
    <PaymentDiv>
      <TitleAndSubtitlePayment>
        <CurrencyDollar size={22} />
        <TextDiv>
          <h5>Pagamento</h5>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </TextDiv>
      </TitleAndSubtitlePayment>
      <ButtonsDiv>
        {paymentType === 'cartão de crédito' ? (
          <PaymentButtonSelected>
            <CreditCard size={16} weight="light" />
            CARTÃO DE CRÉDITO
          </PaymentButtonSelected>
        ) : (
          <PaymentButton
            value={'cartão de crédito'}
            onClick={handlePaymentType}
          >
            <CreditCard size={16} weight="light" />
            CARTÃO DE CRÉDITO
          </PaymentButton>
        )}

        {paymentType === 'cartão de débito' ? (
          <PaymentButtonSelected>
            <Bank size={16} weight="light" />
            CARTÃO DE DÉBITO
          </PaymentButtonSelected>
        ) : (
          <PaymentButton value={'cartão de débito'} onClick={handlePaymentType}>
            <Bank size={16} weight="light" />
            CARTÃO DE DÉBITO
          </PaymentButton>
        )}
        {paymentType === 'dinheiro' ? (
          <PaymentButtonSelected>
            <Money size={16} weight="light" />
            DINHEIRO
          </PaymentButtonSelected>
        ) : (
          <PaymentButton value={'dinheiro'} onClick={handlePaymentType}>
            <Money size={16} weight="light" />
            DINHEIRO
          </PaymentButton>
        )}
      </ButtonsDiv>
    </PaymentDiv>
  )
}
