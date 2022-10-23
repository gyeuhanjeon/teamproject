
import "./home.css";
import { Link } from "react-router-dom";

const Home =()=>{

    return(
        <div className="navVar">
        <Link to ="/pg1" className="a">MBTI 검사</Link><br/>
        <Link to ="/pg2" className="a">나의 MBTI</Link>
        <Link to ="/pg3" className="a">MBTI 오픈채팅</Link>
        <Link to ="/pg4" className="a">MBTI 단짝친구찾기</Link>
        </div>
    )
}
export default Home;