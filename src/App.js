import "./App.css";
import { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

   const showCartHandler = () => {
    setCartIsShown(true);
  };
   const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("closed")
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
