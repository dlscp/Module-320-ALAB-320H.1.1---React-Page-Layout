

export default function EmployeeListItem({ employee, isActive }) {
  const fullName = `${employee.firstName} ${employee.lastName}`;
  return (
    <div className="d-flex w-100 justify-content-between align-items-center">
      <div>
        <h6 className="mb-1">{fullName}</h6>
        <small className={isActive ? "text-light" : "text-muted"}>
          {employee.title} · {employee.department}
        </small>
      </div>     
    </div>
  );
}

