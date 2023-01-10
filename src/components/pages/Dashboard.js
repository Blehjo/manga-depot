import { Row, Col, Card } from "react-bootstrap";

const contentArray = [
    {
        type: "Groups",
        media_location_url: "https://otakuusamagazine.com/wp-content/uploads/2020/06/gits01.jpg",
        id: 1
    },
    {
        type: "Events",
        media_location_url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/07/Watch-Dogs-Legion-4-2-scaled.jpg",
        id: 2
    },
    {
        type: "Profiles",
        media_location_url: "https://i0.wp.com/learning2grow.org/wp-content/uploads/2020/10/neuromancer-gibson-web.jpg?resize=1000%2C600&ssl=1",
        id: 3
    },
    {
        type: "Posts",
        media_location_url: "https://www.digitalturbine.com/wp-content/uploads/2022/07/HardcoreGamers-Blog-Header.webp",
        id: 4
    },
    {
        type: "Games",
        media_location_url: "https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/oyun/PSTER-oyun04-bioschock-infinite-1000x1000.jpg",
        id: 5
    },
    {
        type: "News",
        media_location_url: "https://d.newsweek.com/en/full/1944794/game-awards-2021-logo.jpg",
        id: 6
    }
]

const Dashboard = () => {
    return (
        <Row xs={1} md={2} key="groups">
            <Col xs={12} md={12}>
                <h1 style={{ color: 'white' }}>Dashboard</h1>
            </Col>
            {contentArray?.map(({ id, media_location_url, type }) => (
                <Col style={{ marginBottom: '1.5rem' }} key={id}>
                    <Card.Link href={`/${type}`}>
                    <Card 
                        style={{ color: 'white' }} 
                        className="bg-dark" 
                        key={id}
                    >
                        <Card.Img  style={{ position: 'relative', borderRadius: ".5rem", width: "100%", height: "25rem", objectFit: "cover" }} src={media_location_url} alt={type}/>
                        <Card.ImgOverlay >
                        <div style={{ position: 'absolute', left: '50%', top: '50%',  borderRadius: '.5rem', transform: 'translate(-50%, -50%)' }} className="text-white">
                            <Card.Title style={{ fontSize: '500%' }}>{type}</Card.Title>
                        </div>
                        </Card.ImgOverlay>
                    </Card>
                    </Card.Link>
                </Col>
            ))}
        </Row>
    )
}

export default Dashboard;