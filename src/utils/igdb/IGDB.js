import { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faCommentAlt, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { setItemsToResult } from '../../store/result/result.action';
import { selectResultItems } from '../../store/result/result.selector';
import { unixConverter } from "../../utils/date/Date";

import 'react-multi-carousel/lib/styles.css';

export const gameData = async (value) => {
  await axios({
    url: process.env.REACT_APP_URL,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_X_API_KEY,
    },
    data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; search "${value}";`
  })
  .then((response) => response.data);
};

export const getGames = async () => {
  await axios({
    url: process.env.REACT_APP_URL,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_X_API_KEY,
    },
    mode: 'no-cors',
    data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90; limit 72;`
  })
  .then(response => response.data);
}

export const getGame = async (id) => {
  await axios({
      url: process.env.REACT_APP_URL,
      method: 'POST',
      headers: {
          'x-api-key': process.env.REACT_APP_X_API_KEY,
      },
      mode: 'no-cors',
      data: `fields screenshots.*, name, first_release_date, summary; where id = ${id};`
  })
  .then((response) => response.data);
}

export const searchGame = async (searchField) => {
  await axios({
    url: process.env.REACT_APP_URL,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_X_API_KEY,
    },
    data: `fields name, platforms.abbreviation, rating, genres, release_dates, first_release_date, cover.image_id, age_ratings, summary; search "${searchField}"; limit 50;`
  })
  .then(function (response) {
    return response.data
  });
}

export const quickPullUp = async () => {
  axios({
    url: process.env.REACT_APP_URL,
    method: 'POST',
    headers: {
        'x-api-key': process.env.REACT_APP_X_API_KEY,
    },
    mode: 'no-cors',
    data: `fields name; limit 50;`
  })
  .then((response) => response.data);
}

export const Genres = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [genres, setGenres] = useState([]);

    useEffect(() => {
      async function getGenres() {
        await axios({
          url: process.env.REACT_APP_URL,
          method: 'POST',
          headers: {
              'x-api-key': process.env.REACT_APP_X_API_KEY,
          },
          mode: 'no-cors',
          data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90; limit 72;`
        })
        .then((response) => setGenres(response.data))
        .catch((error) => setErrorMessage(error));
      }
      getGenres();
    }, []);

    return (
      <Row xs={1} className="my-5" key="genres">
        <h1 className="text-white">Genres</h1>
          <Col >
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 0,
                  slidesToSlide: 4
                },
                mobile: {
                  breakpoint: {
                    max: 764,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                  slidesToSlide: 1
                },
                tablet: {
                  breakpoint: {
                      max: 1024,
                      min: 764
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                  slidesToSlide: 2
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              swipeable
            >    
          {genres?.map((genre) => (
            <Card className="mx-2 bg-dark text-white" key={genre.id}>
              <Card.Link className="genre-card card-info"href={`/genre/${genre.name}`}>
                <Card.Body className="genre-card">
                <Card.Title>
                  {genre.name}
                </Card.Title>
                </Card.Body>
              </Card.Link>
            </Card>
          ))}   
        </Carousel>
      </Col>
    </Row>
  )
}

export const ResultItems = ({ searchField }) => {
  const dispatch = useDispatch();
  const resultItems = useSelector(selectResultItems);

  useEffect(() => {
    const handleSearch = async () => {
      await axios({
        url: process.env.REACT_APP_URL,
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_X_API_KEY,
        },
        data: `fields name, platforms.abbreviation, rating, genres, release_dates, first_release_date, cover.image_id, age_ratings, summary; search "${searchField}"; limit 50;`
      })
      .then(function (response) {
        dispatch(setItemsToResult(response.data));
        return response.data;
      });
    }

    handleSearch();
  }, [searchField]);
}

export const ResultsCarousel = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      await axios({
        url: process.env.REACT_APP_URL,
        method: 'POST',
        headers: {
            'x-api-key': process.env.REACT_APP_X_API_KEY,
        },
        data: `fields name, first_release_date, platforms.abbreviation, summary, storyline, rating, cover.image_id; sort rating desc; where rating >= 90; limit 72;`
      })
      .then((response) => setGames(response.data));
    }

    handleSearch();
  }, []);

  return (
    <Row>
      <h1 className="text-white">Games</h1>
      <Col >
          <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass=""
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                  desktop: {
                      breakpoint: {
                          max: 3000,
                          min: 1024
                      },
                      items: 3,
                      partialVisibilityGutter: 0,
                      slidesToSlide: 3
                  },
                  mobile: {
                      breakpoint: {
                          max: 764,
                          min: 0
                      },
                      items: 1,
                      partialVisibilityGutter: 30,
                      slidesToSlide: 1
                  },
                  tablet: {
                      breakpoint: {
                          max: 1024,
                          min: 764
                      },
                      items: 2,
                      partialVisibilityGutter: 30,
                      slidesToSlide: 2
                  }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              swipeable
              >
              {games?.map((game) => (
                  <Card style={{ }} className="mx-2 bg-dark card-container" key={game.id}>
                  <div className='card-container'>
                  <Card.Link className='card-info' href={`/${game.name}`}>
                  {<Card.Img height='485' style={{ objectFit:'cover'}} variant="top" src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover?.image_id}.jpg`} />}
                  </Card.Link>
                  <Card.ImgOverlay>
                      <Card.Text>
                      <FontAwesomeIcon style={{ cursor: 'pointer' }} className="icon" icon={faEye} />
                      </Card.Text>
                      <Card.Text className='icon2'>
                          <FontAwesomeIcon style={{ cursor: 'pointer' }} className="icon-item" icon={faHeart} />
                          <FontAwesomeIcon style={{ cursor: 'pointer' }} className="icon-item" icon={faCommentAlt} />
                          <FontAwesomeIcon style={{ cursor: 'pointer' }} className="icon-item" icon={faRetweet} />
                      </Card.Text>
                      <Card.Text className="icon3">
                          <FontAwesomeIcon style={{ cursor: 'pointer' }} className="" icon={faDownload} />
                      </Card.Text>
                  </Card.ImgOverlay>
                  </div>
                  <Card.Body className=''>
                      <Card.Text>
                      {unixConverter(game.first_release_date)}
                      </Card.Text>
                      <Card.Text>
                      {game.rating !== undefined ? `Rating: ${Math.round(game.rating)}` : ''}
                      </Card.Text>
                      <Card.Text>
                      {`Platforms: ${game.platforms?.map((element) => (`\n${element.abbreviation}`))}`}
                      </Card.Text>
                  </Card.Body>
              </Card>
              ))}
          </Carousel>
      </Col>
    </Row>
  )
}