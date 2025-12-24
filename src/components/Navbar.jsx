import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-[100vw] h-20 fixed justify-between bg-black text-white flex px-6 items-center">
            <Link to=""><h1 className="text-2xl cursor-pointer font-semibold ">ToolHUB</h1></Link>
            <ul className="flex gap-4 pe-8">
               <Link to=""><li className="hover:bg-gray-800 cursor-pointer px-2 py-1 rounded-md">HOME</li></Link>
                <li className="hover:bg-gray-800 px-2 py-1 cursor-pointer rounded-md">ABOUT</li>
                <li className="hover:bg-gray-800 px-2 py-1 cursor-pointer rounded-md">CONTACT US</li>
            </ul>
        </div>
    )
}
export default Navbar;