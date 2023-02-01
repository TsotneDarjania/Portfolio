import React, { useState } from 'react'
import "./face.css"

const Face = () => {

    const [eyePointClass,setEyePointClass] = useState('eye-point-center-center')

    const [eyeLeftPointClass,setEyeLeftPointClass] = useState('')
    const [eyeRightPointClass,setEyeRightPointClass] = useState('')

    
    const [eyeLeftBrowClass,setLeftBrowClass] = useState('eye-brow-normal')
    const [eyeRightBrowClass,setRightBrowClass] = useState('eye-brow-normal')

  return (
    <div className="face">
        <div className="eye left-eye">
            <div className={ "eye-point " + eyePointClass + " " + eyeLeftPointClass}></div>
        </div>
        <div className="eye right-eye">
            <div className={ "eye-point " + eyePointClass + " " + eyeRightPointClass}></div>
        </div>

        <div className={"eye-brow left-eye-brow " + eyeLeftBrowClass}></div>
        <div className={"eye-brow right-eye-brow " + eyeRightBrowClass}></div>

        <div onMouseOver={ () => {  setLeftBrowClass("left-eye-brow-angry"); setRightBrowClass("right-eye-brow-angry");  }} className="bottom-zones">
            <div onMouseOver={ () => setEyePointClass("eye-point-left-bottom")} className="left-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-center-bottom")} className="center-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-right-bottom")} className="right-zone"></div>
        </div>
        <div onMouseOver={ () => {  setLeftBrowClass("eye-blow-normal"); setRightBrowClass("eye-blow-normal");  }} className="center-zones">
            <div onMouseOver={ () => setEyePointClass("eye-point-left-center")} className="left-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-center-center")} className="center-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-right-center")}  className="right-zone"></div>
        </div>
        <div onMouseOver={ () => {  setLeftBrowClass("left-eye-brow-beg"); setRightBrowClass("right-eye-brow-beg");  }} className="top-zones">
            <div onMouseOver={ () => setEyePointClass("eye-point-left-top")} className="left-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-center-top")} className="center-zone"></div>
            <div onMouseOver={ () => setEyePointClass("eye-point-right-top")} className="right-zone"></div>
        </div>
        <div onMouseLeave={() => { setEyeLeftPointClass(" "); setEyeRightPointClass(" ")} } onMouseOver={ () => {setEyeLeftPointClass("eye-left-point-ugly"); setEyeRightPointClass("eye-right-point-ugly") } } className='face-center-zone'>  </div>
    </div>
  )
}

export default Face