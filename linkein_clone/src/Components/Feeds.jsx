import React from 'react';
import './Feeds.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


function Feeds () {
return (
    <div className="feed">
        {/* <h1>feeds field</h1> */}
        <div className="feed_inputContainer">
            <div className="feed__input">
                <CreateIcon /> 
                <form >
                    <input type="text" placeholder="write a post"/>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon}  title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon}  title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon}  title="Write Article" color="#7FC15E"/>
            </div>
        </div>
    </div>
)
}
export default Feeds