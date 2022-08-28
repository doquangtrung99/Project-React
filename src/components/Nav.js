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
<<<<<<< HEAD
                    <NavLink to='/covid19'>Covid 19</NavLink>
=======
                    <NavLink to='/covid-19'>Covid-19</NavLink>
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </>
        )
    }
}
export default Nav;





