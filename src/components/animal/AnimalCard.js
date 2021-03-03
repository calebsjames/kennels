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


// import React from "react"
// import "./Animal.css"


// //animalInstance.location.name? Because expand in the provider. Not recommended.

// export const AnimalCard = ({ animalInstance, customer, location }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animalInstance.name}</h3>
        
//         <div className="location__name">{location.name}</div>
//         <div className="owner__name">{customer.name}</div>
//     </section>
// )