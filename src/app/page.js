import Slider from "@/components/slider/Slider";
import React from "react";
import Intro from "@/components/intro/Intro";
import Member from "@/components/member/Member";
import Portfoilo from "@/components/portfolio/Portfoilo";
import Youtube from "@/components/youtube/Youtube";
import Movie from "@/components/movie/Movie";
import Unsplash from "@/components/unsplash/Unsplash";

const Home = () => {
    return (
        <>
            <Slider />
            <Intro />
            <Member />
            <Portfoilo />
            <Unsplash />
            <Youtube />
            <Movie />
        </>
    );
};

export default Home;
