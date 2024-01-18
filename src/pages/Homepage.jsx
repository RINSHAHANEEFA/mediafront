import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Category from './Category'
import Add from './Add'
import View from './View'
import { Link } from 'react-router-dom'


function Homepage() {

  // useState to share data between sibling Add and view

  const [serverResponse,setserverResponse]=useState({})
  const handleRespnse=(res)=>{
    setserverResponse(res)
  }

  return (
    <>
      <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>

      <Link to={'/watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"blue"}}>Watch History</Link>

      <div className='container-fluid'>

        <Row>
          {/* Add component selector */}
          <Col lg={1}>

            <Add handleRespnse={handleRespnse}/>

          </Col>

          {/* View component selector */}

          <Col lg={7}>

            <View serverResponse={serverResponse}/>

          </Col>

          {/* Category component selector */}

          <Col lg={4}>
            <Category/>
          </Col>

        </Row>
      </div>

    
    </>
  )
}

export default Homepage