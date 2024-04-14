import { useRef, useEffect } from "react";


const About = () => {

  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView(0,0)
  }, [])

  return (
    <div > 
      <div className="w-full h-[90vh] flex flex-col justify-center items-center relative bg-[rgba(0,0,0,0.5)] gap-[15px] border-2  border-red-800" ref={ref} >
        <h2 className="text-white text-4xl font-bold">About Batt</h2>
        <p className="text-white text-center w-[75%] tracking-[2px]">Discover a world of possibilities at <em className="font-bold text-xl">Batt</em>, your premier destination for online shopping. From fashion-forward apparel to cutting-edge gadgets, we offer a curated selection of top-quality products. With secure transactions and prompt delivery, we ensure a seamless shopping experience. Join us and embark on a journey of style, convenience, and satisfaction.  </p>
        <img src="../../../public/IMAGES/dropshipping.jpg" alt="dropshipping-background" className="w-full h-full object-cover absolute z-[-1] top-0 blur-sm" />
      </div>

      <div>
        <div className="min-h-[90vh]" >
            <h4 className="pt-[0.8em] pr-[0.8em]  pb-[0.5em]  pl-[2em] font-bold text-[2em]">Our Numbers</h4>
            
            <div className="flex items-center justify-around p-[2em] gap-[5em]" >   
                <img src="../../../public/IMAGES/earth.png" alt="planet earth" className="w-[30%]" />
                <p className="tracking-[2px]" >More than <em className="font-bold" >2.000.000 visits</em> a month and over <em> 1.200.000 purchases</em> every month through our platform.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
