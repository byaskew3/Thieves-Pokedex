import React from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className='home'>
        <div className="pokedex">
        <div className="left-container">
            <div className="left-container__top-section">
            <div className="top-section__blue" />
            <div className="top-section__small-buttons">
                <div className="top-section__red" />
                <div className="top-section__yellow" />
                <div className="top-section__green" />
            </div>
            </div>
            <div className="left-container__main-section-container">
            <div className="left-container__main-section">
                <div className="main-section__white">
                <div className="main-section__black">
                    <div className="main-screen hide">
                    <div className="screen__header">
                        <span className="poke-name" />Charizard
                        <span className="poke-id" />6
                    </div>
                    <div className="screen__image">
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' className="poke-front-image" alt="front" />
                    </div>
                    <div className="screen__description">
                        <div className="stats__types">
                        <p className="poke-type-one">Fire</p>
                        <p className="poke-type-two" >Flying</p>
                        </div>
                        <div className="screen__stats">
                        <p className="stats__weight">
                            weight: 905 lbs <span className="poke-weight" />
                        </p>
                        <p className="stats__height">
                            height: 17ft <span className="poke-height" />
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="left-container__controllers">
                <div className="controllers__d-pad">
                    <div className="d-pad__cell top" />
                    <div className="d-pad__cell left" />
                    <div className="d-pad__cell middle" />
                    <div className="d-pad__cell right" />
                    <div className="d-pad__cell bottom" />
                </div>
                <div className="controllers__buttons">
                    <div className="right-button">CATCH</div>
                </div>
                </div>
            </div>
            <div className="left-container__right">
                <div className="left-container__hinge" />
                <div className="left-container__hinge" />
            </div>
            </div>
        </div>
        <div className="right-container">
            <div className="right-container__black">
            <div className="right-container__screen">
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
                <div className="list-item" />
            </div>
            </div>
            <div className="right-container__buttons">
            <div className="left-button">Prev</div>
            <div className="right-button">Next</div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
