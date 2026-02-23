
export default function SearchBar({ value, onChange }) {
  const onSubmit = (e) => e.preventDefault();

  return (
    <nav className="navbar bg-body-tertiary rounded">
      <div className="container-fluid">
        <form className="d-flex w-100" role="search" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by name, title, or department…"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
