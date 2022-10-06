import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../firebase';


export default function Home() {
    
    // create all useStates
    const [pokeName, setPokeName] = useState('')
    const [pokeId, setPokeId] = useState('')
    const [pokeImg, setPokeImg] = useState('')
    const [pokeTypeOne, setPokeTypeOne] = useState('')
    const [pokeTypeTwo, setPokeTypeTwo] = useState('')
    const [pokeWeight, setPokeWeight] = useState('')
    const [pokeHeight, setPokeHeight] = useState('')
    
    const mainScreen = document.querySelector('.main-screen')
    const pokeListItems = document.querySelectorAll('.list-item')

    // reset each class type
    // const types = [
    //     'normal', 'fighting', 'flying', 'poison', 'ground',
    //     'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 
    //     'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
    // ]

    // const resetScreen = () => {
    //     for (let i=0; i<types.length; i++){
    //         mainScreen.classList.remove(types[i])
    //     }
    // }

    // left screen fetch request to pokemon api
    const getPokemon = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/8`)
        const data = await response.json()
        console.log(data)
        setPokeName(data['name'])
        setPokeId(data['id'])
        setPokeImg(data['sprites']['front_default'])
        setPokeTypeOne(data['types'][0]['type']['name'])
        if (data['types'][1]){
            setPokeTypeTwo(data['types'][1]['type']['name'])
        } else {
            setPokeTypeTwo('N/A')
        }
        setPokeWeight(data['weight'])
        setPokeHeight(data['height'])

        mainScreen.classList.add(data['types'][0]['type']['name'])
        mainScreen.classList.remove('hide')
    }

    // right screen fetch request to pokemon api
    const getAllPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        const data = await response.json()

        const results = data['results']

        for (let i = 0; i<pokeListItems.length; i++){

            const pokeListItem = pokeListItems[i]
            const resultData = results[i]

            const pokeName = resultData['name']
            const pokeNumber = resultData['url'].slice(34,-1)

            pokeListItem.textContent = `${pokeNumber}. ${pokeName}`
        }
    }
    getAllPokemon()

    // Add pokemon to database
    const addPokemon = async (event) => {
        event.preventDefault()
        console.log(event)
        try {
            const response = await addDoc(collection(db, "pokemon"), {
                id: pokeId,
                name: pokeName,
                type: [pokeTypeOne, pokeTypeTwo],
                weight: pokeWeight,
                height: pokeHeight,
                timestamp: serverTimestamp()
            });
            console.log("Document written with ID: ", response.id);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
          
    }
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
                <form onSubmit={addPokemon}>
                    <div className="left-container__main-section-container">
                    <div className="left-container__main-section">
                        <div className="main-section__white">
                        <div className="main-section__black">
                            <div className="main-screen hide">
                                <div className="screen__header">
                                    <span className="poke-name">{pokeName}</span>
                                    <span className="poke-id">#{pokeId.toString().padStart(3, '0')}</span>
                                </div>
                                <div className="screen__image">
                                    <img src={pokeImg} className="poke-front-image" alt="front" />
                                </div>
                                <div className="screen__description">
                                    <div className="stats__types">
                                    <p className="poke-type-one">{pokeTypeOne}</p>
                                    <p className="poke-type-two" >{pokeTypeTwo}</p>
                                    </div>
                                    <div className="screen__stats">
                                    <p className="stats__weight">
                                        weight: {pokeWeight} lbs <span className="poke-weight" />
                                    </p>
                                    <p className="stats__height">
                                        height: {pokeHeight}ft <span className="poke-height" />
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
                            <button className="right-button" type="submit">CATCH</button>
                        </div>
                        <div className="controllers__buttons">
                            <button className="right-button" type="button" onClick={getPokemon}>Load Pokemon</button>
                        </div>
                        </div>
                    </div>
                    <div className="left-container__right">
                        <div className="left-container__hinge" />
                        <div className="left-container__hinge" />
                    </div>
                    </div>
                </form>
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
            <button className="left-button">Prev</button>
            <button className="right-button">Next</button>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
