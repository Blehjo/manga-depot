import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Genres } from "../../utils/igdb/IGDB";

const GenreCarousel = () => {
    return (
        <Genres/>
    )
}

export default GenreCarousel;