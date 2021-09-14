import "./topbar.css";
import {Search,Person,Chat,Notifications} from "@material-ui/icons";
export default function Topbar() {
    return (
        <div className="topbarcontainer">
            <div className="topbarLeft">
                <span className="logo">SocialApp</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchicon"/>
                <input placeholder="Search for Friends,posts or videos" className="searchinput" />
            </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <Person/>
                        <span className="topbariconbadge">1</span>
                    </div>
                    <div className="topbarIconItems">
                        <Chat/>
                        <span className="topbariconbadge">2</span>
                    </div>
                    <div className="topbarIconItems">
                        <Notifications/>
                        <span className="topbariconbadge">4</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimage"/>
            </div>
        </div>
        )
}
