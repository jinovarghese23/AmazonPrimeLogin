import React from 'react'

function Footer() {
    return (
        <>
            <div style={{ height: '150px', backgroundColor: 'black' }}>
                <div class="d-flex justify-content-center">
                    <img className='d-flex justify-content-center align-center mt-4' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
                </div>
                <p className='d-flex justify-content-center text-align-center' style={{ color: 'white' }}>
                    <a style={{textDecoration:'none',color:'blue'}} href="">Terms and Privacy Notice</a>
                    <a style={{textDecoration:'none',color:'blue'}} className='ms-4' href="">Send us Feedback</a>
                    <a style={{textDecoration:'none',color:'blue'}} className='ms-4' href="">Help</a>
                </p>
                <p className='d-flex justify-content-center text-align-center' style={{ color: '#8197a4' }}>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </>
    )
}

export default Footer