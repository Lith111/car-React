import NavDropdown from "react-bootstrap/NavDropdown";
import "./SearchInput.css";
const SearchInput = () => {
  return (
    // this to center the card
    <div
      className="d-flex"
      style={{
        marginTop: "300px",
        justifyContent: "center",
        alignContent: "center",
        gap: "5px",
      }}
    >
      {/* this to center item and  */}
      <div
        className="element d-flex "
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <div className="d-flex" style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <span>name</span>
          <NavDropdown title="car name" id="basic-nav-dropdown" style={{color:"rgba(0, 0, 0, 0.5)"}}>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>
        <div className="d-flex" style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <span>name</span>
          <NavDropdown title="car name" id="basic-nav-dropdown" style={{color:"rgba(0, 0, 0, 0.5)"}}>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>
        <div className="d-flex" style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <span>name</span>
          <NavDropdown title="car name" id="basic-nav-dropdown" style={{color:"rgba(0, 0, 0, 0.5)"}}>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>
        <div className="d-flex" style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <span>name</span>
          <NavDropdown title="car name" id="basic-nav-dropdown" style={{color:"rgba(0, 0, 0, 0.5)"}}>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>
        <div className="d-flex" style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <span>name</span>
          <NavDropdown title="car name" id="basic-nav-dropdown" style={{color:"rgba(0, 0, 0, 0.5)"}}>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>


        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default SearchInput;
