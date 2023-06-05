import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';

const Blog = () => {
    return (
        <div>
            <HeaderBanner>Blog Page</HeaderBanner>
            <div className='container mx-auto my-5'>
                <div className='my-3 bg-light p-4 rounded'>
                    <h4 className='fw-bold text-dark'>1. When should we use context API?</h4>
                    <p className='text-secondary'>We use context API whenever we need to pass data from lower level to upper level. Using props passing data to multiple to level or multiple components is pretty hard, if the number of components or level is getting more then it will be hard to pass data using props. So then we can easily pass data by using Context API.</p>
                </div>
                <div className='my-3 bg-light p-4 rounded'>
                    <h4 className='fw-bold text-dark'>2. What is Custom hooks in React?</h4>
                    <p className='text-secondary'>Custom hooks are basically reuseable functions that can be use in a React app. If we need to use any unique function through a project then we can easily create Custom hook and can use the wherever we need to use the function.</p>
                </div>
                <div className='my-3 bg-light p-4 rounded'>
                    <h4 className='fw-bold text-dark'>3. What is UseRef?</h4>
                    <p className='text-secondary'>UseRef is a built-in React hook that accepts one argument as the initial value and returns a reference. We can store data in the reference. The data can be used later.</p>
                </div>
                <div className='my-3 bg-light p-4 rounded'>
                    <h4 className='fw-bold text-dark'>4. What is useMemo?</h4>
                    <p className='text-secondary'>UseMemo is a built-in React hook that allows us to memoize the result of a function or a value and preventing unnecessary recalculations or re-renders. useMemo is a function that returns a memoized value of a passed in resource-intensive function.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;