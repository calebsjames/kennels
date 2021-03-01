import React from "react"
import "../Kennel.css"
import "./Employee.css"


export const EmployeeCard = ({employeeInstance, location}) => (
        <section className="employee">
            <h3 className="employee__name">{employeeInstance.name}</h3>
            <div className="employee__location">{location.name}</div>
        </section>
)


    
