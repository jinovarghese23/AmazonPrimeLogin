import React from 'react'
import './Rentals.css'

function Rentals() {
  return (
    <>
    <div className='banner-card'>
                <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--qzC9-2Xe--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg" alt="" />
                <div className='banner-text ms-3'>
                    <h4 className='text-light mt-5 fs-3'>Movie rentals on Prime Video</h4>
                    <p className='text-light mt-5 fs-4'>Early Access to new movies, before digital subscription</p>
                    <div className="d-grid gap-2 col-6 ms-3 mt-3">
                        <button class="btn btn-primary" type="button">Rent Now</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Rentals