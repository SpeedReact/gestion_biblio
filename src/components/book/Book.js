import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Book.css"
import "antd/dist/antd.css";
import { Card } from 'antd';
import { EditOutlined, EyeOutlined  , DeleteOutlined,SaveOutlined,CloseOutlined} from '@ant-design/icons';


export default function Book({
  id,
  libéllé,
  auteur,
  edition,
  deleteBook,
  updateBook
}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [libélléToUpdate, setLibélléToUpdate] = useState(libéllé)
  const [auteurToUpdate, setAuteurToUpdate] = useState(auteur)
  const [editionToUpdate, setEditionToUpdate] = useState(edition)

  

  const handleUpdateBook = () => {
    console.log("update ")
       updateBook(id, libélléToUpdate, auteurToUpdate,editionToUpdate)
       setUpdateMode(false)
  }
  return (
    <div>
      {!updateMode ? (
          <Card
            cover={
            <img alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
            actions={[
              <DeleteOutlined onClick={() => deleteBook(id)}/>,
              <EditOutlined onClick={()=>setUpdateMode(true)} />,
              <EyeOutlined />,
              
            ]}
            >
              <p><strong>libéllé : </strong> {libéllé} </p>
              <p> <strong>Auteur : </strong> {auteur}</p>
              <p> <strong>Edition : </strong> {edition}</p>
          </Card>
        
      ) : (
        <div>
          <Card
            cover={
            <img alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
            actions={[
              <CloseOutlined onClick={()=>setUpdateMode(false)}/>,
              <SaveOutlined onClick={handleUpdateBook}/>,
              
              
            ]}
            >
        <p><strong>Libéllé : </strong> <input
            type="text"
            name="libéllé"
            value={libélléToUpdate}
            onChange={e => setLibélléToUpdate(e.target.value)}
          />
          </p>
          <p><strong>Auteur : </strong><input
            type="text"
            value={auteurToUpdate}
            name="auteur"
            onChange={e => setAuteurToUpdate(e.target.value)}
          />
          </p>

            <p><strong>Edition : </strong> <input
            type="text"
            value={editionToUpdate}
            name="edition"
            onChange={e => setEditionToUpdate(e.target.value)}
          />
          </p>
         
          </Card>
        </div>
      )}
    </div>
  )
}
Book.propTypes = {
  libéllé : PropTypes.string.isRequired,
  auteur : PropTypes.string.isRequired,
  edition  : PropTypes.string.isRequired,
  nb_exemplaire  : PropTypes.number,
  nb_page  : PropTypes.number,

}
