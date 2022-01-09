import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'MERN Stack', id: 'goal1' },
    { text: 'Micro Services', id: 'goal2' },
    { text: 'AWS!', id: 'goal3' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>Set <b style={{color: "red"}}>SMART</b> (specific, measureable, attainable, relevant and time-bound) goals </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <img src='goals.jpg' class="center" width="500" height="600"/>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        
      </section>
    </div>
  );
};

export default App;
