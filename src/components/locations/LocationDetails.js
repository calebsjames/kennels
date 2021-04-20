import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})
    console.log(location)

	const {location_id} = useParams();


  useEffect(() => {
    
    getLocationById(location_id)
    .then((response) => {
      setLocation(response)
    })
}, [])


  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <div className="location__employees">
        <h5>Employees</h5> 
        {location.employees?.map(employee => employee?.name).join(", ")}</div>
      <div className="location__animals">
        <h5>Animals</h5> 
        {location.animals?.map(animal => animal?.name).join(", ")}</div>
    </section>
  )
}