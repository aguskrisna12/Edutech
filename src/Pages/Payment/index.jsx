import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

function Payment() {

  const { id } = useParams()
  const [showAtm, setShowAtm] = useState(true)
  const [showInet, setShowInet] = useState(false)
  const [showMobileBanking, setShowMobileBanking] = useState(false)


  const { entities } = useSelector((state) => state.content)
  const newEntities = [...entities]

  const filterCard = newEntities.filter(item => item.id === Number(id))[0]
  console.log(filterCard)

  const filterParagf = filterCard.paragf.slice(1, filterCard.paragf.length - 1)

  const { totalPembayaran } = useSelector((state) => state.content)
  const { radioValue } = useSelector((state) => state.content)
  // console.log(radioValue)

  const handleShowAtm = () => {
    setShowInet(false)
    setShowMobileBanking(false)
    setShowAtm(!showAtm)
  }

  const handleShowInet = () => {
    setShowAtm(false)
    setShowMobileBanking(false)
    setShowInet(!showInet)
  }

  const handleShowMobile = () => {
    setShowAtm(false)
    setShowInet(false)
    setShowMobileBanking(!showMobileBanking)
  }

  const listAtm = ['Masukan kartu ke mesin ATM Mandiri', 'Pilih Bahasa', 'Masukkan PIN ATM', 'Pilih menu transaksi lainnya', 'Pilih menu Transfer Mandiri', 'Masukkan no rekening yang dituju', 'Masukkan nominal jumlah uang', 'Jika benar pilih YA', 'Selesai, struk akan keluar dari mesin ATM']
  const ListInet = ['Login ke ib.bankmandiri.co.id', 'Masukkan User ID dan PIN internet banking', 'Klik menu transfer dana', 'Masukkan nominal transfer, kemudian isi nomor rekening tujuan', 'klik Lanjutkan, kemudian gunakan token Mandiri untuk proses otorisasi (ikuti instruksi selanjutnya yang tertera)', 'Jika selesai segera logout']
  const listMobile = ['Login ke akun kamu dengan memasukkan User ID dan PIN mobile banking', 'Pilih menu Transfer', 'Masukkan kode bank tujuan diikuti nomor rekening tujuan', 'Masukkan nominal transfer', 'Masukkan PIN Mandiri Mobile kamu untuk proses otorisasi']
  return (
    <div className="bg-[#EFF4FA]">
      <div className="text-neutral-900 text-[28px] pl-10 py-5 font-bold leading-loose">Instruksi Bayar</div>
      <div className="w-[1269px] h-[420px] bg-white rounded-[20px] flex justify-between m-auto pr-[150px]">
        <div>
          <div className="flex pt-10 pl-10">
            <div className="w-[119px] h-[110px] bg-slate-700 rounded-[5px] flex justify-center items-center">
              <img src="/assets/img/person.png" className="w-[68.99px] h-[91.41px]" alt="img" />
            </div>
            <div className="w-[314px] pl-4 pt-1">
              <span className="text-black text-xl font-extrabold leading-[25px]">{filterCard.title}<br /></span>
              <span className="text-black text-[17px] font-extrabold leading-[25px]">{filterParagf}</span>
              <p className="pt-[7px] text-[#00000080] text-[12px] font-[600]">Batch <span>{filterCard.batch}</span></p>
              <p className="text-[#00000080] text-[12px] font-[600]">Mentor {filterCard.mentor}</p>
            </div>
          </div>
          <div className="mt-5 pl-10">
            <p className="text-neutral-900 text-sm font-extrabold leading-[14px] py-4">Metode Pembayaran</p>
            <p className="w-[417px] text-zinc-500 text-base font-normal leading-normal">Bank Transfer (verifikasi manual) : {radioValue}</p>
          </div>
          <div className="w-[319px] h-[45px] mt-2 relative">
            <div className="w-[300px] h-[45px] left-[102px] top-0 absolute">
              <div className="left-10 top-0 absolute text-neutral-900 text-base font-semibold leading-tight">No Rek. 137000299089</div>
              <div className="left-10 top-[25px] absolute text-zinc-500 text-base font-medium leading-tight">a.n. PT Widya Kreasi Bangsa</div>
            </div>
            <img className="w-[72px] h-[21.18px] ml-10 left-0 top-[12px] absolute" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" alt="img" />
          </div>
          <div className="w-[300px] mt-5 pl-10 text-zinc-500 text-base font-normal leading-normal">Nominal yang harus dibayar senilai:</div>
          <div className="w-[277.82px] mt-5 pl-10 text-neutral-900 text-2xl font-semibold leading-7">Rp. {totalPembayaran}</div>
        </div>
        <div className="pt-9">
          <div className="w-[395px] h-[81px] relative">
            <div className="left-0 top-0 absolute text-neutral-900 text-xl font-bold leading-7">Instruksi Pembayaran</div>
            <button onClick={handleShowAtm} className="left-0 top-[47px] absolute text-neutral-900 text-xl font-semibold leading-7">ATM</button>
            <button onClick={handleShowInet} className="left-[75px] top-[47px] absolute text-neutral-900 text-xl font-semibold leading-7">Internet Banking</button>
            <button onClick={handleShowMobile} className="left-[263px] top-[47px] absolute text-neutral-900 text-xl font-semibold leading-7">M-Banking</button>
            <div className="w-[395px] h-[0px] left-0 top-[81px] absolute border border-neutral-300"></div>            
          </div>
          <div className="mt-4 w-[400px]">
            <ol className="leading-7">
            {showAtm && listAtm.map((item,i) => (
              <li key={i}>{i + 1}. {item}</li>
            ))}
            {showInet && ListInet.map((item,i) => (
              <li key={i}>{i + 1}. {item}</li>
            ))}
            {showMobileBanking && listMobile.map((item,i) => (
              <li key={i}>{i + 1}. {item}</li>
            ))}                
            </ol>
          </div>
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <div className=" w-[1269px] h-[147px] flex flex-col items-center justify-center bg-[#2B3E58]">
          <p className="text-white pb-4">Sudah Transfer? Lakukan verifikasi pembayaran segera!</p>
          <button class="rounded-full h-12 w-[205px] text-white bg-[#FCBC30]">Verifikasi Pembayaran</button>
        </div>
      </div>
    </div>
  )
}

export default Payment