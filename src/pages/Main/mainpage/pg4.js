
import "./pg4.css";
import { Link } from "react-router-dom";

const Pg4 =()=>{

    return (
        <div>
            <div className="navVar">
                <Link to="/pg1" className="a">MBTI 검사</Link><br />
                <Link to="/pg2" className="a">나의 MBTI</Link>
                <Link to="/pg3" className="a">MBTI 오픈채팅</Link>
                <Link to="/pg4" className="a">MBTI 단짝친구찾기</Link>
                <Link to ="/" className="a">로그아웃</Link>
            </div>
            <div className="where">MBTI 단짝친구찾기 페이지</div>
        </div>
    )
}
export default Pg4;