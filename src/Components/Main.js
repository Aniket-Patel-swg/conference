import React from "react"
import "../assets/css/main.css"

export default function Main() {
  return (
    <div className="main">
      <div className="main-text-container">
        <h1 className="main-heading">Thrive Together</h1>
        <p className="main-desc">
          Recharge and reboot at SIGGRAPH 2019, as multifaceted as you
          are—featuring global innovators who are changing what’s possible in
          computer graphics, animation, VR, Gaming, and Emerging Technologies.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">Production & animation</div>
        <div className="card">Research & Education</div>
        <div className="card">Art & Design</div>
        <div className="card">Gaming & Interactive</div>
        <div className="card">New Technologies</div>
      </div>
    </div>
  )
}
