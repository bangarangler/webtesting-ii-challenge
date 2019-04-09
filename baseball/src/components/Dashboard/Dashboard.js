import React from 'react';

function Dashboard(props) {
  return (
    <>
      <h3>Score Dashboard</h3>
      <div className="dashboard">
        <button onClick={props.handleStrike} className="strikesBtn">Strike</button>
        <button onClick={props.handleFoul}>foul</button>
        <button onClick={props.handleBall}>Ball</button>
        <button onClick={props.handleHit}>hit</button>
      </div>
    </>
  )
}

export default Dashboard;