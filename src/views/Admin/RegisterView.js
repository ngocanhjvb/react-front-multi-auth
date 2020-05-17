import React from 'react';
import {useStyles} from "../../style";
import {Card, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";

const RegisterView = () => {
    const classes = useStyles();

    const adminRegister = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <div className={classes.centerItem}>
                <Card>
                    <h2><b>Welcome to Admin Register Page</b></h2>
                    <form onSubmit={adminRegister}>
                        <div>
                            <TextField id="name"
                                       type="text"
                                       className={classes.fullWidth}
                                       required variant="outlined"
                                       margin="normal"
                                       label="Name">
                            </TextField>
                        </div>
                        <div>
                            <TextField id="email"
                                       type="email"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="Email">
                            </TextField>
                        </div>
                        <div>
                            <TextField id="password"
                                       type="password"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="password">
                            </TextField>
                        </div>
                        <div>
                            <TextField id="password_confirmation"
                                       type="password"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="Confirm Password">
                            </TextField>
                        </div>
                        <Button type="submit" className={classes.fullWidth} color="primary" variant="contained"
                                endIcon={<AccountCircle/>}><b>Register</b></Button>

                        <div className={classes.linkContainer}>
                            <Link to="/admin/login">Login Here</Link>
                            <br/>
                            <Link to="/home">Back To Home</Link>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default RegisterView;
