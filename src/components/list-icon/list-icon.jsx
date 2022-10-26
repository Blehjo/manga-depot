import { useContext } from "react";
import { List } from "react-bootstrap-icons";

import { ListContext } from "../../contexts/list.context";

const ListIcon = () => {
    const { isNavOpen, setIsNavOpen } = useContext(ListContext);

    const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);
    
    return (
        <div className='' onClick={toggleIsNavOpen}>
            <List style={{cursor: "pointer"}} className='ms-3 m-2' size={25} color="white" />
        </div>
    )
}

export default ListIcon;

