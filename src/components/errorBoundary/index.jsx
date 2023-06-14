import React from "react";
import "./style.css"
import Title from "../title";

class ErrorBoundary extends React.Component{
  state = {
    error: null
  }

  static getDerivedStateFromError(error){
    return { error };
  }

  render(){
    const { error } = this.state;
  
    if(error){
      return(
        <div className="error-wrapper">
          <h2 className="error-title">Error</h2>
          <hr/>
          <span className="error-message">{error.message}</span>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;