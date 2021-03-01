import React, { useContext, useEffect } from "react"
import { LocationCard } from "../locations/Location"
import { LocationContext } from "../locations/LocationProvider.js"
import "./Location.css"

export const LocationList = () => {
  
  // This state changes when `getLocations()` is invoked below
  //getLocations is available because we import and use LocationContext?
  const { locations, getLocations } = useContext(LocationContext)
  

  //useEffect - get a global variable. What do you want and when do you want it
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    //this is available because LocationContext is is imported and getLocations() is housed within LocationProvider() which returns <LocationContext.Provider>
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
