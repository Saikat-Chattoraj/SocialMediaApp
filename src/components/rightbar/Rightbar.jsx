import "./rightbar.css"
export default function Rightbar() {
    return (
            <div className="rightbar">
                <div className="rightbarwrapper">
                    <div className="rightbarbirth">
                        <img src="assets/gift.png" alt="" className="rightbarbirthday"/>
                        <span className="rightbarbirthtext"><b>Jane Doe</b> and <b>3 other friends </b>
                        have birthday today</span>
                    </div>
                    <div className="rightbaradd">
                        <img src="assets/ad.png" alt="" className="rightbaraddimg"/>
                    </div>
                    <h4 className="rightbarfriends">Online</h4>
                        <ul className="rightbarfriendslist">
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            <li className="rightbaronlinefriends">
                                <div className="rightbarimgcontainer">
                                    <img src="/assets/person/8.jpeg" alt="" className="rightbaronlineprofileimg"/>
                                    <span className="rightbaronline"></span>
                                </div>
                                <span className="onlineusername">Jessica Brown</span>
                            </li>
                            
                        </ul>
                </div>
            </div>
    )
}
