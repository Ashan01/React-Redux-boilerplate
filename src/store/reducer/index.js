let Initial_State = {
 user:[
       {
           name: 'Ashan',
           email: 'ashanjameel@gmail.com'
    }
   ]
}
 
export default (state = Initial_State,action)=>{
    console.log('action==>',action)
    switch (action.type) {
        case 'SETDATA':
            return({
                ...state,
                user: [...state.user,action.user]
            })
        default:
            return state
    }
    
}