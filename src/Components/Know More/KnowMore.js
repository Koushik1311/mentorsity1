import React from 'react';


const KnowMore = () => {
    return (
        <div className='m-10'>
            <h1 className='text-center font-normal text-5xl'>Know More About Our Community</h1>
            <div className='m-5 text-center'>
                <button class="text-2xl m-10 bg-orange-500 hover:bg-orange-500 text-gray-800  py-2 px-10 rounded inline-flex items-center">
               
                    <span>Our mentors</span>
                </button>
                <button class=" text-2xl m-10 bg-orange-300 hover:bg-orange-500 text-gray-800  py-2 px-10 rounded inline-flex items-center">
                   
                    <span>Supported brand</span>
                </button>
                <button class=" text-2xl m-10 bg-orange-300 hover:bg-orange-500 text-gray-800 py-2 px-10 rounded inline-flex items-center">
                    {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}
                    <span>Testimonials</span>
                </button>
            </div>
        </div>
    );
};

export default KnowMore;