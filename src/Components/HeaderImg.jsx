function HeaderImg() {
    return (
        <div className="h-[460px] sm:h-[300px] grid w-full bg-[#152A46] sm:flex sm:justify-between px-[100px]">
            <div className="pt-5 sm:pr-[200px] px-5 w-screen">
                <h2 className="text-white md:pt-4 sm:w-[500px] sm:text-[50px] text-3xl w-[400px] font-semibold leading-[50px]">Jadi expert bersama edspert.id</h2>
                <p className="pt-3 pr-3 text-neutral-50 sm:text-[20px] text-base font-thin leading-normal">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
            </div>
            <img className="mx-auto sm:mx-0 w-[60%] cursor-pointer transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/img/header.png" alt="" />
        </div>
    )
}

export default HeaderImg