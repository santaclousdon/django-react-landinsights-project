import React from 'react'

export default class ToolTipBox extends React.Component {

    render() {
        const { features } = this.props;
        let feature = features[0];
        let data = feature.state['data_points'];

        console.log(feature, data);
        let content = null;

        if (data) {
            let data_point_rows = [];
            for (let key in data) {
                if (['name', 'state'].includes(key)) {
                    continue;
                }

                data_point_rows.push(<tr>
                    <td>{`${key}: `}</td>
                    <td style={{ textAlign: 'right' }} >{data[key]}</td>
                </tr>);
            }

            content = <div style={{ position: 'absolute', top: '0px', left: '0px' }} >
                <div style={{ background: 'white', whiteSpace: 'nowrap', margin: '.5rem', padding: '1rem', borderRadius: '4px' }} >
                    <div style={{ fontSize: '14px', paddingBottom: '5px' }} ><b>{`${data['name']}, ${data['state']}`}</b></div>
                    <table style={{ width: '100%' }}>
                        {data_point_rows}
                    </table>
                </div>
            </div>;
        }

        return (
            content
        );
    }
}