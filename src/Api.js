import axios from "axios";

const baseUrl = "https://localhost:5001/api/CreateUser"

export function CreateUser (newRecord){
    console.log(newRecord);
    axios.post(baseUrl, newRecord)
}

export async function GetUsers (){
    console.log("lala1")
    return await axios.get('https://localhost:5001/api/GetUsers')
}

export async function Authenticate(User){
    
    let resp = await axios.post("https://localhost:5001/api/Authenticate", User)
    localStorage.setItem('accessToken', resp.data.token);
    localStorage.setItem('refreshToken',resp.data.refreshToken);
    console.log(resp.data.token)

    // .then(function(response){
    //     localStorage.setItem('Token', response.data.token);
    // })

    // console.log(localStorage.getItem('Token'))
}