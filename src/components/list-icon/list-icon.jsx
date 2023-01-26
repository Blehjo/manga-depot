import { List } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsNavOpen } from '../../store/nav/nav.selector';
import { setIsNavOpen } from '../../store/nav/nav.action';


const ListIcon = () => {
    const dispatch = useDispatch();
    const isNavOpen = useSelector(selectIsNavOpen);
    const toggleIsNavOpen = () => dispatch(setIsNavOpen(!isNavOpen));

    return (
        <div onClick={toggleIsNavOpen}>
            <List style={{cursor: "pointer"}} className='ms-3 m-2' size={25} color="white" />
        </div>
    )
}

export default ListIcon;

