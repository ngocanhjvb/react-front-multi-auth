class HttpService {
    baseUrl = "http://localhost:8000";


    getData = async (url, tokenId="") => {
        const token = await localStorage.getItem(tokenId);
        const requestOption = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token

            },
        }
        let response = await fetch(this.baseUrl + '/' + url, requestOption);
        return response.json()
    }

    postData = async (url, tokenId="", data) => {
        const token = await localStorage.getItem(tokenId);
        const requestOption = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token

            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }
        let response = await fetch(this.baseUrl + '/' + url, requestOption);
        return response.json()
    }

}


export default HttpService;
