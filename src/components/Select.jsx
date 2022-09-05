import React from 'react';
import beach1 from '../photo/beach1.png';
import beach2 from '../photo/beach2.png';
import beach3 from '../photo/beach3.png';
import beach4 from '../photo/beach4.png';
import beach5 from '../photo/beach5.png';
import beach6 from '../photo/beach6.png';
import beach7 from '../photo/beach7.png';
import beach8 from '../photo/beach8.png';
import beachbg from '../photo/beachbg.png';
import SelectsCard from './SelectsCard';



    const Select = () => {
        return (
          <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
          <SelectsCard bg={beach6} text='Bora Bora' />
          <SelectsCard bg={beach7} text='Maldives' />
          <SelectsCard bg={beach3} text='Antigua' />
          <SelectsCard bg={beach2} text='Cozumel' />
          <SelectsCard bg={beachbg} text='howaley' />
          <SelectsCard bg={beach8} text='Jamaica' />
          <SelectsCard bg={beach4} text='Key West' />
          <SelectsCard bg={beach5} text='hwe' />
          <SelectsCard bg={beach1} text='Boraw ' />
          
              
          </div>
        )
      }

export default Select