import { Card } from "react-bootstrap";

const { Fragment } = require("react");

const PostsTab = ({ profileData }) => {
    console.log(profileData);

    // const userposts = profileData.userposts;
    return (
        <Fragment>
            {profileData.userposts ? profileData.userposts?.map((post) => (
                <Card>
                    <Card.Img src={post.media_location_url}/>
                    <Card.Body>
                        <Card.Title>{post.written_text}</Card.Title>
                    </Card.Body>
                </Card>
            )) : 
            <Card>
                <Card.Title>"Stay tuned. Currently no posts..."</Card.Title>
            </Card>
            }
        </Fragment>
    );
}

export default PostsTab;