import Button from "../button/Button";
import { useEffect } from "react";
import CartItem from "../cartItem/CartItem";
import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";


const Cart = () => {

  const { cartOpen, dispatchIsOpen } = UseIsOpenContext();
  const { cart } = UseCartContext();
  const totalAmount = cart.reduce((acc, curr) => {
    return curr.price * curr.quantity + acc;
  },0);
  const baseStyle = "w-[35%] h-screen bg-white absolute top-0 flex flex-col py-[0.7em] shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-500 max-[700px]:w-full max-[900px]:w-[50%] max-[2000px]:w-[35%]"

  useEffect(() => {
    const root = document.querySelector("body");
    root.classList.toggle("hide");
  }, [cartOpen])


  return (
    <>
     {cartOpen && <div className="absolute inset-0 h-screen w-full bg-black/50 backdrop-blur-sm" ></div>}


      <div className={!cartOpen ? `${baseStyle} right-[-100%]` : `${baseStyle} right-0`} >

        <button onClick={() => dispatchIsOpen({type: "open-close/cart"})} className="absolute top-0 right-0 rounded-[50%] w-8 h-8 outline-none cursor-pointer bg-[#ddd] m-[20px]" >x</button>

        <div className="h-[10%]" >
            <h3 className="text-center font-bold text-[1.5em]">Shopping Cart</h3>
        </div>

        {
            !cart.length ?

          <div className="h-[80%] mt-[2em] flex flex-col items-center justify-center gap-[2em]" >
            <div className="h-3/6" >
              <img src="../../public/IMAGES/Empty-bro.svg" alt="empty cart" className="w-full h-full object-contain" />
            </div>

            <div >
              <p className="text-center text-[1.2em]">Lools like your cart is empty!</p>
            </div>

            <div className="flex justify-center" >
             <Button backgroundColor="#30D3F4" padding={5} width={100} borderRadius={10} fontSize={15} externalFunction={dispatchIsOpen} type="open-close/cart" >Explore</Button>
            </div>
          </div>

          :

          <>
            <div className="flex flex-col h-[75%] overflow-y-auto gap-4 p-4 divide-solid divide-y-2" >
              {
                cart.map(element => <CartItem key={element.id} productInfo={element} /> )
              }
            </div>

            <div  className="h-[15%] flex flex-col justify-between py-[0.4em] px-[1em]" >
              <div className="flex justify-between" >
                <p>Total</p>
                <p>${totalAmount}</p>
              </div>

              <button className="bg-[#30D3F4] rounded-[10px] outline-none p-[5px] cursor-pointer text-[18px]" >Go check out</button>
            </div>
            
          </>
        }

    </div>
    </>
  )
}

export default Cart