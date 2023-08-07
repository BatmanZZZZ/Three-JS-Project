import React from 'react'
import CustomButton from './CustomButton'

const AIpicker = ({prompt , setprompt , generatingimg , handlesubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea'
      placeholder='Ask AI .....'
      rows={5}
      value={prompt}
      onChange={(e) => setprompt(e.target.value)}
      >

      </textarea>
      <div className='flex flex-wrap gap-5'>
        {generatingimg ?(
          <CustomButton
          type="outline"
          title="Asking AI"
          customStyles="text-sm"
          />
        ):(
          <>
          <CustomButton
          type="outline"
          title="AI Logo"
          customStyles="text-sm"
          handleClick={() => handlesubmit('logo')}
          />
          <CustomButton
          type="outline"
          title="AI Full"
          customStyles="text-sm"
          handleClick={() => handlesubmit('full')}
          />
          </>

          
        )

        }
      </div>
    </div>
  )
}

export default AIpicker