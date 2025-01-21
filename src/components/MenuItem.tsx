import { MenuItem as MenuItemType } from "../types/types";

type propType = {
  item: MenuItemType;
  AddItem: (item: MenuItemType) => void;
};
const MenuItem = ({ item, AddItem }: propType) => {
  const { name, price } = item;

  return (
    <button
      onClick={() => AddItem(item)}
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
    >
      <p>{name}</p>
      <p>${price}</p>
    </button>
  );
};

export default MenuItem;
