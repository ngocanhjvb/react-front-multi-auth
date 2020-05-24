import React from 'react';
import {useStyles} from "../../../styles";
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {createPostAction} from "../../../store/actions/User/CreatePostAction";

const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const postResponse = useSelector(state => state.postResponse.postResponse);
    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
        },
        validationSchema: Yup.object().shape({ // Validate form field
            title: Yup.string()
                .max(10, 'Title have max 10 characters'),
        }),
        onSubmit: (values) => {
            dispatch(createPostAction(values))
        },
    });
    return (
        <Grid className={classes.fullWidth} container justify='center' alignContent='center'>
            <Grid item xs={6} md={4}>
                <Paper elevation={4} style={{padding: '20px 15px', marginTop: '30px'}}>
                    <Typography gutterBottom>
                        Create User Post
                    </Typography>
                    {postResponse.hasOwnProperty('success') && postResponse.success === true && <FormHelperText style={{color:"green", fontSize:"18px"}}>{postResponse.message}</FormHelperText>}
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl fullWidth margin='normal' error={formik.touched.title && !!formik.errors.title}>
                            <InputLabel>Title Posts</InputLabel>
                            <Input
                                fullWidth
                                type="text"
                                id="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.title && <FormHelperText>{formik.errors.title}</FormHelperText>}
                            {postResponse.hasOwnProperty('error') && postResponse.error.hasOwnProperty('title') &&  <FormHelperText style={{color:"red", fontSize:"18px"}}>{postResponse.error.title[0]}</FormHelperText>}
                        </FormControl>

                        <FormControl fullWidth margin='normal'
                                     error={formik.touched.content && !!formik.errors.content}>
                            <InputLabel>Content</InputLabel>
                            <Input
                                fullWidth
                                type="text"
                                id="content"
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.content && <FormHelperText>{formik.errors.content}</FormHelperText>}
                            {postResponse.hasOwnProperty('error') && postResponse.error.hasOwnProperty('content') &&  <FormHelperText style={{color:"red", fontSize:"18px"}}>{postResponse.error.content[0]}</FormHelperText>}
                        </FormControl>
                        <div>
                            <Button type="submit" className={classes.fullWidth}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<AccountCircleIcon/>}
                            >
                                <b>Create</b>
                            </Button><br/>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Posts
