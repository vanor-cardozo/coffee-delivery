import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background: '#105';

  h1 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  h5 {
    font-size: 1.25rem;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
