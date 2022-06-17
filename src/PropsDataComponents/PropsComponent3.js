import React from 'react'
import PropsComponent4 from './PropsComponent4'
import PropsComponent5 from './PropsComponent5'

const PropsComponent3 = () => {
  const data2={name:'Alladi',address:"Hyderabad",designation:'FrontEnd'}
  return (
    <div>
        <h1>From PropsComponent3</h1>
      <PropsComponent4 name='Akhil' address="Hyderabad" designation='Developer'/>
      <PropsComponent5 value={data2}/>
    </div>
  )
}

export default PropsComponent3