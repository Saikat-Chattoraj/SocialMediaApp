import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Scroll from "../../components/scroll/Scroll"
import "./home.css"
export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Scroll/>
            </div>
        </>
    )
}
