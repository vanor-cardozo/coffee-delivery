import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  cursor: pointer;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  p {
    height: 22px;
    width: 22px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    padding: 0.25rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    position: relative;
    top: -10px;
    left: -22px;
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
