import { useState } from "react"

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
    )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

  const goodValues = allClicks.filter(value => value === "G").length
  const neutralValues = allClicks.filter(value => value === "N").length
  const badValues = allClicks.filter(value => value === "B").length
  const total = goodValues + neutralValues + badValues

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value ={goodValues} />
          <StatisticLine text="neutral" value ={neutralValues} />
          <StatisticLine text="bad" value ={badValues} />
          <StatisticLine text="all" value ={total} />
          <StatisticLine text="average" value ={(goodValues - badValues) / total} />
          <StatisticLine text="positive" value = {(goodValues / total) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const goodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const neutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text = "good" />
      <Button onClick={neutralClick} text = "neutral" />
      <Button onClick={badClick} text = "bad" />
      <h2>statistics</h2>
      <Statistics allClicks = {allClicks} />
    </div>
  )
}

export default App