import HttpService from '../HttpService';


export const LoadUserProfile = () =>{
    const http = new HttpService();
    let signUpUrl = "user/view-profile";
    const tokenId = "user-token";
    try{
        return http.getData(signUpUrl,tokenId).then(data=>{
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


