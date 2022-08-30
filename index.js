import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Power Enterprises</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar, document.getElementById("root")
)

 