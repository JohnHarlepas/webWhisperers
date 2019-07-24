import React, { Component } from 'react';
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class VideoArea extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true });
    }

  render() {
    return (
        <React.Fragment>
            <section className="video-area video-bg">
                <div className="display-table">
                    <div className="display-table-cell">
                        <div className="video-inner-content">
                            <div className="button__holder">
                                <ModalVideo
                                    channel="youtube"
                                    isOpen={this.state.isOpen}
                                    videoId="aMI6tdIcHjA"
                                    onClose={() =>
                                        this.setState({
                                            isOpen: false
                                        })
                                    }
                                />
                                <span 
                                    onClick={this.openModal} 
                                    className="plus popup-youtube"
                                >
                                </span>
                            </div>
                            <h1>{this.props.Title}</h1>
                            <p>{this.props.Content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}
VideoArea.propTypes= {
    Title: PropTypes.string,
    Content: PropTypes.string,
}
VideoArea.defaultProps = {
    Title: "When Should a Small Business Avoid Building A Website?",
    Content: "At Web Whisperers, it is important that we bring value to our clients. This means, in some cases, it is best to tell clients that their business should not build a website. Click on the video to find out when a small business shouldn't build a website. ",
}
export default VideoArea;
