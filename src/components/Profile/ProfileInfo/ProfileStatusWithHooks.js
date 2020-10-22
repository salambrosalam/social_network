import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    //useState - возвращает массив в котором первый элемент это то с чем мы работаем, а второй функция позволяющая менять этот обьект
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = event => {
        setStatus(event.currentTarget.value);
    }

        return (
            <>{!editMode ?
                <div>
                    <span onClick={activateMode}>{props.status || "Nostatus"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deActivateMode}/>
                </div>
            }
            </>
        )
}

export default ProfileStatusWithHooks;