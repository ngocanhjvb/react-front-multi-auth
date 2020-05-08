import React from 'react';
import {Card, TextField} from "@material-ui/core";
import {useFormFields} from "../../helpers/hookFormInput";
import {useStyles} from "../../style";
import Button from "@material-ui/core/Button";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";


const RegisterView = () => {
    const classes = useStyles();

    const userRegister = (e) => {
        e.preventDefault()
    }
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        name: "",
        confirm: ""
    })

    return (
        <div>
            <div className={classes.centerItem}>
                <Card>
                    <h2><b>Welcome to User Register Page</b></h2>
                    <form onSubmit={userRegister}>
                        <div>
                            <TextField
                                id="name"
                                type="text"
                                className={classes.fullWidth}
                                required variant="outlined"
                                margin="normal"
                                label="name"
                                value={fields.name}
                                onChange={handleFieldChange}
                            >
                            </TextField>
                        </div>
                        <div>
                            <TextField id="email"
                                       type="email"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="Email"
                                       value={fields.email}
                                       onChange={handleFieldChange}>
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
                                       value={fields.password}
                                       onChange={handleFieldChange}>
                            </TextField>
                        </div>
                        <div>
                            <TextField id="confirm"
                                       type="password"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="Confirm Password"
                                       value={fields.confirm}
                                       onChange={handleFieldChange}>
                            </TextField>
                        </div>
                        <Button type="submit" className={classes.fullWidth} color="primary" variant="contained"
                                endIcon={<AccountCircle/>}><b>Register</b></Button>

                        <div className={classes.linkContainer}>
                            <Link to="/user/login">Login Here</Link>
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
