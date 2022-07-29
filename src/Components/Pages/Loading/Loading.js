import React from 'react';

const Loading = () => {
    return (
        <div>
         <div className='vh-100 justify-center items-center'>
            {/* <button className="btn btn-square loading "></button> */}
            <img className='img-fluid mx-auto d-block' src="https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif" alt="" />
        </div> 
        </div>
    );
};

export default Loading;