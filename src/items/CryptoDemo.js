import React from 'react';

export default {
    name: 'Crypto Demo',
    webm: 'cryptodemo.webm',
    downloadLink: 'https://github.com/tallen11/react-native-crypto-demo',
    description: (
        <p>
            {`This little demo project pulls cryptocurrency data from an `}
            <a href='https://min-api.cryptocompare.com/'>API</a>
            {` and
            displays it in a paging, card-style UI. The UI design was heavily inspired
            by this Dribbble `}
            <a href='https://dribbble.com/shots/7302294-Cryptocurrency-wallet'>post</a>
            <br/>
            <br/>
            {`The purpose of this project was to experiment with SVGs as well as animating them.
            All of the curvy, graph components are SVG paths that act as rough graphs displaying
            historical pricing trends of the given cryptocurrency, pulled from the API. As you
            can see in the video, the graphs are animated (using the native driver for high performance) 
            and give a pleasing aesthetic.`}
            <br/>
            <br/>
            {`This project uses TypeScript and React Native 0.61.`}
        </p>
    ),
};
