class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }

  getType() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am studying ${this.major}.`;
  }

  getType() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getType() {
    return "Teacher";
  }
}

function PersonPage() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Experiment 3.3 - Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} style={cardStyle}>
          <span style={badgeStyle}>{person.getType()}</span>
          <h3>{person.name}</h3>
          <p><strong>Age:</strong> {person.age}</p>
          <p>{person.introduce()}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
};

const badgeStyle = {
  background: "#1e40af",
  color: "white",
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
};

export default PersonPage;