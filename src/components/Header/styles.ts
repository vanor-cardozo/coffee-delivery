import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 6rem;
  flex: 1;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

const BaseButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  color: ${(props) => props.theme['purple-med']};
  background: ${(props) => props.theme['purple-light']};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled(BaseButton)`
  color: ${(props) => props.theme['yellow-med']};
  background: ${(props) => props.theme['yellow-light']};
  &:hover {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
