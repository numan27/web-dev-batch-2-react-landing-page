import React from 'react'
import CardsHome from './components/CardsHome'
import AnimationSection from './components/AnimationSection'
// import AppLayout from '../../components/AppLayout'

const Home = () => {
    return (
        <div>
            {/* <AppLayout> */}
                <CardsHome />
                <AnimationSection />
            {/* </AppLayout> */}
        </div>
    )
}

export default Home