/** When we run the project , this file will be seen first **/
/*We make importing for React libraries here
and react-dom which can reach the id="root" at index.html in public folder
*/
import react from 'react'
import ReactDOM from 'react-dom';
import App from './App';

/** When you call any component , call it as a tag **/
ReactDOM.render(<App/> , document.getElementById('root'));



