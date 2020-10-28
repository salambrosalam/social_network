import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4d4272e4-2669-4689-8c70-c6b40272a8a3"
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
    },
    savePhoto(file){
         let formData = new FormData();
         formData.append("image",file);

         return(
             instance.put(`profile/photo`, formData,{
                 headers: {
                     "Content-Type": "multipart/form-data"
                 }
             })
         )
    }
}



