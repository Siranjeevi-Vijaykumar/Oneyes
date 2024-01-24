import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function Votew(){
  const [votes, setVotes] = useState(0);

  const voteAnimation = useSpring({
    number: votes,
    from: { number: 0 },
  });

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <h2>Vote Component</h2>
      
      <p>Votes: <animated.span>{voteAnimation.number.interpolate(number => Math.floor(number))}</animated.span></p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};


