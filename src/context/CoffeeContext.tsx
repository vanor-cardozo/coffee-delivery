import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { coffeeData } from "../data";

interface CoffeeContextProviderProps {
  children: ReactNode;
}

interface CustomerCart {
  id: number;
  name: string;
  description: string;
  price: number;
  classification: string[];
  coffeeImage: string;
  quantity: number;
}

interface CoffeeContextType {
  customerCart: CustomerCart[];
  customerAddress: {
    customerCep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  paymentType: string;
  setCustomerCart: Dispatch<SetStateAction<CustomerCart[]>>;
  setCustomerAddress: Dispatch<
    SetStateAction<{
      customerCep: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      number: string;
      complement: string;
    }>
  >;
  setPaymentType: Dispatch<SetStateAction<string>>;
  addQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
  removeCoffee: (id: number) => void;
}

export const CoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType
);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [customerCart, setCustomerCart] = useState(coffeeData);
  const [customerAddress, setCustomerAddress] = useState({
    customerCep: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    number: "",
    complement: "",
  });
  const [paymentType, setPaymentType] = useState("");

  function addQuantity(id: number) {
    const findCoffee = customerCart.findIndex((coffee) => coffee.id === id);
    const tempCustomerCart = [...customerCart];
    tempCustomerCart[findCoffee].quantity =
      tempCustomerCart[findCoffee].quantity + 1;
    setCustomerCart(tempCustomerCart);
  }

  function minusQuantity(id: number) {
    const findCoffee = customerCart.findIndex((coffee) => coffee.id === id);
    const tempCustomerCart = [...customerCart];
    if (tempCustomerCart[findCoffee].quantity > 0) {
      tempCustomerCart[findCoffee].quantity =
        tempCustomerCart[findCoffee].quantity - 1;
      setCustomerCart(tempCustomerCart);
    }
  }

  function removeCoffee(id: number) {
    const newListCoffee = customerCart.filter((coffee) => coffee.id !== id);
    setCustomerCart(newListCoffee);
  }

  return (
    <CoffeeContext.Provider
      value={{
        customerCart,
        setCustomerCart,
        customerAddress,
        paymentType,
        setPaymentType,
        setCustomerAddress,
        addQuantity,
        minusQuantity,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
