

const Loading = () => {
  return (
    <div className="border-[1px] border-[rgba(0,0,0,.5)] shadow-[0_0_#000] transition-all ease-in duration-300 flex flex-col justify-between p-[1em] hover:scale-[1.02] rounded-[15px] animate-pulse" >

        <div className="flex flex-col items-center justify-center" >
            <h2 className="opacity-70 h-5 animate-[skeleton_loading] text-center w-[20%] rounded-[5px] bg-[#a2a2a2]" ></h2>
        </div>

        <div className="f-full h-[60%] flex justify-center">
            <img className={`bg-[#a2a2a2] w-[70%] h-full object-contain rounded-[10px]`} />
        </div>

        <div className="w-[50%] h-5 flex items-center justify-center gap-[15px] mx-auto" >
            <em className={`w-[70%] h-full object-contain rounded-[10px] bg-[#a2a2a2]`} ></em>
            <p className={`bg-[#a2a2a2] w-[30%] h-[1em] rounded-[5px]`} ></p>
        </div>

        <div className={`flex justify-center w-[50%] mx-auto`} >
         <div className="bg-[#a2a2a2] h-5 w-32 rounded-[5px]" ></div>
        </div>
    </div>
  )
}

export default Loading