import React, { Component } from "react";

import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

import { ajax_wrapper } from "functions";
import { Loading } from "components";
import { Form, TextArea, Modal, Select } from "library";

import { TIME_SCALES, ACRE_RANGES, GEO_SCALES } from "../constants";

/*
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
*/
const CAMPAIGN_COLS = ["Backlog", "In Progress", "Prepared", "Sent"];

class KanbanCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_notes: false,
        };
    }

    render() {
        let notes = [];
        for (let item of this.props.card.data["notes"]) {
            notes.push(
                <Form
                    submit_url={`/api/notes/${item["id"]}/`}
                    defaults={{ text: item["text"] }}
                    submit_on_enter={false}
                    submit_success={function (value) {
                        this.props.refresh_markets();
                        this.setState({ show_notes: false });
                    }.bind(this)}
                >
                    <h6 class="mb-0">Edit Note</h6>
                    <hr class="horizontal dark my-3"></hr>

                    <TextArea name="text" autosize={true} />
                    <div className="form-group" style={{ fontSize: "12px", textAlign: "left" }}>
                        <div>{`Note Added: ${item["created_at"]}`}</div>
                        <div>{`Last Edited: ${item["updated_at"]}`}</div>
                    </div>
                </Form>
            );
        }
        if (notes.length == 0) {
            notes.push(
                <Form
                    submit_url="/api/notes/"
                    defaults={{ market_id: this.props.card.data["id"] }}
                    submit_success={function (value) {
                        this.props.refresh_markets();
                        this.setState({ show_notes: false });
                    }.bind(this)}
                >
                    <TextArea name="text" label="New Note" autosize={true} />
                </Form>
            );
        }

        let modal = null;
        if (this.state.show_notes) {
            modal = <Modal show={true}>{notes}</Modal>;
        }

        return (
            <div>
                {modal}
                <div class="react-kanban-card " onClick={() => this.setState({ show_notes: !this.state.show_notes })}>
                    <div class="react-kanban-card-title">
                        <h4>{this.props.card.title}</h4>
                    </div>
                    <div class="react-kanban-card-description">
                        <KanbanDescription data={this.props.card.data} acre_range={this.props.card.data.acre_range} />
                    </div>
                </div>
            </div>
        );
    }
}

const MAX_COLOR_BOT = [23, 173, 55];
const MAX_COLOR_TOP = [152, 236, 45];

const MIN_COLOR_BOT = [234, 6, 6];
const MIN_COLOR_TOP = [255, 102, 124];

function get_color_by_percent(percent) {
    let bot_diff = [
        MAX_COLOR_BOT[0] - MIN_COLOR_BOT[0],
        MAX_COLOR_BOT[1] - MIN_COLOR_BOT[1],
        MAX_COLOR_BOT[2] - MIN_COLOR_BOT[2],
    ];

    let top_diff = [
        MAX_COLOR_TOP[0] - MIN_COLOR_TOP[0],
        MAX_COLOR_TOP[1] - MIN_COLOR_TOP[1],
        MAX_COLOR_TOP[2] - MIN_COLOR_TOP[2],
    ];

    let bot_color = [
        MIN_COLOR_BOT[0] + bot_diff[0] * percent,
        MIN_COLOR_BOT[1] + bot_diff[1] * percent,
        MIN_COLOR_BOT[2] + bot_diff[2] * percent,
    ];

    let top_color = [
        MIN_COLOR_TOP[0] + top_diff[0] * percent,
        MIN_COLOR_TOP[1] + top_diff[1] * percent,
        MIN_COLOR_TOP[2] + top_diff[2] * percent,
    ];

    return `linear-gradient(310deg, rgb(${bot_color[0]}, ${bot_color[1]}, ${bot_color[2]}) 0%, rgb(${top_color[0]}, ${top_color[1]}, ${top_color[2]}) 100%)`;
}

class KanbanDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let details = [];
        let wanted_keys = ["Sold: 1mo", "Sold: 1yr", "Sold: 3mo", "Sold: 6mo"];

        for (let key of wanted_keys) {
            let value = this.props.data["region"][ACRE_RANGES[this.props.acre_range]][key];
            let percentage = value / 100 < 1 ? value / 100 : 1;

            let tag_style = {
                marginRight: "5px",
                background: get_color_by_percent(percentage),
            };

            details.push(
                <div style={tag_style} className={"mt-2 badge badge-sm bg-gradient-default"}>
                    {`${key}: ${value}`}
                </div>
            );
        }

        let note_color = "rgba(103, 116, 142, .5)";
        if (this.props.data["notes"].length > 0) {
            note_color = "rgba(103, 116, 142, 1)";
        }

        return (
            <div>
                {details}
                <div>
                    <br />
                </div>
                <div>
                    <div style={{ float: "right", cursor: "pointer" }}>
                        <i class="fas fa-sticky-note" style={{ color: note_color }} />
                    </div>
                    <div
                        style={{ fontSize: "12px", textAlign: "left" }}
                    >{`Added: ${this.props.data["created_at"]}`}</div>
                </div>
            </div>
        );
    }
}

export default class Campgians extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            loaded: false,
            markets: [],
            market_timestamp: Date.now(),

            acre_range: Object.keys(ACRE_RANGES)[0],
        };

        this.refresh_markets = this.refresh_markets.bind(this);
        this.handle_drag = this.handle_drag.bind(this);
    }

    componentDidMount() {
        this.refresh_markets();
    }

    refresh_markets() {
        this.setState(
            {
                loaded: false,
            },
            function () {
                ajax_wrapper("GET", "/api/markets/", {}, (value) =>
                    this.setState({
                        markets: value,
                        loaded: true,
                        market_timestamp: Date.now(),
                    })
                );
            }.bind(this)
        );
    }

    handle_drag(board, card, prev, next) {
        ajax_wrapper("POST", `/api/markets/${card["id"]}/`, {
            status: CAMPAIGN_COLS[next["toColumnId"]],
        });
    }

    render() {
        let columns = {};
        for (let item of CAMPAIGN_COLS) {
            columns[item] = [];
        }

        for (let item of this.state.markets) {
            item["acre_range"] = this.state.acre_range;
            columns[item["status"]].push({
                id: item["id"],
                title: item["region"]["name"],
                data: item,
            });
        }

        let board = {
            columns: [],
        };
        for (let key in columns) {
            board["columns"].push({
                id: CAMPAIGN_COLS.indexOf(key),
                title: key,
                cards: columns[key],
            });
        }

        let kanban = null;
        if (this.state.loaded) {
            kanban = (
                <Board
                    key={this.state.market_timestamp}
                    initialBoard={board}
                    renderCard={(card, { removeCard, dragging }) => (
                        <KanbanCard card={card} refresh_markets={this.refresh_markets} />
                    )}
                    onCardDragEnd={this.handle_drag}
                />
            );
        }

        return (
            <div>
                <Loading loaded={this.state.loaded} />
                <div className="card mb-5">
                    <div className="card-header">
                        <div style={{ width: "200px" }}>
                            <h6 style={{ marginBottom: 0 }}>Acreage Range</h6>
                            <Select
                                options={Object.keys(ACRE_RANGES).map((item) => {
                                    return { text: item, value: item };
                                })}
                                name="acre_range"
                                value={this.state.acre_range}
                                set_form_state={(value) => this.setState({ acre_range: value["acre_range"] })}
                            />
                        </div>
                    </div>
                    <div className="card-body">{kanban}</div>
                </div>
            </div>
        );
    }
}
