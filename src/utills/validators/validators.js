export const required = (value) => {
    if(value) return undefined;
    
    return "Field is required!";
}

export const maxLengthCreator = (maxValue) => (value) => {
    if(value.length > maxValue) {
        return `Max length is ${maxValue} symbols!`;
    }
    return undefined;
}