import { Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideo } from '../service/allapi'


function View(serverResponse ) {

  

  //  create a state to store api

  const [allVideos, setallVideos] = useState([])

  const [deleteStatus, setdeleteStatus] = useState(false)
  // create a function view all videos automatically
  useEffect(() => {

    // call the function getallvideo
    getallVideos()

    // when we want to call useEffect hook then it will load   
  }, [serverResponse,deleteStatus])

  const getallVideos = async () => {
    const response = await getVideo()
    // console.log(response.data);
    setallVideos(response.data)

  }
  console.log(allVideos);

  // useeffect hook

  const handledeletaStatus = (res) => {
    setdeleteStatus(res)
  }


  return (
    <>
      <div className='border p-2 rounded m-3'>

        <Row>


          {

            allVideos?.map(video => (
              <Col className='p-3 mb-3' sm={12} md={6}>

                <Videocard card={video} handledeletaStatus={handledeletaStatus} />

              </Col>
            ))


          }

        </Row>
      </div>
    </>
  )
}

export default View