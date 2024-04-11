import Header from "./components/Header";
import Menu from "./components/Menu";
import useOrder from "./hooks/useOrder";

function App() {
  const { AddItem, order, DropItem, tip, setTip, SaveOrder } = useOrder();
  return (
    <>
      <Header />
      <Menu
        AddItem={AddItem}
        order={order}
        DropItem={DropItem}
        tip={tip}
        setTip={setTip}
        SaveOrder={SaveOrder}
      />
    </>
  );
}

export default App;
