var utilisateurs = [ {
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
  accepter : 1 //  0 si pas encore accepter 1 si accepter et 2 si banir 
} ,{
  id : 3,
  nom : "Aounallah",
  prénom : "Oumaima",
  nomutilisateur : "oumaima96",
  motdepasse : "123",
  role : "adhérent",
  accepter : 2
} ]

 var livres = [ {
  id : 1,
  libéllé : "cbfdfgg",
  auteur : "ffvfvf fvf",
  edition : "oumaima96",
  nb_exemplaire : 5,
  nb_page : 200,
  data_parution : "2000-03-26"
}, {
  id : 2,
  libéllé : "cbfdfgg",
  auteur : "ffvfvf fvf",
  edition : "fff",
  nb_exemplaire : 5,
  nb_page : 200,
  data_parution : "2000-03-26"
} ]

var emprunt = [ {
  id : 1,
  data_emprunt : "2000-03-26",
  data_retour : "2000-03-26",
  adhérent : {
    id : 2,
    nom : "Ben farhat",
    prénom : "Amani",
    nomutilisateur : "amani96",
    motdepasse : "1234",
    role : "adhérent",
    accepter : 2
  },
  livre : {
    id : 1,
    libéllé : "cbfdfgg",
    auteur : "ffvfvf fvf",
    edition : "fff",
    nb_exemplaire : 5,
    nb_page : 200,
    data_parution : "2000-03-26"
  }
} ]
