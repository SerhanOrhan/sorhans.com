import React from 'react'

function PopulurCategory() {
    return (
        <div className='popular-full-content w-100 col'>
            <div className="card popular-category-card">
                <div className='cat-icon w-100'>
                    <a href="#">
                        <img src="images/rastgele.jpg" className="card-img-top popular-image" alt="..." />
                    </a>
                </div>
                <div className="card-body cat-title">
                    <h3 className="card-title">
                        <a href="#">Card Title</a>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default PopulurCategory