import React from "react";
import Loader from "../../Loader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import hacker from "./../../../media/hacker.jpg"
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
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
        return (
            <li>{item !== null ? item : null}</li>
        )
    })

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.gridContainer}>
            <div className={classes.profileHeader}>
                <img className={classes.avatar} src={props.profile.photos.large || hacker}/>
                {props.isOwner ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
                <div className={classes.fullName}>{props.profile.fullName}</div>
            </div>
            <div className={classes.mainInfo}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={classes.info}>
                    <div>About me: {props.profile.aboutMe}</div>
                </div>
                <div className={classes.info}>
                    <div>Job description: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                </div>

                {/*<div>*/}
                {/*    <div>My skills: {props.profile.lookingForAJobDescription}</div>*/}
                {/*</div>*/}
                <div className={classes.skills}>
                    <ul><span className={classes.bold}>Contacts:</span>
                        {Object.keys(props.profile.contacts).map(key => {
                            return (
                                <Contact contactTitle={key} contactValue={props.profile.contacts[key] || " --- "}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Contact = (props) => {
    return (
        <div>
            {props.contactTitle}: {props.contactValue}
        </div>
    )
}

export default ProfileInfo;
