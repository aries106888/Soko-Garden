import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
        <br />

        <section class="row text-center bg-warning text-light">
            <div class="col-md-4">
            <h2>About Us</h2>
            <p>We are located across the county. We offer quality and durable goods. We highly recommend visiting our shops.</p>
            </div>
            <div class="col-md-4 text-center text-light">
                <h2>Contact Us</h2>
            </div>
            <div class="col-md-4 text-center text-light">
                <h2>Stay Connected</h2>
                <a href="https://facebook.com">
                    <img src="/images/Facebook.png" alt="fb"  width={100}/>
                </a>
                <a href="https://instagram.com">
                    <img src="/images/IG.jpeg" alt="inst"  width={100}/>
                </a>
                <a href="https://x.com">
                     <img src="/images/X.avif" alt="x"  width={100}/>
                </a>
               
                <p>You can reach us through the following social media platfroms within weekdays.</p>

            </div>
        </section>

        <section class="row">
                <div class="bg-dark text-light text-center p-4">
                    <p>Developed by Modcom. &copy; 2026. All Rights Reserved.</p>
                </div>
        </section>

    </div>
  )
}

export default Footer