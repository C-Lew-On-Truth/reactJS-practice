import React from 'react'
import './scratch.css'
import Marvin from '../music/Got-To-Give-lt-Up-Marvin-Gaye.mp3'
import giphy from '../media/MarvinGiphy.gif'





const ScratchDemos = props => {

    //Audio
    const track = React.useRef()
    const [playing, isPlaying] = React.useState(false);

    const playTrack = () => {
        isPlaying(true)
        track.current.play()
    }

    const stopTrack = () => {
        isPlaying(false)
        track.current.pause()
    }


    //Game 
    const [wrong, wrongChoice] = React.useState(false)
  
    const [right, rightChoice] = React.useState(false)

    let wrongAnswer = () => {
        wrongChoice(true)
    }
  
    const rightAnswer = () => {
        rightChoice(true);
        wrongChoice(false);
        let wrongAnswer = () => {
            return
        }
    }

    const wrongAns = [
        {
            wrong: <p className='wrong1'>Nah Thats not even close</p>
        },
        {
            wrong: <p>You don't know about the classics!</p>
        },
        {
            wrong: <p>Can't belive you thought that would be correct</p>
        },
        {
            wrong: <p>I think you need to find culture</p>
        }
    ];

    const correct = <p>You know about the old school!</p>


    return (

        <div className='gameHolder'>
            <audio ref={track}>
                <source src={Marvin} />
            </audio>

            <h1>
                Which artist listed is behind the song?
            </h1>

            {playing ? <input type='button' value='Stop' onClick={stopTrack} /> : <input type='button' value='Play' onClick={playTrack} />}


            <div className='choiceHolder'>
                
                {wrong ? wrongAns[0].wrong : <input className='choices' type='button' value='Barry White' onClick={wrongAnswer} />  }

                {<input className='choices' type='button' value='James Brown' />}

                {right ? correct : <input className='choices' type='button' value='Marvin Gaye' onClick={rightAnswer} />}

                {<input className='choices' type='button' value='Lionel Richie' />}

                { <input className='choices' type='button' value='Al Green'  />}

                <div>
                    <img className={!right ? 'noGiphy' : 'giphy'} src={giphy}/>
                </div>
            </div>

                





        </div>

    )
}



export default ScratchDemos