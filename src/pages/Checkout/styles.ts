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
