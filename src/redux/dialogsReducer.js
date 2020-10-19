export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Roman"},
        {id: 2, name: "Daniel"},
        {id: 3, name: "Max"}],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "When will u connect Mongo Homie???)))"},
        {id: 3, message: "AHAHAHAHhHH"}],
}

const dialogsReducer = (state = initialState,action) => {



    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }

        default: return state;
    }
}

export let sendMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;