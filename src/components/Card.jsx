import { Link } from "react-router-dom";

const Card = ({ name, icon, description, path }) => {
    return (
        <Link to={path}>
        <div className="h-32 cursor-pointer aspect-video border-2 border-gray-500 hover:bg-gray-700 flex flex-col items-center justify-center rounded-lg p-2">
            <span className="text-lg font-semibold">{icon}{name}</span>
            <span>{description}</span>
        </div>
        </Link>
    )
}
export default Card;