import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link'
import axios from 'axios'
// import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

class App extends React.Component {
    static getInitialProps({store}) {
       return 1
    }
    constructor(props) {
        super(props);
        this.state={
            data1:[]
        }
    }

    
   
    componentDidMount(){
// this.getData()
    }

    getData(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
            // console.log(res.data);
            this.setState({data1:res.data})
           
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
    render() {
        // console.log(this.props);
        let aa=  this.state.data1 ? this.state.data1.map((dt,i)=>{
            <p key={i}>{dt.title}</p>
        }):""
        
        return (
            <div>
                {/* <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button> */}
                <h1>{this.props.counter}</h1>
                <p className='p'>welcome</p>
               <div> {aa}</div>

                <Link href='/about'><a>About</a></Link>
            </div>
        );
    }
}

// App.getInitialProps = async  function(){
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//    const data = await res.json()
//         // axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
//         //     console.log(res.data);             
//         //     // this.setState({data1:res.data})
//         // return {dt : res.data}
//         console.log(data);
        
//              return {dt : data}  
//         // }).catch(err=>{
//         //     console.log(err);            
//         // })
// }

const mapStateToProps = state => ({
    counter: state.st
});

const mapDispatchToProps = {
    // incrementCounter: incrementCounter,
    // decrementCounter: decrementCounter,
};

// export default App
 export default connect(mapStateToProps, mapDispatchToProps)(App);