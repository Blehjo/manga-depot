import { Fragment, useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";

const EditPost = ({props}) => {
    const id = props;
    const [show, setShow] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalValues, setModalValues] = useState({});
    const [modalText, setModalText] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleTextChange(event) {
        event.preventDefault();
        setModalText(event.target.value);
    }

    function handleImageChange(event) {
        event.preventDefault();
        setModalImage(event.target.value);
    }

    function makeEdit(event) {
        event.preventDefault();

        function handleClickEvent() {
            navigate(`/profile`);
        }  

        async function editPost() {
            try {
                await axios.put(`https://shellgeistapi.herokuapp.com/api/posts/${id}`, {
                    media_location_url: modalImage,
                    written_text: modalText,
                })
                .then((response) => console.log(response.data))
            } catch(err) {
                setErrorMessage(err);
                console.error(errorMessage);
            }
        }

        editPost();
        handleClickEvent();
    }

    useEffect(() => {
        async function getPost() {
            try {
                await axios.get(`/posts/${id}`, {
                    mode: 'no-cors'
                })
                .then((response) => setModalValues(response.data[0]));
            } catch (err) {
                setErrorMessage(err);
                console.error(errorMessage);
            }
        }
        
        getPost();
        setModalImage(modalValues.media_location_url);
        setModalText(modalValues.written_text);
    }, [])

    return (
        <Fragment >
        <Modal.Header className="bg-dark" style={{ color: 'white' }} closeButton>
            <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Form className="bg-dark" style={{ color: 'white' }} onSubmit={makeEdit}>
            <Modal.Body>
                <Form.Group
                className="mb-3"
                controlId="ControlTextarea"
                >
                <Form.Label>Post</Form.Label>
                <Form.Control value={modalText} onChange={handleTextChange} as="textarea" rows={3} />
                <Form.Label>Image Link</Form.Label>
                <Form.Control value={modalImage} onChange={handleImageChange} type="text" rows={3} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="light" type="submit">
                    Edit
                </Button>
            </Modal.Footer>
        </Form>
    </Fragment>
    );
}

export default EditPost;