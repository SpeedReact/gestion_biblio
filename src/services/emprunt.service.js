var emprunts = [ {
  id : 1,
  date_emprunt : "2020-06-10",
  date_retour : "",
  user : {
    id : 5,
    nom : "Ben farhat",
    prénom : "Amani",
    nomutilisateur : "amani96",
    motdepasse : "1234",
    role : "adhérent",
    etat : 2
  },
  book : {
    id : 1,
    libéllé : "cbfdfgg",
    auteur : "ffvfvf fvf",
    edition : "fff",
    nb_exemplaire : 5,
    nb_page : 200,
    date_parution : "2000-03-26"
  }
} , {
  id : 1,
date_emprunt : "2000-12-20",
date_retour : "2000-12-26",
user : {
  id : 5,
  nom : "Ben farhat",
  prénom : "Amani",
  nomutilisateur : "amani96",
  motdepasse : "1234",
  role : "adhérent",
  etat : 2
},
book : {
  id : 1,
  libéllé : "cbfdfgg",
  auteur : "ffvfvf fvf",
  edition : "fff",
  nb_exemplaire : 5,
  nb_page : 200,
  date_parution : "2000-03-26"
}
}]

  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }


  export const fetchEmpruntsById=async(userId)=>{
    await delay(500)
    return  emprunts.filter(emprunt => emprunt.user.id ===userId)  
    
  }


  export const fetchEmpruntsEnCours=async()=>{
    await delay(500)
    return  emprunts.filter(emprunt => emprunt.date_retour==="")  
    
  }

  export const fetchEmpruntsEnRetard=async()=>{
    await delay(500)
    return  emprunts.filter(emprunt => emprunt.date_retour>emprunt.date_emprunt+15)  
    
  }
   
    
    