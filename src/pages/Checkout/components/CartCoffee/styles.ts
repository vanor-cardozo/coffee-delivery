import styled from 'styled-components'

export const CartCoffeeDiv = styled.div`
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px 50px;

  h5 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  h4 {
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 64px;
  }
`

export const ResumeCoffeeCard = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1px;
  border-color: ${(props) => props.theme['base-button']};
`

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1rem;
`

export const SelectButtons = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 4.5rem;
  height: 2.375rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme['purple-med']};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  h6 {
    font-size: 1rem;
    color: #333;
  }
`

export const RemoveButton = styled.button`
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
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1.25rem;
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;

  border: none;
  padding: 1rem;
  border-radius: 5px;
  display: flex;

  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-med']};
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const ConfirmButtonDisabled = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;

  border: none;
  padding: 1rem;
  border-radius: 5px;
  display: flex;

  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;

  color: ${(props) => props.theme['base-label']};
  background: ${(props) => props.theme['base-button']};
`
