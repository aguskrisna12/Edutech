function HeaderImg() {
    return (
        <>
            <div className="h-[460px] md:h-[300px] w-full bg-[#152A46] md:flex md:justify-between">
                <div className="pt-5 md:pr-[200px] w-full px-5 flex flex-col items-center">
                    <h2 className="text-white md:pt-4 text-[42px] md:w-[400px] w-[400px] font-semibold leading-[50px]">Jadi expert bersama edspert.id</h2>
                    <div className="w-[400px] pt-3 text-neutral-50 text-base font-thin leading-normal">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</div>
                </div>
                <img className="md:pr-[100px] mx-auto w-[400px] md:w-[600px] cursor-pointer transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300" src="/assets/img/header.png" alt="" />
            </div>
        </>
    )
}

export default HeaderImg