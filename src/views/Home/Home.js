import React from 'react'
import Button from '@material-ui/core/Button';
import {useStyles} from "../../style";


export default function HomeView(props) {

    const classes = useStyles();
    const goToDashboard = (path) => {
        props.route.history.push(path)
    };
    return (
        <div className={classes.homeRoot}>
            <div className={classes.containerDiv}>
                <Button variant="contained" onClick={() => goToDashboard('/user')} size="large"
                        className={classes.extraBtnStyle}
                        color="primary">
                    User
                </Button> <br/>
                <Button variant="contained" onClick={() => goToDashboard('/admin')} size="large"
                        className={classes.extraBtnStyle}
                        color="secondary">
                    Admin
                </Button>
            </div>
        </div>
    )
}
