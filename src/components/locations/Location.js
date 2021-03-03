import React from "react"
import { Link } from "react-router-dom"
// import "./Kennel.css"
import "./Location.css"



export const LocationCard = ({location, animals, employees,}) => (
        <section className="location">
            <h3 className="location__name">
                <Link to={`locations/detail/${location.id}`}>
                    { location.name }
                </Link>
            </h3>
            <div className="location__address">{location.address}</div>
            <div className="location__employeeCount">{employees?.length} employees</div>
            <div className="location__animalCount">{animals?.length} animals</div>
        </section>
)