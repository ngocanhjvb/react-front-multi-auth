import HttpService from "../HttpService";

export const userRegisterService = (credential) => {
    const http = new HttpService();
    let url = 'user/register'
    return http.postData(url, 'user-token', credential).then((response) => {
        return response
    }).catch((error) => {
        return error
    })

}
