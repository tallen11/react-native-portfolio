import React from 'react';

export default {
    name: 'Coffee Shop Demo',
    webm: 'coffeeshopdemo.webm',
    downloadLink: 'https://github.com/tallen11/react-native-coffee-shop-demo',
    description: (
        <p>
            {`A mockup of a coffee shop app, inspired by this `}
            <a href='https://dribbble.com/shots/8245907-Coffee-House-App-Design'>Dribble design</a>{`.
             I was mainly intrigued by the vertical menu items on the left and wanted to implement it
             in React Native. Clearly it can be done, but it's not too robust as rotating text (or any
             type of view), doesn't account for the normal layout rules, so positioning and sizing 
             rotated views can be difficult and needs fine tuning. Coffee names taken from my favorite 
             brand of coffee `}
            <a href='https://counterculturecoffee.com/'>Counter Culture Coffee</a>{'.'}
            <br/>
            <br/>
            {`I was also able to experiment with some nice animations as well as displaying a Map with custom
            markers.`}
            <br/>
            <br/>
            {`This project uses TypeScript and React Native 0.61.`}
            <br/>
            <br/>
            <a href="https://icons8.com/icons/set/menu-2--v1">Menu Vertical icon</a> by <a href="https://icons8.com">Icons8</a>
        </p>
    ),
};
