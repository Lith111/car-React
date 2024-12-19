import Title from "../Section/Title/Title";
import Container from "react-bootstrap/Container";
import Rectangle from "../image/Rectangle.png"
import img1 from "../image/Frame1.png"
import img2 from "../image/Frame2.png"
import "./FindByCar.css"
const FindByCar = () => {
  return (
    <Container fluid>
        <Title title="find by car Type" />
        <div className="card-Car">
          <span><img src={img1} alt="img1" /></span>
          <div className="list "style={{maxWidth:"600px",overflow:"hidden"}}>
            <div className="d-flex">
            <div className="card-img">
                <img  src={Rectangle} alt="car"/>
                <span>Audio</span>
            </div>
            <div className="card-img">
                <img  src={Rectangle} alt="car"/>
                <span>Audio</span>
            </div>
            <div className="card-img">
                <img  src={Rectangle} alt="car"/>
                <span>Audio</span>
            </div>
            <div className="card-img">
                <img  src={Rectangle} alt="car"/>
                <span>Audio</span>
            </div>
            </div>
          </div>
          <span><img src={img2} alt="img2" /></span>    
        </div>
    </Container>
  );
};

export default FindByCar;
