

export default function EmployeeCard({ employee }) {
  const fullName = `${employee.firstName} ${employee.lastName}`;

  return (
    <div className="card shadow-sm mb-2">
      {/* profile */}
      <div className="card-body text-center">
        <img
          className="rounded-circle mb-3"
          src={employee.picture}
          alt={fullName}
          width="96"
          height="96"
        />
        <h2 className="h5 mb-1">{fullName}</h2>
        <p className="text-muted mb-0">{employee.title}</p>
        <small className="text-muted">{employee.department}</small>
      </div>

      {/* details */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="fw-semibold">Phone</span>
          <span>{employee.phone}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="fw-semibold">Email</span>
          <span>{employee.email}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="fw-semibold">Location</span>
          <span>{employee.location}</span>
        </li>
      </ul>
    </div>
  );
}
