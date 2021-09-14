import "./post.css"
import {MoreVert} from "@material-ui/icons"
export default function Post() {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className="posttopleftimg" 
                        src="/assets/person/1.jpeg" alt=""/>
                        <span className="posttoplleftuser">Michelle Brown</span>
                        <span className="posttoplefttime">5 min ago</span>
                    </div>
                    <div className="postright">
                        <MoreVert className="postrightmore"/>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="postcentergreet">This is first post</span>
                    <img src="/assets/post/1.jpeg" alt="" 
                    className="postcenterimage"/>
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="/assets/like.png" alt="" 
                        className="postbottomreaction"/>
                        <img src="/assets/heart.png" alt="" 
                        className="postbottomreaction"/>
                        <span className="likecounter">32 people liked </span>
                    </div>
                    <div className="postbottomright">
                        <span className="postbottomrightcomment">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
