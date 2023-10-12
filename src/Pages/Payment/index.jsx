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
  const { logoBank } = useSelector((state) => state.content)

  console.log(radioValue)



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

  const lowerCaseBank = radioValue.toLowerCase()
  console.log(lowerCaseBank)

  const listAtm = [`Masukan kartu ke mesin ATM ${radioValue}`, 'Pilih Bahasa', 'Masukkan PIN ATM', 'Pilih menu transaksi lainnya', `Pilih menu Transfer ${radioValue}`, 'Masukkan no rekening yang dituju', 'Masukkan nominal jumlah uang', 'Jika benar pilih YA', 'Selesai, struk akan keluar dari mesin ATM']
  const ListInet = [`Login ke ${lowerCaseBank}.co.id`, 'Masukkan User ID dan PIN internet banking', 'Klik menu transfer dana', 'Masukkan nominal transfer, kemudian isi nomor rekening tujuan', `klik Lanjutkan, kemudian gunakan token ${radioValue} untuk proses otorisasi (ikuti instruksi selanjutnya yang tertera)`, 'Jika selesai segera logout']
  const listMobile = ['Login ke akun kamu dengan memasukkan User ID dan PIN mobile banking', 'Pilih menu Transfer', 'Masukkan kode bank tujuan diikuti nomor rekening tujuan', 'Masukkan nominal transfer', `Masukkan PIN ${radioValue} Mobile kamu untuk proses otorisasi`]
  return (
    <>

      <div className="bg-[#EFF4FA] px-3 md:px-0">
        <div className="text-neutral-900 md:text-[28px] text-sm md:pl-10 md:py-5 font-bold leading-loose pl-3">Instruksi Bayar</div>
        <div className="md:w-[1269px] md:h-[420px] flex flex-col md:flex-row bg-white rounded-[20px] md:flex md:justify-between md:m-auto md:pr-[150px] p-5 md:p-0 ">
          <div>
            <div className="md:flex md:pt-10 md:pl-10 pl-3 flex">
              <div className="md:w-[119px] w-fit md:h-[110px] bg-slate-700 rounded-[5px] md:flex md:justify-center md:items-center">
                <img src="/assets/img/person.png" className="md:w-[68.99px] md:h-[91.41px]" alt="img" />
              </div>
              <div className="md:w-[314px] md:pl-4 md:pt-1 pl-3">
                <span className="text-black text-xl font-extrabold leading-[25px]">{filterCard.title}<br /></span>
                <span className="text-black text-[17px] font-extrabold leading-[25px]">{filterParagf}</span>
                <p className="pt-[7px] text-[#00000080] text-[12px] font-[600]">Batch <span>{filterCard.batch}</span></p>
                <p className="text-[#00000080] text-[12px] font-[600]">Mentor {filterCard.mentor}</p>
              </div>
            </div>
            <div className="md:mt-5 md:pl-10 mt-3 pl-3 pb-1">
              <p className="text-neutral-900 text-sm font-extrabold leading-[14px] md:py-4">Metode Pembayaran</p>
              <p className="md:w-[417px] text-zinc-500 text-base font-normal leading-normal">Bank Transfer (verifikasi manual) : {radioValue}</p>
            </div>
            <div className="md:w-[319px] md:h-[45px] md:mt-2 md:relative relative">
              <div className="md:w-[300px] md:h-[45px] md:left-[102px] absolute left-[120px] md:top-0 md:absolute">
                <div className="md:left-10 md:top-0 md:absolute text-neutral-900 text-base font-semibold leading-tight">No Rek. {radioValue === 'Mandiri' ? '999000765' : radioValue === 'BCA' ? '8880007645' : '7770098734'}</div>
                <div className="md:left-10 md:top-[25px] md:absolute text-zinc-500 text-base font-medium leading-tight">a.n. Agus Krisna</div>
              </div>
              <img className="md:w-[72px] w-[100px] ml-3 md:h-[21.18px] md:ml-10 md:left-0 md:top-[12px] md:absolute" src={logoBank} alt="img" />
            </div>
            <div className="md:w-[300px] md:mt-5 md:pl-10 mt-3 pl-3 text-zinc-500 text-base font-normal leading-normal">Nominal yang harus dibayar senilai:</div>
            <div className="md:w-[277.82px] md:mt-5 md:pl-10 pl-3 pt-2 md:pt-0 text-neutral-900 text-2xl font-semibold leading-7">Rp. {totalPembayaran}</div>
          </div>
          <div className="md:pt-9 pt-3 px-3 md:px-0 md:relative">
            <div className="md:left-0 md:top-0 md:absolute text-neutral-900 md:text-xl md:pt-9 font-bold leading-7">Instruksi Pembayaran</div>
            <div className="md:w-[395px] md:h-[81px] md:relative flex gap-x-3">
              <button onClick={handleShowAtm} className="md:left-0 md:top-[47px] md:absolute text-neutral-900 md:text-xl font-semibold leading-7">ATM</button>
              <button onClick={handleShowInet} className="md:left-[75px] md:top-[47px] md:absolute text-neutral-900 md:text-xl font-semibold leading-7">Internet Banking</button>
              <button onClick={handleShowMobile} className="md:left-[263px] md:top-[47px] md:absolute text-neutral-900 md:text-xl font-semibold leading-7">M-Banking</button>
              <div className="md:w-[370px] md:h-[0px] md:left-0 md:top-[81px] md:absolute border border-neutral-300"></div>
            </div>
            <div className="md:mt-4 md:w-[400px] mt-1 mb-3 md:mb-0">
              <ol className="leading-7">
                {showAtm && listAtm.map((item, i) => (
                  <li key={i}>{i + 1}. {item}</li>
                ))}
                {showInet && ListInet.map((item, i) => (
                  <li key={i}>{i + 1}. {item}</li>
                ))}
                {showMobileBanking && listMobile.map((item, i) => (
                  <li key={i}>{i + 1}. {item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
      <div className="md:my-3 md:flex md:justify-center flex justify-center">
        <div className="md:w-[1269px] md:h-[147px] md:flex md:flex-col md:items-center md:justify-center bg-[#2B3E58] flex flex-col w-full items-center md:pt-0 pt-3">
          <p className="text-white md:pb-4 pt-3 md:pt-0">Sudah Transfer? Lakukan verifikasi pembayaran segera!</p>
          <button class="rounded-full mt-3 md:mt-0 md:h-12 h-[40px] w-[200px] md:w-[205px] text-white bg-[#FCBC30]">Verifikasi Pembayaran</button>
        </div>
      </div>
    </>
  )
}

export default Payment