export default function Bca({handleRadioChange, selectedValue}) {
    return (
        <>
            <div className="flex justify-between items-center px-2 h-12 md:flex md:justify-between md:w-[489px] md:h-14 md:mt-3.5 rounded shadow border border-neutral-300 md:px-3">
                <div className="flex items-center md:flex">
                    <img className="w-10 h-3 md:w-[72px] md:h-[21.18px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png" alt="img" />
                    <span className="md:pl-4 text-sm pl-4">Bank Transfer ke Rek Bank BCA</span>
                </div>
                <input type="radio" name="radAnswer" value='BCA' onChange={(e) => handleRadioChange(e, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png")} checked={selectedValue === 'BCA'} required/>
            </div>
        </>
    )
}
