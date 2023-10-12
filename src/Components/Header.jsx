import { Link } from "react-router-dom";
import ListNavigation from "./ListNavigation";


function Header() {
    const navItems = [
        { label: "List Materi", url: "/list-materi" },
        { label: "List Checkout", url: "/list-checkout" },
        { label: "Payment", url: "/payment" },
        { label: "Masuk/Daftar", url: "/login" },
      ]
    return (
        <>
            <header className="bg-[#152A46] text-white md:pl-[120px] md:pr-[70px] py-[28px] md:flex md:justify-between md:items-center">
                <Link className="flex justify-center pb-3" to={'/'}><img src="/assets/img/logo.png" className="w-[50px] h-[50px]" alt='img' /></Link>
                <nav>
                    <ListNavigation items={navItems} />
                </nav>
            </header>           
        </>
    )
}


export default Header;
