import React from 'react'

// Partials
import HomeHero from './partials/home-hero'
import HomeServices from './partials/home-services'
import HomeLatest from './partials/home-latest'

const Home = () => {
    return (
        <div className="t-home__container">
            {/*<h1><a href={"./testshop/"}>./testshop/へのリンク</a></h1>*/}
            <HomeHero />
            <HomeServices />
            <HomeLatest />
        </div>
    )
}

export default Home
