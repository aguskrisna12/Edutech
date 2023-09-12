import { useNavigate } from "react-router-dom"

export default function ListNavigation({ items }) {
    const navigate = useNavigate()
    const renderedItems = items.map((item,i) => (
        <li key={i} className="inline-block">
            <button className="cursor-not-allowed" onClick={() => navigate(item.url)}>
                {item.label}
            </button>
        </li>
    ))
    
    return (
        <ul className="p-0 m-0 
        flex flex-col 
        text-center
        gap-y-2
        text-xl
        list-none 
        [&>*:last-child]:bg-[#FF6161]
        [&>*:last-child]:mx-[30px]
        [&>*:last-child]:rounded
        [&>*:last-child]:py-[10px]
        md:flex
        md:flex-row
        md:gap-x-4
        md:items-center
        md:[&>*:last-child]:bg-[#FF6161]
        md:[&>*:last-child]:rounded-full
        md:[&>*:last-child]:w-[180px]
        md:text-base"
        >
            {renderedItems}
        </ul>

    )
}