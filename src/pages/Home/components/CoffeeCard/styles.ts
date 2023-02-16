import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};
`

export const DivCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  width: 256px;
  text-align: center;
  gap: 1rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const DivCardFooter = styled.div`
  display: flex;
  flex-direction: row;
`

export const CartButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  &:hover {
    background: ${(props) => props.theme['purple-med']};
  }
`
