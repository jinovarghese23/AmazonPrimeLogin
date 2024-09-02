import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className='banner-card'>
                <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg" alt="" />
                <div className='banner-text ms-3'>
                    <h4 className='text-light mt-5 fs-3'>Welcome to Prime Video</h4>
                    <p className='text-light mt-5 fs-4'>Join Prime to watch the latest movies, TV shows and award-
                        <br />
                        winning Amazon Originals</p>
                    <div className="d-grid gap-2 col-6 ms-3 mt-5">
                        <button class="btn btn-primary" type="button">Sign in to Prime</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home