import React from "react";


const Rank = ({name, entries}) => {
    return (
                <div>
                    <div className='navy f3'>
                        {name}
                        
                    </div>
                    <div className='navy f3'>
                        { ', your current rank is...'}
                        
                    </div>
                    <div className='navy f1'>
                        {entries}
                    </div>
                </div>
                );
            } 
        
        export default Rank;


// class Rank extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: '',
//             entries: 0
//         }
//     };
    
//     // onNameInput = (event) => {
//     //     this.setState({name: JSON.stringify(this.props.name)})
//     // };
    

// render(){
//     //const {loadUser} = this.props;
//     return (
//         <div>
            
//             <div className='navy f3'>
//                 {JSON.stringify(this.state.name)}
//             </div>
//             <div className='navy f3'>
//                 { ', your current rank is...'}
//             </div>
//             <div className='navy f1'>
//                 {'1'}
//             </div>
//         </div>
//         );
//     } 
// }
// export default Rank;