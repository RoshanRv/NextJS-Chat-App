const getOtherUser = (users,currUser)=>{
    return users?.filter(user=> user!= currUser.email)[0]
}

export default getOtherUser