import styled from 'styled-components'

export const PaymentDiv = styled.div`
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
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

export const TitleAndSubtitlePayment = styled(TitleAndSubtitleBase)`
  color: ${(props) => props.theme['purple-dark']};
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem 2rem 2rem;
`

export const PaymentButton = styled.button`
  border: 1px;
  border-style: solid;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  border-color: ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};
  &:hover {
    border-color: ${(props) => props.theme['base-hover']};
    background: ${(props) => props.theme['base-hover']};
  }
  &:focus {
    border-color: ${(props) => props.theme['purple-med']};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme['purple-med']};
  }
`
export const PaymentButtonSelected = styled.button`
  border: 1px;
  border-style: solid;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  border-color: ${(props) => props.theme['purple-med']};
  background: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme['purple-med']};
  }
`
