import React from "react"
import PropTypes from "prop-types"
import "./User.css"
import "antd/dist/antd.css";
import { Card, Popover,  } from 'antd';
import { EyeOutlined ,CheckOutlined,StopOutlined} from '@ant-design/icons';
import { Link /*, Redirect*/, useRouteMatch } from "react-router-dom"

export default function User({
  id,
  nom,
  prénom,
  nomutilisateur,
  motdepasse,
  etat,
  updateUser
}) {

  var style="attente";
  let { path } = useRouteMatch()

  const UpdateStyle = (etat) => {
    if(etat===1){
      style="accepter";
    }
    else if (etat===2){
      style="banir"
    }
 

}

  const contentAccepter = (
      <p>Accepter adhérent</p>
  );
  const contentBanir = (
    <p>Banir adhérent</p>
  );

  const contentAfficher = (
    <p>Afficher les emprunts</p>
  );


  return (
    <div>
         
          <Card onLoad={UpdateStyle(etat)} className={style}
            hoverable
            actions={[
              <Popover content={contentAccepter}>
                <CheckOutlined onClick={()=>updateUser(id,1)}/>
              </Popover>,
              <Popover content={contentBanir} onClick={()=>updateUser(id,2)} >
                <StopOutlined />
              </Popover>,
              <Popover content={contentAfficher}>
                 <Link to={`${path}/${id}`}>
                  <EyeOutlined />
                </Link>
               
              </Popover>,
               
            ]}
            >
              <p><strong>Nom : </strong> {nom} </p>
              <p> <strong>Prénom : </strong> {prénom}</p>
              <p> <strong>Nom utilisateur : </strong> {nomutilisateur}</p>
              <p> <strong>Mot de passe : </strong> {motdepasse}</p>
              
          </Card>
        
     
    </div>
  )
}
User.propTypes = {
  nom : PropTypes.string.isRequired,
  prénom : PropTypes.string.isRequired,
  nomutilisateur  : PropTypes.string.isRequired,
  motdepasse  : PropTypes.string.isRequired,

}
