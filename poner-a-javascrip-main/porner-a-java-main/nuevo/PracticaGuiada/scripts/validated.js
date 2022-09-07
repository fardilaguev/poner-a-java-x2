
const validatedString = (cad) =>{
    //Ternario
    let response = (cad.length > 3) ? true : false;
    return response;
}

const validatedAverage = (value) =>{
    let result = (value >=0 && value <=5) ? true : false;
    return result;
}

export { validatedString, validatedAverage};