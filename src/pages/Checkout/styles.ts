import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;

  h4 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormDiv = styled.div`
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  form {
    padding: 0 0 2rem 2rem;
  }

  input {
    border-style: solid;
    border-width: 1.5px;
    border-color: ${(props) => props.theme['base-hover']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
    &:focus {
      border-style: solid;
      outline: none !important;
      border-width: 1.5px;
      border-color: ${(props) => props.theme['yellow-med']};
    }
  }
`
const TitleAndSubtitleBase = styled.div`
  display: flex;
  color: ${(props) => props.theme['yellow-dark']};
  padding: 2rem;
  gap: 0.5rem;

  h5 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const TitleAndSubtitleLocation = styled(TitleAndSubtitleBase)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const TitleAndSubtitlePayment = styled(TitleAndSubtitleBase)`
  color: ${(props) => props.theme['purple-dark']};
`
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const PaymentDiv = styled.div`
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
`

export const ButtonsDiv = styled.div`
  display: flex;
`
