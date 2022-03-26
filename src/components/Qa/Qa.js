import React from 'react';
import './Qa.css';

const Qa = () => {
    return (
        <div className='qa-container'>
            <div className="qa-items-container">
                <div className="qa-item">
                    <h3>How React Works?</h3>
                    <p>React is component based javascript library. When we run a react app, react convert all the componet into html code and inject into a html file. React Make has a virtual DOM. it tracks all the change in Browser DOM. If any componet has changed in browser DOM then virtual DOM compare with browser DOM and update the componet only. </p>
                </div>
                <div className="qa-item">
                    <h3>Different Between Props and State</h3>
                    <p>Props can pass properties from parent componet to a child component. Props data can't be changed. Props data can be variables or functions. On the other hand state determine the current condition of a component. State data can be change within the component. If change the state then the component will re render.</p>
                </div>
            </div>
        </div>
    );
};

export default Qa;