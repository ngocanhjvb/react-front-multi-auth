import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useFormFields} from "../helpers/hookFormInput";


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const HomeView = () => {
    // const [fields, handleFieldChange] = useFormFields({
    //     email: "",
    //     password: ""
    // });


    const [fields, handleFieldChange] = useState({email: '', password: ''});

    console.log(handleFieldChange)

    const classes = useStyles();
    return (
        <div>
            <Button variant="contained">
                Primary
            </Button>


            <form>
                <input name="email" onChange={handleFieldChange}/>
                <input name="password" onChange={handleFieldChange}/>
            </form>


        </div>
    );
};

export default HomeView;
