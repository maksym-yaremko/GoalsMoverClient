import axios from "axios";

const baseUrl = "https://localhost:5001/api/CreateUser"

export async function CreateUser (newRecord){
    await axios.post(baseUrl, newRecord)
}

export async function GetUsers (){
    console.log("lala1")
    return await axios.get('https://localhost:5001/api/GetUsers')
}

export async function Authenticate(User){
    
    let response = await axios.post("https://localhost:5001/api/Authenticate", User)
    localStorage.setItem('accessToken', response.data.token);
    localStorage.setItem('refreshToken',response.data.refreshToken);
    console.log(response.data.token)
}

export async function RefreshToken(Tokens){
    let response = await axios.post("https://localhost:5001/api/RefreshToken", Tokens).catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
        }
      });
    localStorage.setItem('accessToken', response.data.token);
    localStorage.setItem('refreshToken',response.data.refreshToken);
    console.log(response.data.token)
}