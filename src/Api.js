import axios from "axios";

const baseUrl = "https://localhost:5001/api/Users/"

// export default{
//     User(url=baseUrl+'Users/'){
//         return{
//             fetchAll : () => axios.get(url),
//             fetchById : id => axios.get(url + id),
//             create : newRecord => axios.post(url, newRecord),
//             update : (id,updateRecord) => axios.put(url + id, updateRecord),
//             delete : id => axios.delete(url + id)
//         }
//     }
// }

export default function Create (newRecord){
    axios.post(baseUrl, newRecord)
}