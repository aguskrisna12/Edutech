import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import HeaderImg from "../../Components/HeaderImg";

function ListCards() {

    const navigate = useNavigate()

    const { entities } = useSelector((state) => state.content)

    const goTo = (id) => {
        navigate(`./list-materi/${id}`)
    }

    return (
        <>
            <HeaderImg />
            <div className="py-[50px] px-[5%] h-max gap-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:place-items-center place-items-center bg-[#EFF4FA]">
                {entities.map((item, i) => (
                    <section onClick={() => goTo(item.id)} key={i} className="w-[90%] cursor-pointer flex flex-wrap drop-shadow-md transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300">
                        <div className="bg-[#152A46] flex rounded-t-[20px] h-max w-[400px]">
                            <img src="/assets/img/person.png" className="w-[75px] h-[110px] ml-[28px] mt-[16px]" alt='img' />
                            <div>
                                <h2 className="ml-[17px] mt-[27px] text-[16px] font-semibold text-[#FFCD29]">Insentif Bootcamp</h2>
                                <p className="ml-[17px] mt-[9px] text-[20px] font-bold text-white">{item.title}</p>
                                <p className="ml-[17px] text-white text-[12px] font-normal">{item.paragf}</p>
                            </div>
                        </div>
                        <div className="h-[145px] w-[400px] rounded-b-[20px] bg-white">
                            <p className="ml-[17px] mt-[9px] text-[17px] font-[800]">{item.title}</p>
                            <p className="ml-[17px] text-[17px] font-[800]">{item.paragf}</p>
                            <p className="ml-[17px] pt-[5px] text-[#00000080] text-[12px] font-[600]">Batch: <span>{item.batch}</span></p>
                            <p className="ml-[17px] text-[#00000080] text-[12px] font-[600]">Mentor: {item.mentor}</p>
                            <p className="mx-[17px] text-end">Rp {item.discountPrice ? (
                                <s className="text-[red]">{item.price}</s>
                            ) : item.price} {item.discountPrice && item.discountPrice}</p>
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}

export default ListCards;