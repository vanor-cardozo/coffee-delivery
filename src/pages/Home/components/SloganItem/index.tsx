import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  DivIcon1,
  DivIcon2,
  DivIcon3,
  DivIcon4,
  DivIconAndText,
  DivColumn,
  SloganItemsContainer,
} from './styles'

export function SloganItem() {
  return (
    <SloganItemsContainer>
      <DivColumn>
        <DivIconAndText>
          <DivIcon1>
            <ShoppingCart weight="fill" />
          </DivIcon1>
          Compra simples e segura
        </DivIconAndText>

        <DivIconAndText>
          <DivIcon2>
            <Package weight="fill" />
          </DivIcon2>
          Embalagem mantém o café intacto
        </DivIconAndText>
      </DivColumn>

      <DivColumn>
        <DivIconAndText>
          <DivIcon3>
            <Timer weight="fill" />
          </DivIcon3>
          Entrega rápida e rastreada
        </DivIconAndText>

        <DivIconAndText>
          <DivIcon4>
            <Coffee weight="fill" />
          </DivIcon4>
          O café chega fresquinho até você
        </DivIconAndText>
      </DivColumn>
    </SloganItemsContainer>
  )
}
