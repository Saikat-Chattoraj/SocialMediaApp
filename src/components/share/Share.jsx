import "./share.css"
import {PermMedia} from "@material-ui/icons"
import {Label} from "@material-ui/icons"
import {LocationOn} from "@material-ui/icons"
import {EmojiEmotions} from "@material-ui/icons"
export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/person/1.jpeg" alt="" className="profileimage" />
                    <input type="text" placeholder="What is in your Mind" 
                    className="shareinput"/>
                </div>
                <hr className="sharehr"/>
                <div className="sharebottom">
                    <div className="shareicon">
                        <PermMedia htmlColor="tomato" className="shareiconimg"/>
                        <span className="shareicontext">Media</span>
                    </div>
                    <div className="shareicon">
                        <Label htmlColor="#1F45FC" className="shareiconimg"/>
                        <span className="shareicontext">Tags</span>
                    </div>
                    <div className="shareicon">
                        <LocationOn htmlColor="red" className="shareiconimg"/>
                        <span className="shareicon">Location</span>
                    </div>
                    <div className="shareicon">
                        <EmojiEmotions htmlColor="goldenrod" className="shareiconimg"/>
                        <span className="shareicon">Feelings</span>
                    </div>
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    )
}
