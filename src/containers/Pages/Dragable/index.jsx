import React, { Component } from 'react';
import './style.scss';
// export default class FriendLink extends Component 
// export default class Dragable extends Component {
//   render() {
//     return (
//       <div>
//         dragable
//       </div>
//     )
//   }
    
// }
function Dragable(props){
  return (
    <div>
      dragable + {props.name}
    </div>
  )
}
export default Dragable