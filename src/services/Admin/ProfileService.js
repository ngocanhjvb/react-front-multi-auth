import HttpService from '../HttpService';



export const LoadAdminProfile = () =>{
    const http = new HttpService();
    let signUpUrl = "admin/view-profile";
    const tokenId = "admin-token";

    return http.getData(signUpUrl,tokenId).then(data=>{
        if(data.hasOwnProperty('status') && data.status === 401){
            localStorage.removeItem('admin-token')
            location.reload()
        }
        return data;
    }).catch((error)=> {
        console.log(error)
        return error;
         });
}



