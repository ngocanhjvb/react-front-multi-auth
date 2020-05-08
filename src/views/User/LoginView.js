import React from 'react';
import {Card, TextField} from "@material-ui/core";
import {useStyles} from "../../style";
import Button from "@material-ui/core/Button";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useFormFields} from "../../helpers/hookFormInput";


const LoginView = () => {
    const classes = useStyles();

    const userLogin = (e) => {
        e.preventDefault()

    }

    const [field, handleFieldChange] = useFormFields({
        email: "",
        password: "",
    })
    return (<div>
            <div className={classes.centerItem}>
                <Card>
                    <h2><b>Welcome to User Login Page</b></h2>
                    <form onSubmit={userLogin}>
                        <div>
                            <TextField
                                id="email"
                                type="email"
                                className={classes.fullWidth}
                                required
                                variant="outlined"
                                margin="normal"
                                label="Email"
                                value={field.email}
                                onChange={handleFieldChange}
                            >
                            </TextField>
                        </div>
                        <div>
                            <TextField id="password"
                                       type="password"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="password"
                                       value={field.password}
                                       onChange={handleFieldChange}
                            >
                            </TextField>
                        </div>
                        <Button type="submit" className={classes.fullWidth} color="primary" variant="contained"
                                endIcon={<AccountCircle/>}><b>Login</b></Button>

                        <div className={classes.linkContainer}>
                            <Link to="/user/register">Register Here</Link>
                            <br/>
                            <Link to="/home">Back To Home</Link>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default LoginView;
