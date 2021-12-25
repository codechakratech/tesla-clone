import React from 'react'
import Cars from './Cars'

function Home() {
    return (
        <div>
           <Cars bgimg="model-s.jpg" title="Model S" dec="Order Online for Tochless Delivery" />
           <Cars bgimg="model-y.jpg" title="Model Y" dec="Order Online For Touchless Delivery" />
           <Cars bgimg="model-3.jpg" title="Model 3" dec="Order Online For Touchless Delivery"  />
           <Cars  bgimg="model-x.jpg"  title="Model X" dec="Order Online For Touchless Delivery" />
           <Cars bgimg="solar-panel.jpg" title="Solar Panels" dec="Low Cost Solar Panels" />
           <Cars bgimg="solar-roof.jpg" title="Solar Roof" dec="Produce Clean Energy From Roof" />
           <Cars  bgimg="accessories.jpg" title="Accessories"/>
         
        </div>
    )
}

export default Home
