import { Fragment, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const GroupsTab = () => {
    const [groups, setGroups] = useState();
    
    useEffect(() => {
        const getGroups = async () => {
            await axios.get(`/api/groups/`, {
                mode: 'no cors'
            })
            .then((resp) => setGroups(resp.data)); 
        }
        getGroups();
    }, [])

    return (
        <Fragment>
            {groups?.length > 0 ? groups?.map(({ id, media_location_url, written_text, created_date_time }) => (
                <Card key={id} style={{ color: 'white' }} className="bg-dark">
                    <Card.Img src={media_location_url}/>
                    <Card.Body>
                        <Card.Title>{written_text}</Card.Title>
                    </Card.Body>
                </Card>
            )) : 
            <Card style={{ color: 'white' }}className="bg-dark">
                <Card.Title>"Stay tuned. Currently no groups..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default GroupsTab;