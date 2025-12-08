import React, { useState } from "react"
import "./Home.css"
import Header from "../../components/Header/Header"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"

const Home = () => {

    const [category, setCategory] = useState("All");

    const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const locations = ["TB6", "UCICI", "SC", "BH4", "Girls Hostel"];

  return (
    <div>
        <div className="header-search">
        <input
          type="text"
          placeholder="Search Location..."
          value={selectedLocation}
          onClick={() => setShowDropdown(!showDropdown)}
          readOnly
        />

        {showDropdown && (
          <ul className="search-dropdown">
            {locations.map((loc, i) => (
              <div className="li"
                key={i}
                onClick={() => {
                  setSelectedLocation(loc);
                  setShowDropdown(false);
                }}
              >
                {loc}
              </div>
            ))}
          </ul>
        )}
      </div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}

export default Home
