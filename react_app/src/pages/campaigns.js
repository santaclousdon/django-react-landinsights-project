import React, { Component } from "react";

import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Add card",
                    description: "Add capability to add a card in a column",
                },
            ],
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 2,
                    title: "Drag-n-drop support",
                    description: "Move a card between the columns",
                },
            ],
        },
    ],
};

export default class Campgians extends Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render() {
        return (
            <div>
                <div className="card mb-5">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <Board initialBoard={board} />
                    </div>
                </div>
            </div>
        );
    }
}
