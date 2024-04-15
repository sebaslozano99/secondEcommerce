import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const HeaderUser = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout  } = UseAuthContext();
  const navigate = useNavigate();

  // console.log(firebaseUser, isAuthenticated) 


  async function handleLogout(){
    try{
      await logout();
      console.log("Logged out");
      navigate("/");
    }
    catch(error){
      console.log(error)
    }
  }

  function onLogOut(){
    if(isAuthenticated){
        handleLogout();
    }
  }

  return (
    <div className="w-[3.5em] h-[3.5em] flex justify-center items-center relative cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
        <img src={!isAuthenticated ? "../../../public/IMAGES/defaul.png" : "../../../public/IMAGES/defaul.png"} alt="../../../public/IMAGES/default.png" className={isAuthenticated ? "border-green-500 w-[70%] h-[70%] object-cover rounded-full border-[1px]" : "w-[70%] h-[70%] object-cover rounded-full border-[1px] border-black/20"} />

        <div className={isOpen ? "absolute top-full w-[7em] mt-[4px] h-[10vh] flex flex-col bg-[#ddd] hover:bg-[#eee]" : "hidden hover:bg-[#eee]"} >
          <button className="bg-transparent outline-none border-0 cursor-pointer h-3/6">
            <Link to={isAuthenticated ? "/wishlist" : "/login"} className="flex justify-center items-center w-full h-full">
              WishList
            </Link>
          </button>
          <button onClick={onLogOut} >Log out</button>
        </div>
    </div>
  )
}

export default HeaderUser