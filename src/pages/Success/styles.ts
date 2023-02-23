import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
`

export const SuccessText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`
export const IconAndTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  margin-top: 2rem;
  border: double 1px transparent;
  border-radius: 8px 40px;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(45deg, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const IconAndText = styled.div`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  gap: 1rem;
`

const BaseDivIcon = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  height: 32px;
  width: 32px;
`
export const DivIcon1 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['purple-med']};
`

export const DivIcon2 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['yellow-med']};
`

export const DivIcon3 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`
