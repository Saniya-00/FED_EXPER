import React, { useState } from 'react';

function UserDashboard() {
  const [habits, setHabits] = useState('');
  const [plan, setPlan] = useState('');
  const [intake, setIntake] = useState('');

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <form className="user-form">
        <label>
          Input Dietary Habits:
          <input 
            type="text" 
            value={habits} 
            onChange={e => setHabits(e.target.value)} 
            placeholder="e.g. Eats breakfast, avoids sugar"
          />
        </label>
        <label>
          Personalized Diet Plan:
          <input 
            type="text" 
            value={plan} 
            onChange={e => setPlan(e.target.value)} 
            placeholder="e.g. High protein, low carb"
          />
        </label>
        <label>
          Monitor Nutrient Intake:
          <input 
            type="text" 
            value={intake} 
            onChange={e => setIntake(e.target.value)} 
            placeholder="e.g. Iron deficiency"
          />
        </label>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default UserDashboard;