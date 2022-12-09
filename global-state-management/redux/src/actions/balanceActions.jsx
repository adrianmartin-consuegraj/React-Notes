// we create the local variable 'loading'
export  const loading = () => {
    return {
        type: "LOADING"
    }
}

export const deposit = () => {
   return {type:"DEPOSIT", payload:10}
}

export const depositAsync = () => {
    
    return dispatch => {
        dispatch(loading())
        setTimeout( () => {
            dispatch(deposit())
        }, 3000 )
        
    }
}