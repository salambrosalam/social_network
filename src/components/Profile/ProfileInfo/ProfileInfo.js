import React from "react";
import Loader from "../../Loader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    let contactsArray = [
         props.profile.contacts.facebook,
        props.profile.contacts.website,
        props.profile.contacts.vk,
        props.profile.contacts.twitter,
        props.profile.contacts.instagram,
        props.profile.contacts.youtube
    ]

   let contacts = contactsArray.map((item) => {
       return(
           <li>{item !== null ? item : null}</li>
       )
   })

    return (
    <div>
        <div>
            <img src={props.profile.photos.large}/>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <div>
            <div>About me: {props.profile.aboutMe}</div>
        </div>
        <div>
            <div>Job description: {props.profile.lookingForAJobDescription}</div>
        </div>
        <div>
            <ul>Contacts:
                {contacts}
            </ul>
        </div>
    </div>
    )
}

export default ProfileInfo;