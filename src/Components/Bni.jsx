export default function Bni({handleRadioChange, selectedValue}) {
    return (
        <>
            <div className="flex justify-between px-2 h-12 md:flex md:justify-between md:w-[489px] md:h-14 md:mt-4 rounded shadow border border-neutral-300 md:px-3">
                <div className="flex items-center md:flex">
                    <img className="w-10 h-4 md:w-[72px] md:h-[21.18px]" src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png" alt="img" />
                    <span className="md:pl-4 text-sm pl-4">Bank Transfer ke Rek Bank BNI</span>
                </div>
                <input type="radio" name="radAnswer" value='BNI' onChange={e => handleRadioChange(e, "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png")} checked={selectedValue === 'BNI'} required/>
            </div>
        </>
    )
}
