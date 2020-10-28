import React from "react";
import hacker from "../../media/hacker.jpg"
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

let Users = (props) => {

    return (
        <div>
           <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
           pageSize={props.pageSize} onPageChanged={props.onPageChanged} pagePortionSize={props.pagePortionSize} />
            {
                props.users.map((user) => {
                    return (
                        <NavLink className={classes.userName} to={`/profile/${user.id}`}>
                        <div className={classes.userCard} key={user.id}>
                            <span>
                                <div>
                                        <img src={user.photos.small != null ? user.photos.small : hacker}
                                             className={classes.userIcon}/>
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
                                    <div >{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                            </span>
                        </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )

}

export default Users;
