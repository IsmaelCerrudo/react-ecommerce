import { FiInstagram, FiFacebook, FiShoppingCart } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
function CartWidget() {
  return (
    <>
      <FiInstagram />
      <FiFacebook />
      <ImWhatsapp />
      <div onClick={()=>{
        
      }}>
        <FiShoppingCart/>
      </div>
    </>
  );
}

export default CartWidget;
