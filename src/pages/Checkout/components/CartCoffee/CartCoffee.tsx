/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import {
  ButtonDiv,
  ButtonsDiv,
  CartCoffeeDiv,
  ConfirmButton,
  ConfirmButtonDisabled,
  RemoveButton,
  ResumeCoffeeCard,
  SelectButtons,
  SelectDiv,
  TextContainer,
  TextDiv,
} from "./styles";
import { CoffeeContext } from "../../../../context/CoffeeContext";
import { Minus, Plus, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function CartCoffee() {
  const {
    customerCart,
    minusQuantity,
    addQuantity,
    customerAddress,
    paymentType,
    removeCoffee,
  } = useContext(CoffeeContext);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const itemsSelected = customerCart.filter((coffee) => coffee.quantity > 0);
  const navigate = useNavigate();

  function subTotal(price: number, quantity: number) {
    const sub = price * quantity;
    return sub.toFixed(2);
  }

  const itemsTotal = itemsSelected
    .map((item) => item.quantity * item.price)
    .reduce((accum, curr) => accum + curr, 0);

  useEffect(() => {
    if (customerAddress.city) {
      setDeliveryCost(3.5);
    }
  }, [customerAddress]);

  const cartTotal = itemsTotal + deliveryCost;

  return (
    <CartCoffeeDiv>
      {itemsSelected.map((coffee) => (
        <ResumeCoffeeCard key={coffee.id}>
          <img src={coffee.coffeeImage} alt={coffee.name} />
          <SelectDiv>
            <h5>{coffee.name}</h5>
            <ButtonsDiv>
              <SelectButtons>
                <Minus size={22} onClick={() => minusQuantity(coffee.id)} />
                <h6>{coffee.quantity}</h6>
                <Plus size={22} onClick={() => addQuantity(coffee.id)} />
              </SelectButtons>
              <RemoveButton onClick={() => removeCoffee(coffee.id)}>
                <Trash size={20} weight="light" />
                REMOVER
              </RemoveButton>
            </ButtonsDiv>
          </SelectDiv>
          <h4>R$ {subTotal(coffee.price, coffee.quantity)}</h4>
        </ResumeCoffeeCard>
      ))}
      <TextContainer>
        <TextDiv>
          <p>Total de itens</p>
          <h5>R$ {itemsTotal.toFixed(2)}</h5>
        </TextDiv>
        <TextDiv>
          <p>Entrega</p>
          {deliveryCost ? <h5>{deliveryCost.toFixed(2)}</h5> : <h5>-</h5>}
        </TextDiv>
        <TextDiv>
          <h4>Total</h4>
          <h4>R$ {cartTotal.toFixed(2)}</h4>
        </TextDiv>
      </TextContainer>
      <ButtonDiv>
        {customerAddress.city && paymentType && itemsTotal > 0 ? (
          <ConfirmButton onClick={() => navigate("/coffee-delivery/success")}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        ) : (
          <ConfirmButtonDisabled>CONFIRMAR PEDIDO</ConfirmButtonDisabled>
        )}
      </ButtonDiv>
    </CartCoffeeDiv>
  );
}
