import type { Votes } from '../../types/votes'
import Notification from '../Notification/Notification';
import styles from './VoteStats.module.css'


interface VoteStatsProps {
    votes: Votes;
    totalVotes: number
    positiveRate: number
}


function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {

    if (totalVotes === 0) {
        return <Notification/>
    }
    
    return (
        <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
            <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
            <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
            <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>

    );
}

export default VoteStats