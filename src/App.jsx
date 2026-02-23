
// export default App

import { useMemo, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

// employee data
const employeeData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    title: "Software Engineer",
    department: "Engineering",
    location: "New York",
    phone: "555-1234",
    email: "john.doe@company.com",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    status: false,
  },
  {
    id: 2,
    firstName: "Ada",
    lastName: "Lovelace",
    title: "Staff Engineer",
    department: "R&D",
    location: "London",
    phone: "555-5678",
    email: "ada.lovelace@company.com",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    status: false,
  },
  {
    id: 3,
    firstName: "Grace",
    lastName: "Hopper",
    title: "Admiral",
    department: "Operations",
    location: "Arlington",
    phone: "555-9012",
    email: "grace.hopper@company.com",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
    status: false,
  },
  {
    id: 4,
    firstName: "Linus",
    lastName: "Torvalds",
    title: "Principal Engineer",
    department: "Platform",
    location: "Helsinki",
    phone: "555-1111",
    email: "linus.torvalds@company.com",
    picture: "https://randomuser.me/api/portraits/men/14.jpg",
    status: false,
  },
  {
    id: 5,
    firstName: "Margaret",
    lastName: "Hamilton",
    title: "Director of Software",
    department: "Aerospace",
    location: "Houston",
    phone: "555-2222",
    email: "margaret.hamilton@company.com",
    picture: "https://randomuser.me/api/portraits/women/50.jpg",
    status: false,
  },
  {
    id: 6,
    firstName: "Elena",
    lastName: "Rodriguez",
    title: "Product Designer",
    department: "Design",
    location: "San Francisco",
    phone: "555-3333",
    email: "elena.rodriguez@company.com",
    picture: "https://randomuser.me/api/portraits/women/30.jpg",
    status: false,
  },
  {
    id: 7,
    firstName: "Albert",
    lastName: "Nguyen",
    title: "UX Researcher",
    department: "Design",
    location: "Seattle",
    phone: "555-4444",
    email: "albert.nguyen@company.com",
    picture: "https://randomuser.me/api/portraits/men/40.jpg",
    status: false,
  },
  {
    id: 8,
    firstName: "Priya",
    lastName: "Sharma",
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Mumbai",
    phone: "555-5555",
    email: "priya.sharma@company.com",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    status: false,
  },
  {
    id: 9,
    firstName: "Carlos",
    lastName: "Martinez",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin",
    phone: "555-6666",
    email: "carlos.martinez@company.com",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    status: false,
  },
  {
    id: 10,
    firstName: "Sofia",
    lastName: "Kuznetsova",
    title: "Business Analyst",
    department: "Product",
    location: "Berlin",
    phone: "555-7777",
    email: "sofia.kuznetsova@company.com",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    status: false,
  }
];

export default function App() {
  // search query text
  const [query, setQuery] = useState("");

  // currently selected employee id (or null)
  const [activeId, setActiveId] = useState(() => {
    const preActive = employeeData.find((e) => e.status === true);
    return preActive?.id ?? null;
  });

  // derive selected employee
  const selectedEmployee = useMemo(
    () => employeeData.find((e) => e.id === activeId) ?? null,
    [activeId]
  );

  // filter employees by query (first name, last name, title, dept)
  const employees = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return employeeData;
    return employeeData.filter((e) => {
      const full = `${e.firstName} ${e.lastName}`.toLowerCase();
      return (
        full.includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.department.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="app">
      <Homepage
        employees={employees}
        query={query}
        onQueryChange={setQuery}
        activeId={activeId}
        onChangeActive={setActiveId}
        selectedEmployee={selectedEmployee}
      />
    </div>
  );
}



// Shape used:
// {
//   id: number | string,
//   firstName: string,
//   lastName: string,
//   title: string,         // (not jobTitle)
//   department: string,
//   location: string,
//   phone: string,
//   email: string,
//   picture: string,
//   status?: boolean       // optional; true means pre-active
// }

