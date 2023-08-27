import { useNavigate } from "react-router-dom"

export default function ListNavigation({ items }) {
    const navigate = useNavigate()
    const renderedItems = items.map((item,i) => (
        <li key={i} className="inline-block mr-[10px]"><button onClick={() => navigate(item.url)}>{item.label}</button></li>
    ))
    
    return <ul className="p-0 m-0 list-none justify-items-end [&>*:last-child]:ml-[30px] [&>*:last-child]:py-[10px] [&>*:last-child]:px-[24px] [&>*:last-child]:h-[48px] [&>*:last-child]:w-[148px] [&>*:last-child]:rounded-full [&>*:last-child]:bg-[#FF6161]">{renderedItems}</ul>
}