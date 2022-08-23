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
                    <NavLink to='/listuser'>List-user</NavLink>
                    <NavLink to='/template'>Template</NavLink>
                    <NavLink to='/covid-19'>Covid-19</NavLink>
                </div>
            </>
        )
    }
}
export default Nav;





