import axios from "axios";


export const RequestsAPI = {

    sendCheckBoxStatus (check:boolean) {
       return  axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success:check})
    }

}

