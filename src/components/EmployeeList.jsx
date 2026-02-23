
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({ employees = [], activeId, onChangeActive }) {
  if (!employees || employees.length === 0) {
    return <div className="list-group">No employees found.</div>;
  }

  return (
    <div className="list-group" role="list">
      {employees.map((employee) => {
        const isActive = employee.id === activeId || employee.status === true;

        return (
          <button
            key={employee.id}
            type="button"
            onClick={() => onChangeActive?.(employee.id)}
            className={`list-group-item list-group-item-action text-start${
              isActive ? " active" : ""
            }`}
            role="listitem"
          >
            <EmployeeListItem employee={employee} isActive={isActive} />
          </button>
        );
      })}
    </div>
  );
}
