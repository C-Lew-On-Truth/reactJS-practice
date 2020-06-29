import React from 'react'
import './scratch.css'
import Marvin from '../music/Got-To-Give-lt-Up-Marvin-Gaye.mp3'




const ScratchDemos = props => {

    const track = React.useRef()

    const [playing, isPlaying] = React.useState(false)

    const playMusic = () => {
        track.current.play()
        isPlaying(true)
        console.log(playing)
    }

    const stopMusic = () => {
        track.current.pause()
        isPlaying(false)
        console.log(playing)
    }

    return (

        <div>
            <audio ref={track}>
                <source src={Marvin} />
            </audio>
            <button className='button' >
                {playing ? <h2 onClick={stopMusic}>Stop</h2> : <h2 onClick={playMusic}>Play</h2> }
            </button>
        </div>

    )
}

export default ScratchDemos