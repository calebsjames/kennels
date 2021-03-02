import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - get a global variable. What do you want and when do you want it
  //In this case we are getting everything from all the dataProviders we are using
  //how does the order affect things?
  useEffect(() => {
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
  }, [])

  const history = useHistory()
  

  //return HTML represention
  return (
    <>
      <h2>Animals</h2>
          <button onClick={() => {history.push("animals/create")}}>
        Add Animal
      </button>
      <div className="animals">
        {animals.map(animalObject => {
            const owner = customers.find(c => c.id === animalObject.customerId)
            const clinic = locations.find(l => l.id === animalObject.locationId)            
            return <AnimalCard key={animalObject.id}
                    location = {clinic}
                    customer = {owner} 
                    animalInstance={animalObject} />
          })
        }
      </div>
    </>
  )
}
