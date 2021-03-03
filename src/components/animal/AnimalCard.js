import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


//animalInstance.location.name? Because expand in the provider. Not recommended.

export const AnimalCard = ({ animalInstance }) => (
    <section className="animal">
        <h3 className="animal__name">
          <Link to={`/animals/detail/${animalInstance.id}`}>
            { animalInstance.name }
          </Link>
        </h3>
        <div className="animal__breed">{ animalInstance.breed }</div>
    </section>
)


