import React from 'react';
import '../styles/time-quiz.css'
import smile from '../media/smileyFace2.jpg'
import wrong from '../media/wrong.jpg';
import pizza from '../media/Pizza.jpg';
import tacos from '../media/Tacos.jpg';
import pasta from '../media/Spaghetti.jpg';
import chick from '../media/FriedChicken.jpg';



const TimeQuiz = () => {

    //Quiz functions
    const [time, setTime] = React.useState(10)
    const [count, countDown] = React.useState(true)
    const [pic, picsChange] = React.useState(true)

    //Picture Choices
    const [pastaAns, pastaChange] = React.useState(pasta)
    const [chickAns, chickChange] = React.useState(chick)
    const [tacoAns, tacoChange] = React.useState(tacos)
    const [pizzaAns, pizzaChange] = React.useState(pizza)


    React.useEffect(() => {
        const timer = () => setTimeout(() => setTime(time - 1), 1000);

        if (count === true) {
            time > 0 && timer()
        } else if (count === false) {
            clearTimeout(timer())
        }

        if( time <= 0 ) {
            alert('you blew it!')
        }
    }, [time, count])

    const answerKey = event => {
        let target = event.currentTarget.className
        
        if (target === 'answers1') {
            pastaChange(smile)
            countDown(false)
            picsChange(false)
        } else if (target === 'answers2' && pic) {
            chickChange(wrong)
        } else if (target === 'answers3' && pic) {
            tacoChange(wrong)
        } else if (target === 'answers4' && pic) {
            pizzaChange(wrong)
        }
    }

    return (
        <div>
            <div className='intro'>
                <h1 onClick={() => { alert(window.innerWidth) }}>Know your foods!</h1>
                <p>Choose the picture that has pasta!</p>
            </div>

            <div className='gameHolder'>

                <div className='answers1' answers='pasta' onClick={answerKey}>
                    <img src={pastaAns} alt='' draggable={false} />
                </div>
                <div className='answers2' name='tacos' onClick={answerKey}>
                    <img src={chickAns} alt='' draggable={false} />
                </div>
                <div className='answers3' name='pizza' onClick={answerKey}>
                    <img src={tacoAns} alt='' draggable={false} />
                </div>
                <div className='answers4' name='chicken' onClick={answerKey}>
                    <img src={pizzaAns} alt='' draggable={false} />
                </div>

            </div>

            <div className='timer'>
                {time}
            </div>
        </div>

    )
}

export default TimeQuiz