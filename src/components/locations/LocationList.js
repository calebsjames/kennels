import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext, AnimalProvider } from "../animal/AnimalProvider"
import { EmployeeProvider } from "../employees/EmployeeProvider"
import { LocationCard } from "../locations/Location"
import { LocationContext } from "../locations/LocationProvider.js"
import "./Location.css"

export const LocationList = () => {
  
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  

  //useEffect - get a global variable. What do you want and when do you want it
  useEffect(() => {
    //this is available because LocationContext is is imported and getLocations() is housed within LocationProvider() which returns <LocationContext.Provider>
    getLocations()

  }, [])


  const history = useHistory()

  return (
    <>
    <h2>Locations</h2>
        <button onClick={() => {history.push("locations/create")}}>
        Add Location
      </button>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(locationObject => {
          
          return <LocationCard key={locationObject.id} 
          location={locationObject} 
          animals = {locationObject.animals}
          employees = {locationObject.employees}
          />
        })
      }
    </div>
    </>
  )
}
