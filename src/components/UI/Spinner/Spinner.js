import React from 'react'
import classes from './Spinner.css'

const spinner = () => {
    console.log("SPINNING");
    return(
        <div className={classes.Loader}>Loading...</div>
    )
}
export default spinner;