import React from 'react';
import '../practice-components/time-quiz.css'
import smile from '../media/smileyFace2.jpg'
import wrong from '../media/wrong.jpg';
import pizza from '../media/Pizza.jpg';
import tacos from '../media/Tacos.jpg';
import pasta from '../media/Spaghetti.jpg';
import chicken from '../media/FriedChicken.jpg';

const TimeQuiz = () => {
    const [time, setTime] = React.useState(60)
    const [count, countDown] = React.useState(true)
    const [pastaRight, pastaPic] = React.useState(pasta)
    const [tacosWrong, tacoPic] = React.useState(tacos)
    const [pizzaWrong, pizzaPic] = React.useState(pizza)
    const [chickWrong, chickPic] = React.useState(chicken)

    React.useEffect(() => {
        let timer = () => setTimeout(() => setTime(time - 1), 1000)
        if (count === true) {
            time > 0 && timer()
        } else if (count === false) {
            clearTimeout(timer())
        } else if (count === 0) {
            console.log('number')
        }
    }, [time, count])

    const rightPasta = () => {
        pastaPic(smile)
        countDown(false)
    }

    const wrongTacos = () => {

        if(count === false) {
            tacoPic(tacos)
        } else {
            tacoPic(wrong)
        }
    }
    const wrongPizza = () => {
        if(count === false) {
            pizzaPic(pizza)
        } else {
            pizzaPic(wrong)
        }
    }
    const wrongChick = () => {
        if(count === false) {
            chickPic(chicken)
        } else {
            chickPic(wrong)
        }
    }

    return (
        <div>
            <div className='intro'>
                <h1>Know your foods!</h1>

                <p>Choose the picture that has pasta!</p>
            </div>

            <div className='gameHolder'>

                <div className='answers' onClick={rightPasta}>
                    <img src={pastaRight} />
                </div>
                <div className='answers' onClick={wrongTacos}>
                    <img src={tacosWrong} />
                </div>
                <div className='answers' onClick={wrongPizza}>
                    <img src={pizzaWrong} />
                </div>
                <div className='answers' onClick={wrongChick}>
                    <img src={chickWrong} />
                </div>

            </div>

            <div className='timer'>
                {time}
            </div>
        </div>

    )
}

export default TimeQuiz