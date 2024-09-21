import React from 'react'
import Faq from './Faq'
import faqdatas from './faqdata'

const FaqSection = () => {
  return (
    <div className=' m-5'>
        <h1 className='text-3xl font-bold select-none'>React Frequently Asked Questions</h1>

        {
            faqdatas.map((faqdata)=>(
                <Faq key={faqdata.id} faqdatas = {faqdata} />
                // console.log(faqdata)
            ))
        }
    </div>
  )
}

export default FaqSection
