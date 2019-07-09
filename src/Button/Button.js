import React from 'react';


 class Button extends React.Component {
  render(props){
    let { title, task } = this.props
    return(
      <button onClick = { task }>{ title }</button>
    )}
}

export default Button;