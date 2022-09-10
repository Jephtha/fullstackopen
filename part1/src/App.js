const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
    )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.pt1} />
      <Part part = {props.pt2} />
      <Part part = {props.pt3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content pt1 = {part1} pt2 = {part2} pt3 = {part3} />
      <Total ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises} />
    </div>
  )
}

export default App