import React,{useState} from 'react';
import './Search.css';
import { Row, Col } from 'antd';




function Search() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
       <div className="search">
         <div className="search-box ">
         <Row justify="center">
         <Col span={20}>
         <input
            type="search"
            name="search"
            placeholder="Search ..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
         </Col>
         <Col span={2}>
          <button>
            <img src={process.env.PUBLIC_URL + '/imgs/search.png'} alt="search"/>
          </button>
          </Col>
          </Row>
         </div>
        </div>

    
    </>
  );
}

export default Search;