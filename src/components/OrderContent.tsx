import { formatCurrency } from "../helper";
import { MenuItem, OrderItem } from "../types/types";

type propTypes = {
  order: OrderItem[];
  DropItem: (id: MenuItem["id"]) => void;
};
const OrderContent = ({ order, DropItem }: propTypes) => {
  return (
    <section>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y3 mt-5">
        {order.length === 0 ? (
          <p className="text-center font-semibold text-xl">Orden Vacia</p>
        ) : (
          order.map((element) => (
            <div
              key={element.id}
              className="flex justify-between  items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {element.name}- {formatCurrency(element.price)}
                </p>
                <p className="font-black">
                  Cantidad: {element.quantity} -{" "}
                  {formatCurrency(element.price * element.quantity)}
                </p>
              </div>
              <div>
                <button
                  onClick={() => DropItem(element.id)}
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black "
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default OrderContent;
