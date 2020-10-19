import React from "react";
import hacker from "../../media/hacker.jpg"
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {


    let pagesCount =Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((page => {
                    return (
                        <span className={(props.currentPage === page) ? classes.selectedPage : classes.page}
                              onClick={(e) => props.onPageChanged(page)}>{page}</span>
                    )
                }))}

            </div>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={user.photos.small != null ? user.photos.small : hacker}
                                             className={classes.userIcon}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ?
                                        <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                            props.unfollowUsers(user.id);
                                            }}>UNFollow</button>
                                        : <button disabled={props.followingProgress.some(id => id === user.id)  } onClick={() => {
                                            props.followUsers(user.id);
                                        }}>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{'user.location.city'}</div>
                                    <div>{'user.location.country'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Users;