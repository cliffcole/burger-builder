import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems'
//import Menu from './../Menu/Menu';
import DrawToggle from './../SideDrawer/DrawToggle/DrawTottle';

const toolbar = (props) => {
    //console.log(props.drawToggleClicked);
    return (
        <header className={classes.Toolbar}>
            {/* <Menu menuClicked={props.menuClicked}/>  */}
            <DrawToggle clicked={props.drawToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;