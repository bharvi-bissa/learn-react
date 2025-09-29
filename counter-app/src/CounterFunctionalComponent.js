import React, { useState } from 'react';

const CounterFunctionalComponent = (props) => {
    const [count, setCount] = useState(props.initialValue || 0);

    // const increment = () => setCount(prev => prev + 1);
    // const decrement = () => setCount(prev => prev - 1);

    const increment = () => {
        setCount(prev => {
            return prev + 1
        });
    }

    const decrement = () => {
        setCount(prev => {
           return prev - 1
        });
    }

    return React.createElement('div', { style: { textAlign: 'center' } },
        React.createElement('h2', null, `Count: ${count}`),
        React.createElement(
            'button',
            { onClick: decrement, style: { marginRight: '10px', fontSize: '50px' } },
            '-'
        ),
        React.createElement(
            'button',
            { onClick: increment, style: { fontSize: '50px'} },
            '+'
        )
    );
};

export default CounterFunctionalComponent;
