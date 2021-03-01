import React, { useContext, useEffect } from "react"
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



  //return HTML represention
  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animalObject => {
          const owner = customers.find(c => c.id === animalObject.customerId)
          const clinic = locations.find(l => l.id === animalObject.locationId)
          {console.log("Clinic:", clinic)}
          return <AnimalCard key={animalObject.id}
                  location = {clinic}
                  customer = {owner} 
                  animalInstance={animalObject} />
        })
      }
    </div>
  )
}
