import React, { Component } from 'react';
import { TextInput, Select, Image } from 'library';

class Modal extends Component {
    static component_name = 'EmptyModal';

    constructor(props) {
        super(props);

        this.on_hide = this.on_hide.bind(this);
    }

    on_hide() {
        if (this.props.on_hide) {
            this.props.on_hide();
        }
    }

    render() {
        const backgroundStyle = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0px',
            left: '0px',
            background: 'rgba(0,0,0,0.2)',
            zIndex: '1',
            margin: 'auto',
        };

        const height = window.outerHeight - 150;

        const modalStyle = {
            border: 'none',
            boxShadow: '2px 2px 10px rgba(0,0,0,.2)',
        };
        let modalClass = 'modal fade';
        if (this.props.show == true) {
            modalClass += ' show';
            modalStyle.display = 'block';
        }

        const floating_close_style = {
            position: 'absolute',
            top: '6px',
            right: '6px',
            margin: '0px',
            minWidth: '0px',
            borderRadius: '4px',
            color: 'white',
            background: '#FC7F53',
            padding: '10px',
            lineHeight: '15px',
        };

        return (
            <div
                className={modalClass}
                tabIndex="-1"
                role="dialog"
                style={modalStyle}
            >
                <div onClick={this.on_hide} style={backgroundStyle} />
                <div
                    className="modal-dialog"
                    role="document"
                    style={{
                        zIndex: '10',
                        maxWidth: '2000px',
                        marginTop: '3%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            width: '1000px',
                            maxHeight: height,
                            overflow: 'auto',
                            padding: '30px 15px 15px 15px',
                        }}
                    >
                        {this.props.children}
                        <div className="btn bg-gradient-danger btn-icon-only" onClick={this.on_hide} style={floating_close_style}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
