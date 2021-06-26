import React from 'react'

import '../Styles/Welcome.css'


class Welcome extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className='viewWelcomeBoard'>
                <img
                    src={this.props.currentUserPhoto ? this.props.currentUserPhoto : "https://firebasestorage.googleapis.com/v0/b/project-chat-8768e.appspot.com/o/nopic.jpg?alt=media&token=fec32a00-e2cf-488a-a0a2-8e1c1a07dbb3"}
                    className='avatarWelcome'
                    alt="" />
                <span className='textTitleWelcome'>
                    {`Welcome, ${this.props.currentUserName}`}
                </span>
                <span className="textDescriptionWelcome">Start Chatting</span>

            </div>
        )
    }
}

export default Welcome;