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
            <header className="bg-[#152A46] text-white px-[120px] py-[28px] flex justify-between items-center">
                <Link to={'/'}><img src="/assets/img/logo.png" className="w-[50px] h-[50px]" alt='img' /></Link>
                <nav>
                    <ListNavigation items={navItems} />
                </nav>
            </header>           
        </>
    )
}


export default Header;
