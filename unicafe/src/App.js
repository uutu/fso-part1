import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.clickAction}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} 
      </td>
      <td>
        {props.value} {props.mark}
      </td>
    </tr>
  )
}

const Statistics = (props) => {

  const {good, neutral, bad} = props

  const totalStats = good + neutral + bad
  const averageStats = (good * 1 + neutral * 0 + bad * -1) / totalStats || 0
  const positiveFeedback = (good / totalStats) * 100 || 0

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )  
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={totalStats} />
            <StatisticsLine text="Average" value={averageStats} />
            <StatisticsLine text="Positive" value={positiveFeedback} mark="%" />
          </tbody>
        </table> 
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementValue = (value) => {
    if (value === 'good') 
      setGood(good + 1)
    else if (value === 'neutral')
      setNeutral(neutral + 1)
    else if (value === 'bad')
      setBad(bad + 1)
  }

  return (
    <div>
      <Header text='Give feedback!'/>
      <Button clickAction={() => incrementValue('good')} text="Good" />
      <Button clickAction={() => incrementValue('neutral')} text="Neutral" />
      <Button clickAction={() => incrementValue('bad')} text="Bad" />

      <Header text='Statistics!'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
