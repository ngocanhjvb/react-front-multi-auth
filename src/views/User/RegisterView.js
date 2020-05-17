import React, {useEffect} from 'react';
import {Card, TextField} from "@material-ui/core";
import {useFormFields} from "../../helpers/hookFormInput";
import {useStyles} from "../../style";
import Button from "@material-ui/core/Button";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUpAction} from "../../store/actions/Admin/authAction";
import {displayErrorMessages} from "../../helpers/displayErr";


const RegisterView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const authResponse = useSelector(state => state.userAuth.userAuthResponse)


    const clearValidate = () => {
        document.getElementById('authErr').innerHTML = ""
    }

    const userRegister = (e) => {
        e.preventDefault()
        clearValidate();
        dispatch(signUpAction(fields));
    }
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        name: "",
        password_confirmation: ""
    })

    const successMessage = (successMessage) => {
        return <div dangerouslySetInnerHTML=
                        {{__html: '<div class="alert alert-success add-padding">' + ' ' + successMessage + '</div>'}}
        />

    }

    return (
        <div>
            <div className={classes.centerItem}>
                <Card>
                    <h2><b>Welcome to User Register Page</b></h2>
                    <div id="authErr"></div>

                    <div id="authResponse">
                        {
                            /**
                             * if authResponse.success is true show success message
                             */
                            authResponse != "" && authResponse.success === true ?
                                successMessage(authResponse.message)
                                /**
                                 * else if authResponse.success == false show error messages
                                 */
                                :
                                authResponse.success === false ?
                                    displayErrorMessages(authResponse.error, document.getElementById('authErr'))
                                    : authResponse
                        }
                    </div>


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
                            <TextField id="password_confirmation"
                                       type="password"
                                       className={classes.fullWidth}
                                       required
                                       variant="outlined"
                                       margin="normal"
                                       label="Confirm Password"
                                       value={fields.password_confirmation}
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
