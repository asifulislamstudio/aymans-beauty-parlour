import React from 'react';
import Hero from './Hero/Hero';
import HomeServices from './HomeServices/HomeServices';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeReview from './HomeReview/HomeReview';
import HomeContact from './HomeContact/HomeContact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeServices></HomeServices>
            <HomeAbout></HomeAbout>
            <HomeReview></HomeReview>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;