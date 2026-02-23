// import searchBar from "./SearchBar";
// import PageHeader from "./header";  
// import EmployeeCard from "./EmployeeCard";
// import EmployeeList from "./EmployeeList";

// export default function Homepage(params) {
    
//     return (

//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <PageHeader/>
//                     <searchBar/>
//                     <EmployeeList/>
//                 </div>
//                 <div className="col">
//                     <EmployeeCard />
//                     </div>
//             </div>
//         </div>


//     )
// }

// src/components/Homepage.jsx
import SearchBar from "./SearchBar";
import EmployeeCard from "./EmployeeCard";
import EmployeeList from "./EmployeeList";
import PageHeader from "./header"; // Assuming you have this

export default function Homepage({
  employees,
  query,
  onQueryChange,
  activeId,
  onChangeActive,
  selectedEmployee,
  pageTitle = "Employee Directory",
  secondPageTitle = "Employee",
}) {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 col-lg-6 border border-primary">
            <PageHeader titleText={pageTitle}/>
            <SearchBar value={query} onChange={onQueryChange} />
                <div className="">
                    <EmployeeList
                        employees={employees}
                        activeId={activeId}
                        onChangeActive={onChangeActive}
                    />
                </div>
        </div>

        <div className="col-12 col-lg-6 border border-primary-subtle">
            <PageHeader titleText={secondPageTitle}/>
            <div className="">
              {selectedEmployee ? (
                <EmployeeCard employee={selectedEmployee} />
              ) : (
                <div className="text-muted">Select an employee to view details.</div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}