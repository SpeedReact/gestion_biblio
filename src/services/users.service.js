var users = [ {
  id : 1,
  nom : "Admin",
  prénom : "Admin",
  nomutilisateur : "admin",
  motdepasse : "123",
  role : "admin"
}, {
  id : 2,
  nom : "Ben farhat",
  prénom : "Amani",
  nomutilisateur : "amani96",
  motdepasse : "1234",
  role : "adhérent",
  etat : 1 //  0 si pas encore ,etat 1 si accepter et 2 si banir 
} ,{
  id : 3,
  nom : "Aounallah",
  prénom : "Oumaima",
  nomutilisateur : "oumaima96",
  motdepasse : "123",
  role : "adhérent",
  etat : 0
} ,{
  id : 4,
  nom : "Aounallah",
  prénom : "jihen",
  nomutilisateur : "jihen93",
  motdepasse : "123",
  role : "adhérent",
  etat : 2
} ,{
  id : 5,
  nom : "Aounallah",
  prénom : "souhaila",
  nomutilisateur : "souhaila12345",
  motdepasse : "123",
  role : "adhérent",
  etat : 0
} ]

 
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  export const fetchUsers = async () => {
    await delay(500)
   
    return  users.filter(user => user.role==="adhérent")
  }

  export const fetchUserById=async(userId)=>{
    await delay(500)
    return users.find(user => user.id===userId)
  }

