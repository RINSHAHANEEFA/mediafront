import React from 'react'
import { Check, PlusCircle, Youtube } from 'react-feather'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addVideo } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ handleRespnse }) {



    const [uploaddata, setuploaddata] = useState({
        id: "",
        caption: "",
        thumbnail: "",
        url: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function call

    const setInput = (e) => {
        const { name, value } = e.target
        // data is given as key value pair, key in []
        // spread operator used to - in an state we enter a data only in a field and other fields need to show empty 
        setuploaddata({ ...uploaddata, [name]: value })
        // setuploaddata(e.target.value)

    }
    console.log(uploaddata);

    // extract embedded url from Youtube original url

    const extractUrl = (e) => {
        let youtubeUrl = e.target.value
        // incudes is predefined funtion used to check whether or not .includes("")
        // Check youtubeurl includes v=
        if (youtubeUrl.includes("v=")) {
            // youtubeUrl is assigned in index variable        
            let index = youtubeUrl.indexOf("v=")

            console.log(index);

            let videoUrl = youtubeUrl.substring(index + 2, index + 13)

            console.log(videoUrl);

            // change the portion of url from above state

            let videodata = uploaddata

            videodata.url = `https://www.youtube.com/embed/${videoUrl}`

            setuploaddata(videodata)

            console.log(uploaddata);
        }
    }


    // function handleadd

    const handleadd = async () => {
        // destructure the state
        const { id, caption, thumbnail, url } = uploaddata

        if (!id || !caption || !thumbnail || !url) {
            toast.error("Please fill the form completely")
        }
        else {
            const response = await addVideo(uploaddata)


            if (response.status >= 200 && response.status < 300) {

                handleRespnse(response.data)
                // console.log(response.data);
                setShow(false);
                // toast emitter
                toast.success('new video uploaded successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else {
                toast.warning('provide a unique id!!!')
            }

        }
    }

    // original url
    // https://www.youtube.com/watch?v=_tTqDraIzzY

    // embedded url
    // src="https://www.youtube.com/embed/_tTqDraIzzY"

    return (
        <>
            <div className='btn' onClick={handleShow}>
                <PlusCircle color='orangered' size={90} />
            </div>

            {/* Modal */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* video id */}

                        <FloatingLabel className='mb-3' controlId="floatingid" label="id">
                            <Form.Control onChange={setInput} name='id' type="text" placeholder="Uploading video id" />
                        </FloatingLabel>

                        {/* Video caption */}

                        <FloatingLabel className='mb-3' controlId="floatingcaption" label="Uploading video caption">
                            <Form.Control onChange={setInput} name='caption' type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        {/* uploading video cover image url */}

                        <FloatingLabel className='mb-3' controlId="floatingimage" label="Uploading video cover image url">
                            <Form.Control onChange={setInput} name='thumbnail' type="text" placeholder="Video Image" />
                        </FloatingLabel>

                        {/*uploading video Link */}

                        <FloatingLabel className='mb-3' controlId="floatinglink" label="Uploading video link">
                            <Form.Control onChange={extractUrl} name='url' type="text" placeholder="Video Link" />
                        </FloatingLabel>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleadd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>


            {/* Toast selector */}

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </>
    )
}

export default Add