import React from 'react';
import './scratch.css';
import Marvin from '../music/Got-To-Give-lt-Up-Marvin-Gaye.mp3';
import giphy from '../media/MarvinGiphy.gif';
import Button from '@material-ui/core/Button';





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
    const [wrong1, wrongChoice1] = React.useState(false);
    const [wrong2, wrongChoice2] = React.useState(false);
    const [wrong3, wrongChoice3] = React.useState(false);
    const [wrong4, wrongChoice4] = React.useState(false);
  
    const [right, rightChoice] = React.useState(false)

    let wrongAnswer1 = () => {
        wrongChoice1(true)
    }

    let wrongAnswer2 = () => {
        wrongChoice2(true)
    }
    let wrongAnswer3 = () => {
        wrongChoice3(true)
    }
    let wrongAnswer4 = () => {
        wrongChoice4(true)
    }

  
    const rightAnswer = () => {
        rightChoice(true);
    }

    const wrongAns = [
        {
            wrong: <p className='wrong1'>Nah Thats not even close</p>
        },
        {
            wrong: <p className='wrong1'>You don't know about the classics!</p>
        },
        {
            wrong: <p className='wrong1'>Can't belive you thought that would be correct</p>
        },
        {
            wrong: <p className='wrong1'>I think you need to find culture</p>
        }
    ];

    const correct = <p>CORRECT! You know about the old school!</p>


    return (

        <div className='gameHolder'>
            <audio ref={track}>
                <source src={Marvin} />
            </audio>

            <h1>
                Which artist sings this song?
            </h1>

            <p>Click the play button below and decide which artist is responsible for the audio track!</p>

            {playing ? <input type='button' value='Stop' onClick={stopTrack} /> : <input type='button' value='Play' onClick={playTrack} />}


            <div className='choiceHolder'>
                
                {wrong1 ? wrongAns[0].wrong : <input className='choices' type='button' value='Barry White' onClick={wrongAnswer1} />  }

                {wrong2 ? wrongAns[1].wrong : <input className='choices' type='button' value='James Brown' onClick={wrongAnswer2}/>}

                {right ? correct : <input className='choices' type='button' value='Marvin Gaye' onClick={rightAnswer} />}

                {wrong3 ? wrongAns[2].wrong : <input className='choices' type='button' value='Lionel Richie' onClick={wrongAnswer3} />}

                {wrong4 ? wrongAns[3].wrong : <input className='choices' type='button' value='Al Green' onClick={wrongAnswer4} />}

                <div>
                    <img className={!right ? 'noGiphy' : 'giphy'} src={giphy}/>
                </div>
            </div>

                





        </div>

    )
}



export default ScratchDemos