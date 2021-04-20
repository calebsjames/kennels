import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"


export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)
    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])
    const history = useHistory()
  
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
      getAnimals()
    }, [])
  
    useEffect(() => {
      if (searchTerms !== "") {
        // If the search field is not blank, display matching animals
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase))
        setFiltered(subset)
      } else {
        // If the search field is blank, display all animals
        setFiltered(animals)
      }
    }, [searchTerms, animals])

      return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                New Animal
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animalObject => {
                        return <AnimalCard key={animalObject.id} animalInstance={animalObject} />
                    })
                }
            </div>
        </>
    )
}