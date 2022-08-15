import React from "react";
import '../styles/Nav.scss';
import {
    NavLink
} from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <>
                <div className='topnav'>
                    <NavLink to='/' exact={true}>Home</NavLink>
                    <NavLink to='/listtodo'>Todo-List</NavLink>
                </div>
            </>
        )
    }
}
export default Nav;





