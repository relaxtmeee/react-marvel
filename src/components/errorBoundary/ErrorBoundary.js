import { useState } from "react";
import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ErrorBoundary = (props) => {

    const [error, setError] = useState(false);

    function componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        setError(true);
    }
    
  
    if (error) {
        return <ErrorMessage/>
    }
    return props.children;
    
}

export default ErrorBoundary;