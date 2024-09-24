import React from 'react'
import ClassProps2 from './props2';

class ClassProps extends React.Component{
    render()
    {
        let name2 = {name : "Beula",age : 20}
        return(
            <div>
                <h1>Your name is {this.props.name}</h1>
            

            </div>
        );
    }
}


export default ClassProps ;