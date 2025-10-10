import { Link } from "react-router-dom"

const Card = ({name, description,size,url}) =>{
    return(
    <div className="flex flex-col border min-w-md items-center py-5 px-5">
        <h1 className="py-2 px-2">{name}</h1>
        <p className="py-2 px-2">{description}</p>
        <div className="flex flex-col py-2 px-2 align-start w-full">
            <span>{size}</span>
        </div>
        <Link to = {url}>Clique aqui</Link>
    </div>
    )
}
export default Card