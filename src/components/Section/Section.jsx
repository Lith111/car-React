import './section.css'
import car from'../image/car2.png'
import vector from "../image/vector.png"
const section = () => {
  return (
    // this is main section =>{imge to car and h1}
    <section
    // the section-response to remove sp
      style={{ justifyContent: "space-between" }}
      className="d-flex  w-100 h-100 section-response "
    >
      {/*  this is h1 and p and button */}
      <div  className="w-100 p-5 d-flex " style={{flexDirection:'column',justifyContent:"center",alignItems:"center"} }>
        <div className='arriving-sty' style={{ fontSize: "25px" ,alignSelf:"self-start" }}>arrivng summer 2019</div>
        <div className='h1-style' >
          {/* this is  h1  */}
          <h1
            className="d-flex"
            style={{
              flexDirection: "column",
              margin: "25px 0",
              fontSize: "88px",
              letterSpacing:"10px",
              fontWeight: "100",
            }}
          >
            <span>MAKE EVERY DAY</span>
            <span>LEGENDARY.</span>
          </h1>
          {/* this is par */}
          <p
            style={{
              width: "69%",
              fontWeight:"400",
              color: "#00000080",
              fontSize:"23px"
            }}
          >
            Theculmimination of comfort,luxury,and powerrul living is embodied
            in the First-Ever BMWX7 the biggest BMW ever built.
          </p>
            
        </div>
        {/* this button */}
        <button className="btn-sty-sec" style={{alignSelf:"self-start"}} >EXPLORE</button>

      </div>
      <div className="w-100 d-flex img-bng" style={{alignItems:"center" ,justifyContent:'flex-end'}}>
        <img src={car} alt='car' style={{width:"1000px",marginTop:"70px"}} className='car-bag'/>
        <img src={vector} alt='car'  className='vector-bag'/>

      </div>
    </section>
  );
};

export default section;
