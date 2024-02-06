import React, { Component } from "react";

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let height = window.innerHeight;

        if (this.props.loaded) {
            return this.props.children;
        }

        return (
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: `${height}px`,
                    textAlign: "center",
                    padding: "10%",
                    zIndex: "3000",
                    background: "#f5f5f5",
                }}
            >
                <div class="spinner-grow text-info" role="status" style={{ margin: "10px" }}>
                    <span class="sr-only">Loading...</span>
                </div>

                <div
                    class="spinner-grow text-info"
                    role="status"
                    style={{
                        animationDelay: "150ms",
                        margin: "10px",
                    }}
                >
                    <span class="sr-only">Loading...</span>
                </div>

                <div
                    class="spinner-grow text-info"
                    role="status"
                    style={{
                        animationDelay: "300ms",
                        margin: "10px",
                    }}
                >
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}
