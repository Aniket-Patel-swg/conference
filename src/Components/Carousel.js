import React from "react"
import IndividualCarousel from "./IndividualCarousel"
import carouseldata from "../assets/data/carouseldata"
import "../assets/css/carousel.css"

export default function Carousel() {
  const [count, setCount] = React.useState(0)
  const [translateX, setTranslateX] = React.useState(0)

  const carousels = carouseldata.map((carousel) => {
    return (
      <IndividualCarousel
        key={carousel.key}
        id={carousel.key}
        {...carousel}
        translateX={translateX}
      />
    )
  })

  const translateCarousel = (e) => {
    e.target.id === "prev"
      ? setCount((prevCount) => {
          if (prevCount - 1 === -1) {
            return carousels.length - 1
          }
          return (prevCount = prevCount - 1)
        })
      : setCount((prevCount) => {
          if (prevCount === carousels.length - 1) {
            return 0
          }
          return (prevCount = prevCount + 1)
        })

    e.target.id === "prev"
      ? setTranslateX((prevTranslateX) => {
          if (prevTranslateX === 0) {
            return -((carouseldata.length - 1) * 100)
          }
          return prevTranslateX + 100
        })
      : setTranslateX((prevTranslateX) => {
          if (prevTranslateX === -((carouseldata.length - 1) * 100)) {
            return 0
          }
          return prevTranslateX - 100
        })
  }

  return (
    <div className="carousels-section">
      <div className="allCarousels-container">{carousels[count]}</div>
      <div className="btns-container">
        <button className="btn prev-btn" id="prev" onClick={translateCarousel}>
          Previous
        </button>
        <button className="btn next-btn" id="next" onClick={translateCarousel}>
          Next
        </button>
      </div>
      <div className="indicators">
        <div className="indicator active-indicator" id="0"></div>
        <div className="indicator" id="1"></div>
        <div className="indicator" id="2"></div>
      </div>
    </div>
  )
}
