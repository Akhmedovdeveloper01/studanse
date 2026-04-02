import CustomIcon from '@/components/atoms/CustomTitleIcon/CustomIcon'
import { Trophy } from 'lucide-react'
import React from 'react'

export default function AdminInfo() {
  return (
    <div>
         <div className='flex justify-center'>
        <CustomIcon
          iconsize={30}
          className={"bg-[transparent] border-none"}
          iconColor={'text-[#F2BE00FF]'}
          icon={Trophy}
          font={700}
          title='Achievements'
        />  
      </div>
    </div>
  )
}
