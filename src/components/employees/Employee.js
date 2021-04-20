import React from "react"
import "../Kennel.css"
import "./Employee.css"
import { Link } from "react-router-dom"


export const EmployeeCard = ({employeeInstance, location}) => (
        <section className="employee">
            <h3 className="employee__name">
                <Link to={`/employees/detail/${employeeInstance.id}`}>
                { employeeInstance.name }
                </Link>
            </h3>
            <div className="employee__location">{location?.name}</div>
        </section>
)


    
