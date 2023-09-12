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
      <div className="h-[300px] w-full bg-[#152A46] md:flex md:justify-between">
        <div className="md:pl-[150px] pt-10 md:pt-12">
          <h2 className="text-white text-[42px] md:w-[500px] md:text-left text-center font-semibold leading-[40px]">{filterCard.title}</h2>
          <h3 className="text-white font-semibold md:text-left text-center text-[35px] pt-4">Mentor</h3>
          <p className="text-white md:text-left text-center">{filterCard.mentor}</p>
        </div>
        <img className="pr-[100px] hidden" src="/assets/img/header.png" alt="" />
      </div>
      <div className="bg-[#EFF4FA]">
        <div className="flex flex-col gap-y-7 md:gap-x-8 px-10 md:px-[120px] justify-center w-full md:flex md:flex-row md:pt-10">
          <div className="rounded-[20px] md:w-[350px] bg-[#FFFFFF] leading-loose h-[250px] mt-6">
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
          <div className="bg-[#FFFFFF] rounded-[20px] md:w-[900px] md:mt-6 md:ml-4 pl-11 pr-11 pb-11 pt-5">
            <h2 className="text-3xl pb-3">Materi</h2>
            <ol className="space-y-4 list-decimal list-inside">
              {listMateri.map((item, i) => (
                <><li key={i}>{item.title}</li>
                  <ul className="pl-5 list-disc list-inside li-listMateri">
                    <li className="text-justify">{item.desc}
                    </li>
                  </ul></>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex justify-center md:flex md:justify-end px-10 mt-4">
          <div className="md:mr-[6%] md:w-[61%] bg-[#FFFFFF] rounded-[20px] py-4 md:pl-11 md:pr-11 md:pb-5 md:pt-5 w-full">
            <ol className="space-y-4 list-decimal list-inside ml-9">
              {listFasilitas.map(item => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bg-[#152A46] w-full h-[386px] mt-[80px] flex flex-col justify-center items-center">
          <p className="text-white text-[46px] mb-[46px] text-center font-semibold">Sudah siap bergabung?</p>
          <button onClick={() => navigate('/')} className=" rounded-full h-[50px] w-[250px] bg-[#FFCD29]">Daftar Kelas</button>
        </div>
      </div>
    </>
  )
}


export default ListDetails;

