import { Link } from "react-router-dom";
import Bca from "../../Components/Bca";
import Bni from "../../Components/Bni";
import Mandiri from "../../Components/Mandiri";


function ListCheckout() {
    return (
        <div className="bg-[#EFF4FA]">
            <div className="text-neutral-900 text-[28px] font-bold leading-loose p-5 pl-10">Checkout</div>
            <div className="flex gap-x-5 justify-center px-10">
                <div className="w-[587px] h-[447px] bg-[#FFFFFF] pt-[55px] pl-[43px] pr-[55px] rounded-[20px]">
                    <p className="text-neutral-900 text-xl font-bold leading-7">Pilih Metode Pembayaran</p>
                    <div className="w-[461px] h-[62px] mb-3 flex-col justify-start items-start gap-0.5 inline-flex">
                        <p className="text-neutral-900 text-sm font-semibold leading-tight">Bank Transfer(verifikasi manual)</p>
                        <p className="text-zinc-500 text-xs font-normal leading-tight">Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
                        <div className="w-[489px] h-[90px] py-2 border-b border-neutral-300" />
                    </div>
                    <Mandiri />
                    <Bca />
                    <Bni />
                </div>
                <div className="w-[715px] h-[800px] bg-[#FFFFFF] pt-[45px] px-[65px] pb-[52px] rounded-[20px] mb-8">
                <div className="text-neutral-900 text-xl font-bold leading-7">Ringkasan Pesanan</div>
                    <div className="flex py-5">
                        <div className="w-[119px] h-[110px] bg-slate-700 rounded-[5px] flex justify-center items-center">
                            <img src="/assets/img/person.png" className="w-[68.99px] h-[91.41px]" alt="img" />
                        </div>
                        <div className="w-[314px] pl-4 pt-1">
                            <span className="text-black text-xl font-extrabold leading-[25px]">Programming Laravel<br /></span>
                            <span className="text-black text-[17px] font-extrabold leading-[25px]">Getting Started with Laravel 9</span>
                            <p className="pt-[7px] text-[#00000080] text-[12px] font-[600]">Batch <span>8</span></p>
                            <p className="text-[#00000080] text-[12px] font-[600]">Mentor anonimus</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="text-neutral-900 pb-2 text-sm font-extrabold leading-tight">Kode Promo</div>
                        <input className="w-[420px] h-[54px] pl-3 pr-2.5 py-2.5 bg-white rounded-tl rounded-bl border border-gray-400 justify-start items-center gap-2.5 inline-flex" placeholder="Masukan Kode Promo"/>
                        <button className="ml-1 text-white w-[108px] h-[54px] px-4 py-2.5 bg-[#2A61A8] rounded-tr rounded-br border border-gray-400 flex-col justify-center items-center gap-2.5 inline-flex">Terapkan</button>
                    </div>
                    <div className="mt-5">
                        <p className="text-neutral-900 text-sm font-extrabold leading-[14px] py-4">Metode Pembayaran</p>
                        <p className="text-neutral-900 text-sm font-semibold leading-[14px]">Bank Transfer (verifikasi manual)-Mandiri</p>
                    </div>
                    <div className="mt-9">
                        <div className="pb-[6px] text-neutral-900 text-sm font-extrabold leading-[14px]">Ringkasan Pembayaran</div>
                        <div className="flex pt-[8px] justify-between w-[530px]">
                            <p>Harga Kelas</p>
                            <p>Rp. 700.000</p>
                        </div>
                        <div className="flex pt-[8px] justify-between w-[530px]">
                            <p>Potongan</p>
                            <p>Rp. 200.000</p>
                        </div>
                        <div className="flex pt-[8px] justify-between w-[530px]">
                            <p>Promo</p>
                            <p>-</p>
                        </div>
                        <div className="flex pt-[8px] justify-between w-[530px]">
                            <p>Kode Unik</p>
                            <p>-</p>
                        </div>
                        <div className="w-[530px] h-[0px] my-4 bg-white border border-neutral-300"></div>
                        <div className="flex pt-[8px] justify-between w-[530px]  text-neutral-900 text-sm font-extrabold leading-[14px]">
                            <p>Total Pembayaran</p>
                            <p>Rp.500.000</p>
                        </div>
                    </div>
                    <div className="mt-3  w-[530px] font-normal text-sm">
                        <p>Dengan menekan tombol <span className="text-neutral-900 text-sm font-bold leading-tight">Bayar</span> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <Link className="text-sky-500 text-sm font-bold underline leading-tight" to={'#'}>Syarat & ketentuan</Link> yang berlaku.</p>
                    </div>
                    <div className="flex justify-end pt-10">
                        <button class="rounded-full h-12 w-[205px] text-white bg-[#2A61A8]">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListCheckout;