import { useMemo } from "react";
import { formatCurrency } from "../helper";
import { OrderItem } from "../types/types";

type PropType = {
  order: OrderItem[];
  tip: number;
  SaveOrder: () => void;
};
const OrderTotals = ({ order, tip, SaveOrder }: PropType) => {
  //calcula el subtotal
  const Subtotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  //calcula las propinas
  const tipAmount = useMemo(() => Subtotal * tip, [tip, order]);
  const total = useMemo(() => tipAmount + Subtotal, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(Subtotal)}</span>
        </p>

        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-10"
        disabled={total === 0}
        onClick={() => SaveOrder()}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
