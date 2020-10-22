import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c1a148a8-8982-4ec3-b707-9e291c9b5bbf"
    }
});

//GET,DELETE => Запросы без нагрузки(without payload), тоесть они не чего не передают на сервер (без body)
//POST,PUT => Запросы с нагрузкой(with payload), передают на сервер какой-то body

export const usersAPI = {
     getUsers(currentPage = 2,pageSize = 10){
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
        )
    },
    followUsers(userId){
        return (
            instance.post(`follow/${userId}`,{}
            )
        )
    },
    UNfollowUsers(userId){
        return (
            instance.delete(`follow/${userId}`
            )
        )
    },
    authoriseMe(){
         return(
             instance.get(`auth/me`)
         )
    },
    getProfile(userId){
         return(
             axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         )
    },
    getStatus(userId){
         return(
             instance.get(`/profile/status/${userId}`)
         )
    },
    updateStatus(status){
         return(
             instance.put(`profile/status/`, {status: status})
         )
    },
    login(email,password,rememberMe = false){
         return(
             instance.post(`auth/login`, {email,password,rememberMe})
         )
    },
    logout(){
         return(
             instance.delete(`auth/login`)
         )
    }
}



