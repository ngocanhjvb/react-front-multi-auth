import {createPost} from "../../../services/User/PostService";

export const createPostAction = (item) =>{
    return (dispatch)=>{

        dispatch({type:'LOADING_CREATE_POST'});

        createPost(item).then((res)=>{

                if(res.hasOwnProperty('success') && res.success===true){

                    dispatch({type:'CREATE_POST_SUCCESS',res});

                }else if(res.hasOwnProperty('success') && res.success===false) {
                    dispatch({type:'CREATE_POST_FAILED',res})
                }
            }
        )
    }

}
