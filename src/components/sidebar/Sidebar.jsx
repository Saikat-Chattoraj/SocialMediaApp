import "./sidebar.css"
import {RssFeed} from  "@material-ui/icons"
import {Chat} from  "@material-ui/icons"
import {VideoLibrary} from  "@material-ui/icons"
import {Group} from  "@material-ui/icons"
import {Bookmark} from  "@material-ui/icons"
import {Work} from  "@material-ui/icons"
import {ContactSupport} from  "@material-ui/icons"
import {Event} from  "@material-ui/icons"
import {School} from  "@material-ui/icons"

export default function Sidebar() {
    return (
            <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                    <RssFeed className="sidebaricon"/>
                    <span className="sidebaricontext">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Chat className="sidebaricon"/>
                    <span className="sidebaricontext">Chat</span>
                    </li>
                    <li className="sidebarlistitem">
                    <VideoLibrary className="sidebaricon"/>
                    <span className="sidebaricontext">Videos</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Group className="sidebaricon"/>
                    <span className="sidebaricontext">Group</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Bookmark className="sidebaricon"/>
                    <span className="sidebaricontext">Bookmarks</span>
                    </li>
                    <li className="sidebarlistitem">
                    <ContactSupport className="sidebaricon"/>
                    <span className="sidebaricontext">Questions</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Work className="sidebaricon"/>
                    <span className="sidebaricontext">Jobs</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Event className="sidebaricon"/>
                    <span className="sidebaricontext">Events</span>
                    </li>
                    <li className="sidebarlistitem">
                    <School className="sidebaricon"/>
                    <span className="sidebaricontext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarbutton">Show More</button>
                <hr className="sidebarhr"/>
                    <ul className="friendlist">
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                        <li className="friend">
                            <img src="/assets/person/2.jpeg" alt="" className="friendimage" />
                            <span className="friendname">Jon Doe</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
