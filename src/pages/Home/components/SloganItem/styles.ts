import styled from 'styled-components'

export const SloganItemsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`

export const DivColumn = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

export const DivIconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  background: ${(props) => props.theme['yellow-dark']};
`

export const DivIcon2 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const DivIcon3 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['yellow-med']};
`
export const DivIcon4 = styled(BaseDivIcon)`
  background: ${(props) => props.theme['purple-med']};
`
