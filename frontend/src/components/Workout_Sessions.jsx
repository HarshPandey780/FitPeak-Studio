import React from "react";


const Workout_Sessions = () => {
  return (
    <section className="simple-workout-sessions">
      <h1>Workout Sessions</h1>
      <p>Join us to transform your fitness with sessions designed for all levels.</p>
      
      <div className="sessions-container">
        <div className="session">
          <img src="/cardio.avif" alt="Morning Cardio" className="session-image" />
          <h2>Morning Cardio</h2>
          <p>Start your day with a high-energy cardio workout.</p>
        </div>
        
        <div className="session">
          <img src="/strength.avif" alt="Strength Training" className="session-image" />
          <h2>Strength Training</h2>
          <p>Build muscle and strength with our targeted exercises.</p>
        </div>
        
        <div className="session">
          <img src="/yoga.avif" alt="Evening Yoga" className="session-image" />
          <h2>Evening Yoga</h2>
          <p>Relax and unwind with a calming yoga session.</p>
        </div>
      </div>
      
    </section>
  );
};

export default Workout_Sessions;
