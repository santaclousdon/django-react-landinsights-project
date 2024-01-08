import React, { Component } from "react";

import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

import { ajax_wrapper } from "functions";
import { Modal } from "components";
import { Form, TextArea, TextInput } from "library";
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
const CAMPAIGN_COLS = [
    'Backlog',
    'In Progress',
    'Prepared',
    'Sent',
]

class KanbanCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="react-kanban-card ">
                <div class="react-kanban-card-title">
                    <h4>{this.props.card.title}</h4>
                </div>
                <div class="react-kanban-card-description">
                    {this.props.card.description}
                </div>
            </div>
        )
    }
}

class KanbanDescription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show_notes: false,
        }
    }

    render() {
        let details = [];
        let wanted_keys = ["Sold: 1mo", "Sold: 1yr", "Sold: 3mo", "Sold: 6mo"];

        for (let key of wanted_keys) {
            let tag_class = 'mt-2 badge badge-sm bg-gradient-info';
            if (wanted_keys.indexOf(key) > 1) {
                tag_class = 'mt-2 badge badge-sm bg-gradient-success';
            }
            details.push(<div style={{ marginRight: '5px' }} className={tag_class} >
                {`${key}: ${this.props.data['region']['2 acre-100 acre'][key]}`}
            </div>);
        }

        let modal = null;
        if (this.state.show_notes) {
            let notes = [];
            for (let item of this.props.data['notes']) {
                notes.push(<Form
                    submit_url={`/api/notes/${item['id']}/`}
                    defaults={{ 'text': item['text'] }}
                >
                    <TextArea name='text' label={`Note Added: ${item['created_at']}`} />
                </Form>)
            }
            modal = <Modal show={true} on_hide={() => this.setState({ show_notes: false })}>
                {notes}
                <Form
                    submit_url='/api/notes/'
                    defaults={{ 'market_id': this.props.data['id'] }}
                >
                    <TextArea name='text' label='New Note' />
                </Form>
            </Modal >;
        }

        return (
            <div>
                {modal}
                {details}
                <div><br /></div>
                <div >
                    <div onClick={() => this.setState({ show_notes: true })} style={{ float: 'right', cursor: 'pointer' }}><i class="fas fa-sticky-note" /></div>
                    <div style={{ fontSize: '12px', textAlign: 'left' }}>{`Added: ${this.props.data['created_at']}`}</div>
                </div>
            </div>
        )
    }
}



export default class Campgians extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            loaded: false,
            markets: [],
        };

        this.refresh_markets = this.refresh_markets.bind(this);
        this.handle_drag = this.handle_drag.bind(this);
    }

    componentDidMount() {
        this.refresh_markets();
    }

    refresh_markets() {
        ajax_wrapper("GET", "/api/markets/", {}, (value) => this.setState({ markets: value, loaded: true }));
    }

    handle_drag(board, card, prev, next) {
        ajax_wrapper(
            "POST",
            `/api/markets/${card['id']}/`,
            {
                status: CAMPAIGN_COLS[next['toColumnId']],
            }
        );
    }

    render() {
        let columns = {}
        for (let item of CAMPAIGN_COLS) {
            columns[item] = [];
        }

        for (let item of this.state.markets) {
            columns[item['status']].push({
                id: item['id'],
                title: item['region']['name'],
                description: <KanbanDescription data={item} />,
            });
        }

        let board = {
            columns: [],
        }
        for (let key in columns) {
            board['columns'].push({
                id: CAMPAIGN_COLS.indexOf(key),
                title: key,
                cards: columns[key],
            })
        }

        let kanban = null;
        if (this.state.loaded) {
            kanban = <Board
                initialBoard={board}
                renderCard={(card, { removeCard, dragging }) => (
                    <KanbanCard card={card} />
                )}
                onCardDragEnd={this.handle_drag}
            />;
        }

        return (
            <div>
                <div className="card mb-5">
                    <div className="card-header"></div>
                    <div className="card-body">
                        {kanban}
                    </div>
                </div>
            </div>
        );
    }
}
