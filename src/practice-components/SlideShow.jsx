import React, { useState }  from 'react';
import { useEffect } from 'react';
//import AutoPics from '../side-components/AutoPics.jsx';
import '../styles/slideshow.css'

function SlideShow( {pictures} ) {

    const [presImg, setPresImg] = useState(0)
    const { length } = pictures
    
    const nextPic = () => {    
        setPresImg( presImg === length - 1 ? 0 : presImg + 1 )
    }

    useEffect(() => {
        setTimeout(nextPic, 3000)
    })

    return(
        <div className="slide-page">
             <section className="slider">
                    {pictures.map((s, i) => (   
                        
                    <div className={i === presImg ? "active" : "slide"}>
                        <img className="image" src={s.image} alt=""/> 
                    </div>
                    ))}
                </section>
              
        </div>
    );
}

export default SlideShow;