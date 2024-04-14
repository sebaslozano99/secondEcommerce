import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (

    <footer>
       <div className="h-[300px] flex justify-around items-center border-t max-[750px]:grid  max-[750px]:grid-cols-2 max-[750px]:grid-rows-2 max-[750px]:gap-4 max-[750px]:h-[400px] max-[500px]:flex max-[500px]:flex-col max-[500px]:h-auto max-[500px]:gap-8 max-[500px]:py-4">

            <div className="flex flex-col items-start max-[750px]:items-center">
                <h5 className="text-[1.3em] font-bold mb-[15px]" >Product</h5>
                <ul >
                    <li className="cursor-pointer hover:underline">Features</li>
                    <li className="cursor-pointer hover:underline">Pricing</li>
                    <li className="cursor-pointer hover:underline">Cloud</li>
                    <li className="cursor-pointer hover:underline">All</li>
                </ul>
            </div>

            <div className="flex flex-col items-start max-[750px]:items-center">
                <h5 className="text-[1.3em] font-bold mb-[15px]" >Learn</h5>
                <ul >
                    <li className="cursor-pointer hover:underline">Docs</li>
                    <li className="cursor-pointer hover:underline">Guides</li>
                    <li className="cursor-pointer hover:underline">Api Reference</li>
                    <li className="cursor-pointer hover:underline">Release Notes</li>
                </ul>
            </div>

            <div className="flex flex-col items-start max-[750px]:items-center">
                <h5 className="text-[1.3em] font-bold mb-[15px]" >Resources</h5>
                <ul >
                    <li className="cursor-pointer hover:underline">Developers</li>
                    <li className="cursor-pointer hover:underline">GitHub</li>
                    <li className="cursor-pointer hover:underline">Discord</li>
                    <li className="cursor-pointer hover:underline">Twitter</li>
                </ul>
            </div>

            <div className="flex flex-col items-start max-[750px]:items-center">
                <h5 className="text-[1.3em] font-bold mb-[15px]" >About</h5>
                <ul >
                    <li className="cursor-pointer hover:underline">Company</li>
                    <li className="cursor-pointer hover:underline">Blog</li>
                    <li className="cursor-pointer hover:underline">Contact Us</li>
                    <li className="cursor-pointer hover:underline">Privacy</li>
                </ul>
            </div>

       </div>

        <div className="pl-[6.5em] pt-[1em] pb-[1em] flex flex-col gap-[8px]  max-[500px]:justify-center max-[500px]:items-center max-[500px]:px-[1em]" >
            <div className="flex justify-around w-[15%] max-[720px]:w-[25%] max-[500px]:w-[35%]">
                <FontAwesomeIcon icon={faFacebook} className="cursor-pointer text-[1.3em] transition-all ease-in-out duration-300 hover:translate-y-[-5px]" />
                <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text-[1.3em] transition-all ease-in-out duration-300 hover:translate-y-[-5px]" />
                <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-[1.3em] transition-all ease-in-out duration-300 hover:translate-y-[-5px]" />
            </div>
            <p>&copy; {new Date().getFullYear()} Batt inc.</p>
        </div>
    </footer>
  )
}

export default Footer