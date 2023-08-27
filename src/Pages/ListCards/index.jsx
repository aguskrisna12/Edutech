import { useNavigate } from "react-router";


function ListCards() {

    const navigate = useNavigate()

    const goTo = (id) => {
        navigate(`./list-materi/${id}`)
    }

    const contents = [
        {
            id: 1,
            title: "Programming JS",
            paragf: "(Getting started with JS)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
        {
            id: 2,
            title: "Programming ReactJS",
            paragf: "(Getting started with ReactJS)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
        {
            id: 3,
            title: "Programming NextJS",
            paragf: "(Getting started with NextJS)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
        {
            id: 4,
            title: "Programming Vue",
            paragf: "(Getting started with Vue)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
        {
            id: 5,
            title: "Programming Angular",
            paragf: "(Getting started with Angular)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
        {
            id: 6,
            title: "Programming Svelte",
            paragf: "(Getting started with Svelte)",
            batch: 'Agustus 2023',
            mentor: 'Annonimus',
            price: '700.000',
            discountPrice: '500.000'
        },
    ]
  return (
    <div className="px-[155px] py-[70px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center bg-[#EFF4FA] gap-6">
    {contents.map((item, i) => (
        <section onClick={() => goTo(item.id)} key={i} className="w-[352px] cursor-pointer">
            <div className="bg-[#152A46] flex flex-row rounded-t-[20px] h-[128px]">
                <img src="/assets/img/person.png" className="w-[75px] h-[110px] ml-[28px] mt-[16px]" alt='img' />
                <div>
                    <h2 className="ml-[17px] mt-[27px] text-[16px] font-semibold text-[#FFCD29]">Insentif Bootcamp</h2>
                    <p className="ml-[17px] mt-[9px] text-[20px] font-bold text-white">{item.title}</p>
                    <p className="ml-[17px] text-white text-[12px] font-normal">{item.paragf}</p>
                </div>
            </div>
            <div className="h-[145px] rounded-b-[20px] bg-white">
                <p className="ml-[17px] mt-[9px] text-[17px] font-[800]">{item.title}</p>
                <p className="ml-[17px] text-[17px] font-[800]">{item.paragf}</p>
                <p className="ml-[17px] pt-[5px] text-[#00000080] text-[12px] font-[600]">Batch: <span>{item.batch}</span></p>
                <p className="ml-[17px] text-[#00000080] text-[12px] font-[600]">Mentor: {item.mentor}</p>
                <p className="mx-[17px] text-end">Rp {item.discountPrice ? (
                    <s>{item.price}</s>
                ) : item.price} {item.discountPrice && item.discountPrice}</p>
            </div>

        </section>
    ))}
</div>
  )
}

export default ListCards;