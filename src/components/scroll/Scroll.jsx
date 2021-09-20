import "./scroll.css"
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
export default function Scroll() {
    return (
        <div className="scroll">
            <Feed/>
            <Rightbar/>
        </div>
    )
}
