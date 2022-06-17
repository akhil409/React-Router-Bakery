import React from 'react'

const PropsComponent1 = (props) => {
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.value[0].SNo}</td>
                    <td>{props.value[0].name}</td>
                    <td>{props.value[0].designation}</td>
                </tr>
                <tr>
                <td>{props.value[1].SNo}</td>
                    <td>{props.value[1].name}</td>
                    <td>{props.value[1].designation}</td>
                </tr>
                <tr>
                <td>{props.value[2].SNo}</td>
                    <td>{props.value[2].name}</td>
                    <td>{props.value[2].designation}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PropsComponent1