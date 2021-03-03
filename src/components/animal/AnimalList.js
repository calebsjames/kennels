import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"


export const AnimalList = ({ history }) => {
  const { getAnimals, animals } = useContext(AnimalContext)
  
  // Initialization effect hook -> Go get animal data
  useEffect(()=>{
    getAnimals()
  }, [])
  
  history = useHistory()

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                New Animal
            </button>
            <div className="animals">
                {
                    animals.map(animalObject => {
                        return <AnimalCard key={animalObject.id} animalInstance={animalObject} />
                    })
                }
            </div>
        </>
    )
}