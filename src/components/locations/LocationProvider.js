import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// this is setting a global variable
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => {

    /* useState() is returning an array. 
    locations is a constant variable and setLocations is a function*/
    const [locations, setLocations] = useState([])
    
    //normal get request
    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_embed=employees&_embed=animals")
        .then(res => res.json())
        //I don't understand this
        .then(setLocations)
    }

    //normal function to add location to local api
    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them.
    */

    // when LocationContext is called, it gets this???
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationById
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}