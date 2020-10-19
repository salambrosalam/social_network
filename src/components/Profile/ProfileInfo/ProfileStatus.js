import React from "react";
import Loader from "../../Loader/Loader";

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //this.setState = асинхронный (как аякс запрос)
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        //this.setState = асинхронный (как аякс запрос)
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    statusOnChange = event => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
        console.log("Component DID update")
    }

    render() {
        return (
            <>{!this.state.editMode ?
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || "Nostatus"}</span>
                </div>
                :
                <div>
                    <input onChange={this.statusOnChange}  autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus;