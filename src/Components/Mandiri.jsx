export default function Mandiri({selectedValue, handleRadioChange}) {
    return (
        <>
            <div className="flex justify-between items-center px-2 h-12 md:flex md:justify-between md:w-[489px] md:h-14 md:mt-3.5 rounded shadow border border-neutral-300 md:px-3">
                <div className="flex items-center">
                    <img className="w-10 md:w-[72px] md:h-[21.18px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" alt="img" />
                    <span className="md:pl-4 text-sm pl-4">Bank Transfer ke Rek Bank Mandiri</span>
                </div>
                <input type="radio" name="radAnswer" value='Mandiri' onChange={e => handleRadioChange(e, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png")} checked={selectedValue === 'Mandiri'} required/>
            </div>
        </>
    )
}
