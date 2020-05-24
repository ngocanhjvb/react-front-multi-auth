import HttpService from '../HttpService';


export const createPost = (item) =>{
    const http = new HttpService();
    let signUpUrl = "user/create-post";
    const tokenId = "user-token";
    try{
        return http.postData(item,signUpUrl,tokenId).then(data=>{
            if(data.hasOwnProperty('status') && data.status === 401){
                localStorage.removeItem('user-token')
                location.reload()
            }
            return data;
        })
    }catch (e) {
        console.log(e)
    }

}
