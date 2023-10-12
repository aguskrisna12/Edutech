function HeaderImg() {
    return (
        <div className="h-fit md:h-[300px] grid grid-rows-2 w-screen bg-[#152A46] md:flex md:justify-between md:px-[100px]">
            <div className="pt-5 md:pr-[200px] px-5 w-fit text-center md:text-left">
                <h2 className="text-white md:pt-4 md:w-[500px] md:text-[50px] text-3xl font-semibold leading-[50px]">Jadi expert bersama Agus Krisna</h2>
                <p className="pt-3 pr-3 text-neutral-50 md:text-[20px] text-base font-thin leading-normal">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
            </div>
            <img className="mx-auto md:mx-0 w-[60%] cursor-pointer transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/img/header.png" alt="" />
        </div>
    )
}

export default HeaderImg