import React from 'react'

export default class ToolTipBox extends React.Component {

    render() {
        const { features } = this.props;
        let feature = features[0];
        let data = feature.state['all_data'];
        let scope = feature.state['scope'];

        console.log(feature, data);
        let content = null;

        if (data) {
            content = <div style={{ position: 'absolute', top: '0px', right: '0px' }} >
                <div style={{ background: 'white', whiteSpace: 'nowrap', padding: '1rem', borderRadius: '4px' }} >
                    <div style={{ fontSize: '14px', paddingBottom: '5px' }} ><b>{`${data['name']}, ${data['state']}`}</b></div>
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td>{`1 Month STR:`}</td>
                            <td style={{ textAlign: 'right' }} >{data[scope]['1mo STR']}</td>
                        </tr>

                        <tr>
                            <td>{`3 Month STR:`}</td>
                            <td style={{ textAlign: 'right' }} >{data[scope]['3mo STR']}</td>
                        </tr>

                        <tr>
                            <td>{`6 Month STR:`}</td>
                            <td style={{ textAlign: 'right' }} >{data[scope]['6mo STR']}</td>
                        </tr>

                        <tr>
                            <td>{`1 Year STR:`}</td>
                            <td style={{ textAlign: 'right' }} >{data[scope]['1yr STR']}</td>
                        </tr>
                    </table>
                </div>
            </div>;
        }

        return (
            content
        );
    }
}