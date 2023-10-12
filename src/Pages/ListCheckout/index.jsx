import { Link, useNavigate, useParams } from "react-router-dom";
import Bca from "../../Components/Bca";
import Bni from "../../Components/Bni";
import Mandiri from "../../Components/Mandiri";
import { useDispatch, useSelector } from "react-redux";
import { getValueLogo, getValueRadio } from "../../Components/Store/Product/reducer";
import { useState } from "react";

function ListCheckout() {

    const { id } = useParams()
    // console.log(id) 
    const [selectedValue, setSelectedValue] = useState('')
    const [srcImg, setSrcImg] = useState('')
    const [input, setInput] = useState('')

    const { hargaKelas } = useSelector((state) => state.content)
    const { potongan } = useSelector((state) => state.content)
    const { promo } = useSelector((state) => state.content)
    const { kodeUnik } = useSelector((state) => state.content)
    const { totalPembayaran } = useSelector((state) => state.content)
    const { radioValue } = useSelector((state) => state.content)
    const { logoBank } = useSelector((state) => state.content)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    
    const { entities } = useSelector((state) => state.content)
    const newEntities = [...entities]

    const filterCard = newEntities.filter(item => item.id === Number(id))[0]
    // console.log(filterCard)

    const filterParagf = filterCard.paragf.slice(1, filterCard.paragf.length - 1)
    // console.log(filterParagf)

    // console.log(selectedValue)
    
    const handleRadioChange = (e, ...param) => {
        setSelectedValue(e.target.value)
        setSrcImg(param[0])
    }

    
    dispatch(getValueLogo(srcImg))
    dispatch(getValueRadio(selectedValue))

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        setInput('')
        alert('Tidak ada kode promo saat ini')
    }

    const goTo = (id) => {
        if(!srcImg){
            alert('mohon klik Bank transfer')
            return
        }
        navigate(`./payment/${id}`)
    }

    
    console.log(logoBank)

    return (
        <div className="bg-[#EFF4FA] px-3">
            <div className="text-neutral-900 text-sm text-[28px] font-bold leading-loose md:text-[28px] md:p-5 md:pl-10">Checkout</div>
            <div className="md:grid md:grid-cols-2 flex flex-col md:justify-center md:px-10">
                <div className="md:w-fit md:h-fit bg-[#FFFFFF] md:pt-[55px] md:pl-[43px] md:pb-[65px] md:pr-[55px] rounded-[20px] mb-3 p-5">
                    <p className="text-neutral-900 text-xl font-bold leading-7">Pilih Metode Pembayaran</p>
                    <div className="md:w-[461px] md:h-[62px] md:mb-3 md:flex-col md:justify-start md:items-start md:gap-0.5 md:inline-flex mb-3">
                        <p className="text-neutral-900 text-sm font-semibold leading-tight">Bank Transfer(verifikasi manual)</p>
                        <p className="text-zinc-500 text-xs font-normal leading-tight">Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
                        <div className="md:w-[489px] md:h-[90px] md:py-2 md:border-b border-neutral-300" />
                    </div>
                    <Mandiri selectedValue={selectedValue} handleRadioChange={handleRadioChange}/>
                    <Bca selectedValue={selectedValue} handleRadioChange={handleRadioChange}/>
                    <Bni selectedValue={selectedValue} handleRadioChange={handleRadioChange}/>
                </div>
                <div className="md:w-fit md:h-fit bg-[#FFFFFF] md:pt-[45px] md:px-[65px] md:pb-[52px] rounded-[20px] md:mb-8 border-2 p-5 mb-3">
                    <div className="text-neutral-900 text-xl font-bold mb-3 leading-7">Ringkasan Pesanan</div>
                    <div className="flex md:py-5">
                        <div className="md:w-[119px] md:h-[110px] bg-slate-700 md:rounded-[5px] md:flex md:justify-center md:items-center">
                            <img src="/assets/img/person.png" className="w-[80px] h-[100px] md:w-[68.99px] md:h-[91.41px]" alt="img" />
                        </div>
                        <div className="pl-4 md:w-[314px] md:pl-4 md:pt-1">
                            <span className="text-black text-xl font-extrabold leading-[25px]">{filterCard.title}<br /></span>
                            <span className="text-black text-[17px] font-extrabold leading-[25px]">{filterParagf}</span>
                            <p className="pt-[7px] text-[#00000080] text-[12px] font-[600]">Batch <span>{filterCard.batch}</span></p>
                            <p className="text-[#00000080] text-[12px] font-[600]">{filterCard.mentor}</p>
                        </div>
                    </div>
                    <div className="md:w-100">
                        <div className="text-neutral-900 md:pb-2 mt-3 mb-1 text-sm font-extrabold leading-tight">Kode Promo</div>
                        <input value={input} onChange={handleChange} className="w-[250px] h-[40px] md:w-[420px] md:h-[54px] md:pl-3 md:pr-2.5 md:py-2.5 bg-white rounded-tl rounded-bl border border-gray-400 md:justify-start md:items-center md:gap-2.5 md:inline-flex" placeholder="Masukan Kode Promo"/>
                        <button onClick={handleSubmit} className="h-[40px] md:ml-1 text-sm w-[100px] text-white md:w-fit md:h-fit md:px-4 md:py-[19px] bg-[#2A61A8] rounded-tr rounded-br border border-gray-400 md:flex-col md:justify-center md:items-center md:gap-2.5 md:inline-flex">Terapkan</button>
                    </div>
                    <div className="md:mt-5 mt-3">
                        <p className="text-neutral-900 text-sm font-extrabold leading-[20px] md:leading-[14px] md:py-4">Metode Pembayaran</p>
                        <p className="text-neutral-900 text-sm font-semibold leading-[20px] md:leading-[14px]">Bank Transfer (verifikasi manual) : {radioValue ? radioValue : 'Mohon klik Bank transfer'}</p>
                    </div>
                    <div className="md:mt-9">
                        <div className="md:pb-[6px] text-neutral-900 text-sm font-extrabold leading-relaxed md:leading-[14px]">Ringkasan Pembayaran</div>
                        <div className="md:flex md:pt-[8px] md:leading-normal leading-relaxed md:justify-between md:w-[530px]">
                            <p>Harga Kelas</p>
                            <p className="pl-3 md:pl-0">Rp. {hargaKelas}</p>
                        </div>
                        <div className="md:flex md:pt-[8px] md:justify-between md:w-[530px]">
                            <p>Potongan</p>
                            <p className="pl-3 md:pl-0">Rp. {potongan}</p>
                        </div>
                        <div className="md:flex md:pt-[8px] md:justify-between md:w-[530px]">
                            <p>Promo</p>
                            <p className="pl-3 md:pl-0">Rp. {promo}</p>
                        </div>  
                        <div className="md:flex md:pt-[8px] md:justify-between md:w-[530px]">
                            <p>Kode Unik</p>
                            <p className="pl-3 md:pl-0">Rp. {kodeUnik}</p>
                        </div>
                        <div className="md:w-[530px] md:h-[0px] md:my-4 bg-white border border-neutral-300"></div>
                        <div className="md:flex md:pt-[8px] md:justify-between md:w-[530px] my-3 text-neutral-900 text-sm font-extrabold leading-[14px]">
                            <p>Total Pembayaran</p>
                            <p className="pl-3 my-3 md:my-0 md:pl-0">Rp.{totalPembayaran}</p>
                        </div>
                    </div>
                    <div className="md:mt-3 md:w-[530px] font-normal text-sm mb-3 md:mb-0">
                        <p>Dengan menekan tombol <span className="text-neutral-900 text-sm font-bold leading-tight">Bayar</span> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <Link className="text-sky-500 text-sm font-bold underline leading-tight" to={'#'}>Syarat & ketentuan</Link> yang berlaku.</p>
                    </div>
                    <div className="md:flex md:justify-end md:pt-5 mb-3">
                        <button onClick={() => goTo(id)} className="hover:bg-[#224B80] rounded-full h-12 w-[205px] text-white bg-[#2A61A8]">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListCheckout;