import React from 'react';
import Milestone from './Milestone';

function Timeline(props) {
    return (
        <div>
            <div className="h-3 bg-gray-300 rounded-full ml-24 mt-40 flex items-center gap-108 flex-grow px-14">
                <Milestone/>
                <Milestone/>
                <Milestone/>
                <Milestone/>
            </div>
        </div>
    );
}

export default Timeline;