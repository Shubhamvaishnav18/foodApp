import React, { useState } from "react"
import "./About.css"

const About = () => {
    return (
        <div className="about-us">
            <div className="about-container">
                <h1 className="about-title">About Foodly</h1>
                <p className="about-description">
                    Welcome to Foodly, your number one source for delicious and freshly made meals. We're dedicated to giving you the very best of dishes, with a focus on quality, taste, and customer satisfaction.
                </p>
                <p className="about-description">
                    Founded in 2024, Foodly has come a long way from its beginnings. When we first started out, our passion for providing top-notch meals drove us to start this platform, so that Foodly can offer you mouth-watering dishes right at your doorstep. We now serve customers all over the city and are thrilled to be a part of the ever-evolving food delivery industry.
                </p>
                <p className="about-description">
                    We hope you enjoy our meals as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-description">
                    To deliver high-quality food that delights your taste buds and ensures you have a delightful dining experience.
                </p>
                <h2 className="about-subtitle">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>Fresh Ingredients</li>
                    <li>Quick Delivery</li>
                    <li>Friendly Service</li>
                    <li>Variety of Cuisines</li>
                </ul>
            </div>
        </div>
    )
}

export default About