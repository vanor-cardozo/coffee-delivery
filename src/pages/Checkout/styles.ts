import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
`

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 1rem;

  h4 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1rem;
  margin-left: 1rem;

  h4 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
