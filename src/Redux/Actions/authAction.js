export const login =(user)=>{
    return{
        type:'login',
        payload:user,
    }
}

export const logout =()=>{
    return{
        type:'logout',
        
    }
}
export const  signup=(newUser)=>{
    return{
        type:'signup',
        payload:newUser
    }
}