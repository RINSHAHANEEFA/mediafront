import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Landingpage() {

  // function definition for handleNavigate

  // to redirect 1 page to another page we can useNavigate()

  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')

  }
  return (
    <>

      <Row>

        <Col></Col>
        <Col lg={6}>
          <h1>WELCOME Videooo.com</h1>
          <p style={{textAlign:'justify'}}>Where user can use their favourate video. User can upload any youtube videos by copying and paste their url in to Video.com It will allow to add nd remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now !</p>

          <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>

        </Col>

        <Col lg={5}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVxjYZgfWnutIcdxcdJKS_dLgRdPC09BRCg&usqp=CAU" alt="" width={370} className='img-fluid'/>
        </Col>
        
      </Row>
    </>
  )
}

export default Landingpage