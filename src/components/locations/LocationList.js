import React, { useContext, useEffect } from "react"
import { LocationCard } from "../locations/Location"
import { LocationContext } from "../locations/LocationProvider.js"
import "./Location.css"

export const LocationList = () => {
  
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  

  //useEffect - get a global variable. What do you want and when do you want it
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])


  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}