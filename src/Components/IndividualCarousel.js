import React from "react"
import "../assets/css/carousel.css"

export default function IndividualCarousel(props) {
  const left = props.id * 100
  return (
    <div
      className="carousel-container"
      style={{
        left: `${left}%`,
        transform: `translateX(${props.translateX}%)`,
        transition: "all 1s linear",
      }}
    >
      <div className="carousel-flex">
        <div className="carousel-text-container">
          <div classname="main-heading">
            <h3 className="main-heading-1">{props.mainHeading1}</h3>
            <h1 className="main-heading-2">{props.mainHeading2}</h1>
          </div>
          <div className="sub-title-container">
            <h3 className="sub-title">{props.subTitle1}</h3>
            <h3 className="sub-title">{props.subTitle2}</h3>
          </div>
          <div className="main-description">
            <div className="title">
              <h1>{props.title}</h1>
            </div>
            <div className="description">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div className="carousel-image-container">
          <img src={`${props.imageSrc}`} alt="random" />
        </div>
      </div>
    </div>
  )
}
