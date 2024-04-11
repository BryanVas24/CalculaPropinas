import { menuItems } from "../data/db";
import { OrderItem, MenuItem as typeMenuItem } from "../types/types";
import MenuItem from "./MenuItem";
import OrderContent from "./OrderContent";
import OrderTotals from "./OrderTotals";
import TipPorcentageForm from "./TipPorcentageForm";
type PropTypes = {
  AddItem: (item: typeMenuItem) => void;
  DropItem: (id: typeMenuItem["id"]) => void;
  order: OrderItem[];
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  SaveOrder: () => void;
};
const Menu = ({
  AddItem,
  order,
  DropItem,
  tip,
  setTip,
  SaveOrder,
}: PropTypes) => {
  return (
    <main className="max-w-7xl sm:mx-5 md:mx-auto  py-20 grid md:grid-cols-2 ">
      <section className="p-5">
        <h2 className="font-black text-4xl">Menú</h2>
        <section className="space-y-3 mt-10">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} AddItem={AddItem} />
          ))}
        </section>
      </section>
      <aside className="border border-dashed border-x-slate-300 p-5 rounded-lg space-y-10">
        <OrderContent DropItem={DropItem} order={order} />
        {order.length > 0 && (
          <>
            <TipPorcentageForm setTip={setTip} tip={tip} />
            <OrderTotals order={order} tip={tip} SaveOrder={SaveOrder} />
          </>
        )}
      </aside>
    </main>
  );
};

export default Menu;
