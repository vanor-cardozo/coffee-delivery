import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`
export const TitleMenu = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 700;
  line-height: 4rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 310px;
  width: 256px;
  padding: 1rem;

  border-radius: 8px 50px;

  background: ${(props) => props.theme['base-card']};
`

export const DivCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 2.5rem;

  text-align: center;
  gap: 1rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-label']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.35rem;
`

export const TagClassification = styled.div`
  display: flex;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 50px;
  padding: 0.35rem;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-dark']};
`

export const DivCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  h5 {
    font-size: 0.875rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  h4 {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 900;
    color: ${(props) => props.theme['base-text']};
  }
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
