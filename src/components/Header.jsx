
export default function PageHeader({titleText}) {
    
    return (
      <div className="container-fluid">
        <div className="text-center fw-bold border rounded py-3 mb-3 mt-1 bg-light">
          {titleText}
        </div>
      </div>
    );

}