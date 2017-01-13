import React, { Component, PropTypes } from "react";

import ModalContent from "metabase/components/ModalContent.jsx";


export default class QuestionSavedModal extends Component {
    static propTypes = {
        addToDashboardFn: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired
    };

    render() {
        return (
            <ModalContent
                id="QuestionSavedModal"
                title="Your Question Was Saved!"
                onClose={this.props.onClose}
                className="Modal-content Modal-content--small NewForm"
            >
                <div className="Form-inputs mb4">
                    {/* <button className="Button Button--primary" onClick={this.props.addToDashboardFn}>Yes please!</button> */}
                    <button className="Button Button--primary" onClick={this.props.onClose}>Okay</button>
                </div>
            </ModalContent>
        );
    }
}
