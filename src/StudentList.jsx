import React, { useState } from "react";
import "./StudentList.css";

function StudentList({ students, onDeleteStudent }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="student-list-section">
      <div className="list-header">
        <div>
          <h2>Registered Students</h2>
          <p>Total Students: {students.length}</p>
        </div>

        <input
          className="student-search"
          type="search"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search students"
        />
      </div>

      {filteredStudents.length === 0 ? (
        <div className="empty-message">
          <span>📚</span>
          <h3>
            {students.length === 0
              ? "No students registered"
              : "No matching students"}
          </h3>
          <p>Register a student to see the details here.</p>
        </div>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <article className="student-card" key={student.id}>
              <div className="student-initial">
                {student.name.charAt(0).toUpperCase()}
              </div>

              <h3>{student.name}</h3>
              <span className="course-badge">
                {student.course}
              </span>

              <div className="student-info">
                <p>✉️ {student.email}</p>
                <p>📱 {student.phone}</p>
                <p>👤 {student.gender}</p>
              </div>

              <button
                className="delete-btn"
                type="button"
                onClick={() => onDeleteStudent(student.id)}
              >
                Delete Student
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;