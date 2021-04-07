import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='/'/> 
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium earum voluptatem corrupti distinctio a saepe facilis sint. Sequi accusamus repellat iusto vero qui illo provident perferendis expedita mollitia soluta.</p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About
