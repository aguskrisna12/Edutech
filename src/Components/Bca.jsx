export default function Bca({handleRadioChange, selectedValue}) {
    return (
        <>
            <div className="flex justify-between w-[489px] h-14 mt-3.5 rounded shadow border border-neutral-300 px-3">
                <div className="flex pt-3">
                    <img className="w-[72px] h-[21.18px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png" alt="img" />
                    <span className="pl-4">Bank Transfer ke Rek Bank BCA</span>
                </div>
                <input type="radio" name="radAnswer" value='{"value" : "BCA", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png"}' onChange={handleRadioChange} checked={selectedValue === 'BCA'}/>
            </div>
        </>
    )
}
