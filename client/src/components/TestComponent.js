import React from 'react'

const TestComponent = ({movies}) => {
    return (
        <div>
            <h1>TEST</h1>
            <h1>{movies[0].title}</h1>
        </div>
    )
}

export default TestComponent
