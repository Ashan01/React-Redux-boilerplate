const setData =()=>{
    return (dispatch)=>{
        dispatch({type:"SETDATA", user:{name: 'umair', email: 'umair@gmail.com'}})
    }
}

export {
    setData
}