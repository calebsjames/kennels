import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./Customer.js"
import { EmployeeCard } from "./Employee"
import { LocationCard } from "./Location"
import { PropsAndState } from "./PropsAndState"
export const Kennel = () => {
    
    //object that defines kennel attributes
    const kennel = {
        name: "Nashville Kennels",
        slogan: "Loving care when you're not there.",
        locations: [
          {
            name: "Nashville North",
            address: "500 Puppy Way"
          }
        ]
      }
    
      const animals = [
        {
          "name": "Doodles",
          "breed": "Poodle",
          "locationId": 1,
          "customerId": 3,
          "id": 1
        },
        {
          "id": 2,
          "name": "Kelvin",
          "breed": "Bulldog",
          "customerId": 3,
          "locationId": 2,
        },
        {
          "name": "Midnight",
          "breed": "Bulldog",
          "locationId": 2,
          "customerId": 3,
          "id": 3
        },
        {
          "name": "Chowder",
          "breed": "Pomeranian",
          "locationId": 1,
          "customerId": 3,
          "id": 4
        },
        {
          "name": "Nimbus",
          "breed": "Bulldog",
          "locationId": 1,
          "customerId": 3,
          "id": 5
        }
      ]

      const customers = [
        {
          "nameFirst": "Caleb",
          "nameLast": "James",
          "locationId": "7438 Floofnoufkin Rd.",
          "id": 1
        },
        {
          "nameFirst": "Frank",
          "nameLast": "Frankerson",
          "locationId": "34567 Trifooliopuroo Ave",
          "id": 2
        },
        {
          "nameFirst": "Bobby",
          "nameLast": "Robert",
          "locationId": "784 Roobnooberong Lane",
          "id": 3
        },
        {
          "nameFirst": "Jack",
          "nameLast": "Straw",
          "locationId": "348 Soumthunk Way",
          "id": 4
        }
      ]

      const employees = [
        {
          "nameFirst": "John",
          "nameLast": "Jackson",
          "address": "238 Ocala Ave.",
          "id": 1
        },
        {
          "nameFirst": "Jack",
          "nameLast": "Johnson",
          "address": "305 35th Ave N.",
          "id": 2
        },
        {
          "nameFirst": "Jack",
          "nameLast": "Jackson",
          "address": "3220 Torbett St.",
          "id": 3
        }
      ]

      const locations = [
        {
          "name": "Nashville Kennels North",
          "address": "7823 Hoftermoose Ave.",
          "id": 1
        },
        {
          "name": "Nashville Death Kennel South",
          "address": "679 Shmooftreller St.",
          "id": 2
        }
      ]

    return (
    <>
        <h2>{kennel.name}</h2>
        <small>{kennel.slogan}</small>

        <address>
            <div>Visit Us at the {kennel.locations.name} Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Caleb"} />
        <h2>Animals</h2>
        <article className="animals">
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
        </article>
        <h2>Locations</h2>
        <article className="locations">
        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
        </article>
        <h2>Customers</h2>
        <article className="customers">
        {
          customers.map(customer => {
            return <CustomerCard key={customer.id} customer={customer} />
          })
        }
        </article>
        <h2>Employees</h2>
        <article className="employees">
        {
          employees.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
          })
        }
        </article>
    </>
)}