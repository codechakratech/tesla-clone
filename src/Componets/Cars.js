import React from 'react'

function Cars({bgimg,title,dec}) {
    return (
        <div className="carSection" style={{backgroundImage: `url("/images/${bgimg}")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}}>
           
            <div className="carModel">
                <div data-aos="fade" >{title}</div>
                <p data-aos="fade">{dec}</p>
            </div>

            <div className="buttonGrp">
                <button className="btn1">Custome Order</button>
              {dec &&  <button className="btn2">existing inventory</button> } 
                
            </div>
        </div>
    )
}

export default Cars
