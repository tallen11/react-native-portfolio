import React from 'react';

export default {
    name: 'Astronomen',
    webm: 'astronomen.webm',
    downloadLink: '#',
    description: (
        <p>
            {`This was a small TypeScript project that pulls data from an API containing
            information on any astronauts currently in space. The API can be found `}
            <a href="http://open-notify.org/Open-Notify-API/People-In-Space/">here</a>
            {`. It only has one endpoint that returns an array of objects containing the name and
            occupied spacecraft of the astronaut. Unfortunately no further information is
            provided by the API and placeholder data is used in the detail view.`}
            <br/>
            <br/>
            {`The main purpose of this experiment was to play around with gestures more.
             The slide up, detail view that appears when an astronaut is tapped is dismissed
             by swiping the view away, but it is fully interactive. I also used this as an 
             opportunity to practice my design skills. I think the app came out looking pretty nice.`}
            <br/>
            <br/>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
        </p>
    ),
};