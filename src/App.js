import React from 'react';
import './App.css';

import PropTypes from 'prop-types';

import Astronomen from './items/Astronomen';
import CryptoDemo from './items/CryptoDemo';

const Rows = [
    [
        Astronomen,
        CryptoDemo,
    ],
];

class PortfolioItem extends React.PureComponent {

    static propTypes = {
        item: PropTypes.object,
    };

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: 750,
                paddingTop: 30,
                paddingBottom: 30,
                paddingLeft: 30,
                paddingRight: 30,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <video
                        style={{
                            width: 400,
                            borderRadius: '15px',
                        }}
                        src={require('./webms/' + this.props.item.webm)}
                        autoPlay
                        loop
                        muted />
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: 30,
                    alignItems: 'flex-start',
                }}>
                    <h2 style={{
                        fontFamily: 'Roboto Medium',
                        color: '#333333',
                        fontSize: '2.5em',
                    }}>{this.props.item.name}</h2>

                    <a href={this.props.item.downloadLink}>Source Code</a>
                    <p style={{
                        textAlign: 'justify',
                        fontFamily: 'Roboto',
                        color: '#333333',
                    }}>{this.props.item.description}</p>
                </div>
            </div>
        );
    }
}

class Row extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                { this.props.items.map(v => <PortfolioItem item={v} />) }
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <div>
                <h1>React Native Portfolio</h1>
                <h2>Tate Allen</h2>
                <p>This is a collection of small React Native experiments I've done to try out various concepts.</p>
            </div>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // backgroundColor: 'gray',
            }}>
                { Rows.map(r => <Row items={r} />) }
            </div>
        </div>
    );
}

export default App;
