import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"


export const EmployeeCard = ({employee}) => (
        <section className="employee">
            <h3 className="employee__name">{employee.nameFirst} {employee.nameLast}</h3>
            <div className="employee__locationId">{employee.address}</div>
        </section>
)


    
