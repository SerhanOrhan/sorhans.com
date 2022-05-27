import React from 'react'
import SectionCardSm from './cards/SectionCardSm'
import SectionCardXL from './cards/SectionCardXL'
import PopulurCategory from './popularCategory/PopulurCategory'

function Section() {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className="row image-content">
        <div className="col-sm p-0">
          <SectionCardXL />
        </div>
        <div className="col-sm p-0">
          <div className='row m-0'>
            <SectionCardSm />
            <SectionCardSm />
            <SectionCardSm />
            <SectionCardSm />
            <SectionCardSm />
            <SectionCardSm />
          </div>
        </div>
      </div>
      <div className='container p-0'>
        <div className="row m-0 p-0">
          <PopulurCategory />
          <PopulurCategory />
          <PopulurCategory />
          <PopulurCategory />
          <PopulurCategory />
          <PopulurCategory />
        </div>
      </div>
    </div>
  )
}

export default Section