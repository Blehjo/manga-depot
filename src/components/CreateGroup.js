import { Fragment, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";

const CreateGroup = () => {
    const [show, setShow] = useState(false);
    const [modalName, setModalName] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [modalCountry, setModalCountry] = useState('');
    const [modalPlatform, setModalPlatform] = useState('');
    const [id, setId] = useState();
    const [errorMessage, setErrorMessage] = useState([]);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleNameChange(event) {
        event.preventDefault();
        setModalName(event.target.value);
    }

    function handleDescriptionChange(event) {
        event.preventDefault();
        setModalDescription(event.target.value);
    }

    function handleImageChange(event) {
        event.preventDefault();
        setModalImage(event.target.value);
    }

    function handleCountryChange(event) {
        event.preventDefault();
        setModalCountry(event.target.value);
    }

    function handlePlatformChange(event) {
        event.preventDefault();
        setModalPlatform(event.target.value);
    }

    function handleClickEvent(event) {
        event.preventDefault();
        navigate(`/profile`);
    }    

    function createGroup(event) {
        event.preventDefault();

        async function postGroup() {
            await axios.post('/api/groups/', {
                group_name: modalName,
                media_location_url: modalImage,
                group_description: modalDescription,
                country: modalCountry,
                platform: modalPlatform
            })
            .then((response) => {
                setId(response.data)
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
            console.log(id)
        }

        async function joinGroup() {
            await axios.post(`/api/groupmembers/`, {
                group_id: id.data.id
            })
            .catch(err => {
                setErrorMessage(err);
                console.error(errorMessage);
            });
        }

        postGroup();
        joinGroup();
        handleClickEvent();
    }

    return (
        <Fragment>
            <Modal.Header className="bg-dark" style={{ color: 'white' }} closeButton>
                <Modal.Title>Create a Shell</Modal.Title>
            </Modal.Header>
            <Form className="bg-dark" style={{ color: 'white' }} onSubmit={createGroup}>
                <Modal.Body>
                    <Form.Group
                    className="mb-3"
                    controlId="ControlTextarea"
                    >
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control value={modalName} onChange={handleNameChange} type="text" rows={3} />
                    <Form.Label>Group description</Form.Label>
                    <Form.Control value={modalDescription} onChange={handleDescriptionChange} as="textarea" rows={3} />
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control value={modalImage} onChange={handleImageChange} type="text" rows={3} />
                    <Form.Label>Country</Form.Label>
                    <Form.Control value={modalCountry} onChange={handleCountryChange} type="text" rows={3} />
                    <Form.Label>Platforms</Form.Label>
                    <Form.Control value={modalPlatform} onChange={handlePlatformChange} type="text" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="light" type="submit">
                        Create
                    </Button>
                </Modal.Footer>
            </Form>
        </Fragment>
    );
}

export default CreateGroup;