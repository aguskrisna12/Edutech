import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

function ListDetails() {

  const { id } = useParams()
  
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

  ScrollToTop()
  const { entities } = useSelector((state) => state.content)
  const newEntities = [...entities]



  const filterCard = newEntities.filter(item => item.id === Number(id))[0]
  console.log(filterCard.title)

  const goTo = (id) => {
    navigate(`./list-checkout/${id}`)
}

  const navigate = useNavigate()
  const listMateri = [
    {
      title: `Pengenalan ${filterCard.title}`,
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 1',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 2',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 3',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 4',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 5',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
    {
      title: 'Materi Bootcamp React 6',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.'
    },
  ]

  const listFasilitas = ['E-Sertfikiat', 'Porfolio', 'Job Connector', 'Carrer Development']
  return (
    <>
      <div className="h-[300px] w-100 bg-[#152A46] flex justify-between">
        <div className="pl-[150px] pt-10">
          <h2 className="text-white text-[42px] w-[500px] font-semibold leading-[50px]">{filterCard.title}</h2>
          <h3 className="text-white font-semibold text-[35px] pt-4">Mentor</h3>
          <p className="text-white">{filterCard.mentor}</p>
        </div>
        <img className="pr-[100px]" src="/assets/img/header.png" alt="" />
      </div>
      <div className="bg-[#EFF4FA]">
        <div className="grid px-[120px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 py-[49px]">
          <div className="rounded-[20px] bg-[#FFFFFF] leading-loose h-[250px]">
            <p className="pl-[60px] pt-5">Materi</p>
            <p className="pl-[60px]">Fasilitas</p>
            <hr className="w-[320px] m-auto" />
            <div className="flex justify-between w-100 px-10 py-6">
              <p className="text-[red]"><s>Rp. 700.000</s></p>
              <p>Rp. 500.000</p>
            </div>
            <div className="flex justify-center w-100 pb-5">
              <button onClick={() => goTo(id)} class=" hover:bg-[#EBBD28] rounded-full h-[50px] w-[250px] bg-[#FFCD29]">Save Changes</button>
            </div>
          </div>
          <div className=" col-span-2 bg-[#FFFFFF] rounded-[20px] pl-11 pr-11 pb-11 pt-5">
            <h2 className="text-3xl pb-3">Materi</h2>
            <ol className="space-y-4 list-decimal list-inside">
              {listMateri.map((item, i) => (
                <><li key={i}>{item.title}</li>
                  <ul className="pl-5 list-disc list-inside li-listMateri">
                    <li>{item.desc}
                    </li>
                  </ul></>
              ))}
            </ol>
          </div>
        </div>
        <div className="ml-[520px] w-[780px] bg-[#FFFFFF] rounded-[20px] pl-11 pr-11 pb-5 pt-5">
          <ol className="space-y-4 list-decimal list-inside">
            {listFasilitas.map(item => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
        <div className="bg-[#152A46] w-100 h-[386px] mt-[80px] flex flex-col justify-center items-center">
          <p className="text-white text-[46px] mb-[46px] font-semibold">Sudah siap bergabung?</p>
          <button onClick={() => navigate('/')} class=" rounded-full h-[50px] w-[250px] bg-[#FFCD29]">Daftar Kelas</button>
        </div>
      </div>
    </>
  )
}


export default ListDetails;

