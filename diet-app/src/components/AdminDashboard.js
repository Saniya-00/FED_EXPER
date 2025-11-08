import React, { useState } from 'react';

function AdminDashboard() {
  const [nutritionData, setNutritionData] = useState('');
  const [recommendation, setRecommendation] = useState('');

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <form className="admin-form">
        <label>
          Nutritional Data:
          <input 
            type="text" 
            value={nutritionData} 
            onChange={e => setNutritionData(e.target.value)} 
            placeholder="e.g. Vitamin D, Calcium"
          />
        </label>
        <label>
          Dietary Recommendation:
          <input 
            type="text" 
            value={recommendation} 
            onChange={e => setRecommendation(e.target.value)} 
            placeholder="e.g. Include leafy greens"
          />
        </label>
        <button type="button">Update Data</button>
      </form>
      <div className="health-data">
        {/* Example tracking area */}
        <h3>User Health Tracking</h3>
        <p>Track and display user health metrics here...</p>
      </div>
    </div>
  );
}

export default AdminDashboard;