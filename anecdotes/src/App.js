import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.clickAction}>
    {props.text}
  </button>
)

const Header = ({text}) => <h1>{text}</h1>

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p> 
    </div>   
  )
}

const MostVoted = ({ anecdote, votes }) => {
  const mostVoteCount = Math.max(...votes)
  const indexOfVote = votes.indexOf(mostVoteCount)

  // Check for no vote situation
  if (mostVoteCount === 0)
    return <p>No votes cast yet for an anecdote</p>

  return (
    <div>
      <p>{anecdote[indexOfVote]}</p>
      <p>Has {mostVoteCount} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  // Fill matching length array with zeroes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setRandomIndex = () => {
    const randomIndex = (Math.floor(Math.random() * anecdotes.length))
    setSelected(randomIndex)
  }

  const voteForEntry = (selected) => {
    const copyOfVotes = [...votes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button clickAction={() => voteForEntry(selected)} text="vote" />
      <Button clickAction={() => setRandomIndex()} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <MostVoted anecdote={anecdotes} votes={votes} />
    </div>
  )
}

export default App;
