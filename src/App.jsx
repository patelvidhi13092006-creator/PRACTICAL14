import React, { useState } from "react";
import StudentForm from "./StudentForm.jsx";
import StudentList from "./StudentList.jsx";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  function addStudent(student) {
    setStudents((prev) => [
      { ...student, id: Date.now() },
      ...prev,
    ]);
  }

  function deleteStudent(id) {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Student Registration Portal</h1>
        <p>Register and manage student details</p>
      </header>

      <main className="main-container">
        <StudentForm onAddStudent={addStudent} />

        <StudentList
          students={students}
          onDeleteStudent={deleteStudent}
        />
      </main>

      <footer className="footer">
        React Controlled Form Mini Project
      </footer>
    </div>
  );
}

export default App;