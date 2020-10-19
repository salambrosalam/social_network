export const requiredField = (value) => {
    if(value) {
        return undefined;
    }

    return "field is required";
}

export const maxLength30 = value => {
    if(value && value.length > 30){
        return "Max length is 30"
    }
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength){
        return `Max length is ${maxLength}`
    }
    return undefined
}