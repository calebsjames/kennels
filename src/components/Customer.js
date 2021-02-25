import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"


export const CustomerCard = ({customer}) => (
        <section className="customer">
            <h3 className="customer__name">{customer.nameFirst} {customer.nameLast}</h3>
            <div className="customer__locationId">{customer.locationId}</div>
        </section>
)


    
