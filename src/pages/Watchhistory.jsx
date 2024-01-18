import React, { useEffect } from 'react'
import { getHistory } from '../service/allapi'
import { useState } from 'react'

function Watchhistory() {

    const [history,sethistory]=useState([])

    useEffect(() => {

        getwatchistory()
      
    }, [])
    

    const getwatchistory=async()=>{

        const{data}= await getHistory()
        sethistory(data)
        
    }
    console.log(history);

  return (
    <>
      <h5>Watchhistory</h5>
      <table className='table-shadow m-3 rounded border'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
                <th>DATE</th>
            </tr>
        </thead>

        <tbody>
            {
                history?.map((item,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item?.categoryName}</td>
                      <td>{item?.url}</td>
                      <td>{item?.date}</td>
                    </tr>
                ))
            }
            
        </tbody>
      </table>
    </>
    
  )
}

export default Watchhistory