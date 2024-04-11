import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  //añadiendo elemento
  function AddItem(item: MenuItem) {
    const ItemExist = order.find((orderItem) => orderItem.id === item.id);
    if (ItemExist) {
      const updatedOrder = order.map((OrderItem) =>
        OrderItem.id === item.id
          ? { ...OrderItem, quantity: OrderItem.quantity + 1 }
          : OrderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }
  //eliminando elemento
  function DropItem(id: MenuItem["id"]) {
    setOrder(order.filter((item) => item.id !== id));
  }

  const SaveOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return { AddItem, order, DropItem, tip, setTip, SaveOrder };
};

export default useOrder;
