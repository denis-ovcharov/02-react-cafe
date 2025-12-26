import { useState } from 'react'
import type { Votes, VoteType } from '../../types/votes'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteStats from '../VoteStats/VoteStats'
import VoteOptions from '../VoteOptions/VoteOptions'
import css from './App.module.css'


const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0
}

function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  
function handleVote(type: VoteType) {
  setVotes(prevVotes => ({ ...prevVotes, [type]: prevVotes[type] + 1, }));
  }

  function resetVotes() {
    setVotes({ ...initialVotes });
  }


  const totalVotes: number = votes.good + votes.neutral + votes.bad;

  const positiveRate: number = totalVotes === 0
    ? 0
    : Math.round((votes.good / totalVotes) * 100);

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0} />
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      </div>
      
    </>
  );
}

export default App
