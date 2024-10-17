import { topNav } from "../../data/navigation.js";
import { clsx } from "clsx";

const Navigation = ({ currentPath }) => {

    return (
        <>
            {Object.entries(topNav).map(([route, name], i) => {
                return <a key={route + '-top-' + i} className={clsx('nav', currentPath === route && 'active')} href={route}>{name}</a>
            })}
        </>
    )
}

export default Navigation