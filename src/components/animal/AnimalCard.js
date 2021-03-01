import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animalInstance }) => (
    <section className="animal">
        <h3 className="animal__name">{animalInstance.name}</h3>
        <address className="location__address">{animalInstance.location.name}</address>
    </section>
)