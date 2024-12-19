import FindByCar from "../../components/FindByCar/FindByCar"
import SearchInput from "../../components/SearchInput/SearchInput"
import Section from "../../components/Section/Section"
const Home = () => {
  return (
    <div >
      {/* this component to (car and h1 )  */}
      <Section/>
      {/* this is serch input  */}
      <SearchInput/>
      <FindByCar/>
    </div>
  )
}

export default Home