let users=[
    {
        name:"Saptarshi",
        ID:2212072
    },
    {
        name:"Randa Sai Kumar",
        ID:2212001
    },
    {
        name:"Raj Kumar Roy",
        ID:2212002
    },
    {
        name:"Neelam Tharun Kumar",
        ID:2212003
    },
    {
        name:"Chilaka Vyshnavi",
        ID:2212004
    },
    {
        name:"Penmatsa Nikhita",
        ID:2212005
    }
]

export const createUser=(req,res)=>{
    const user=req.body;
    users.push(user);
    res.send(`User with the name ${user.name} added`);
}

export const getUsers=(req,res)=>{
    console.log(users);
    res.send(users);
}

export const getUser=(req,res)=>{
    const {id}=req.params;
    const foundUser= users.find((user)=>user.ID==id);
    res.send(foundUser);
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.ID!=id);
    res.send(`User with the id ${id} deleted from the database.`); 
}

export const updateUser=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    
    const userToBeUpdated=users.find((user)=>user.ID==id);
    if(name){
        userToBeUpdated.name=name;
    }
    res.send(`User with the id ${id} has been updated.`);
}