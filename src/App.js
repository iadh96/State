import React from 'react';
import './App.css';

 class App extends React.Component{

    state={Person:[{FullName:'Iadh',bio:'Cv',imgSrc:'',Profession:'Developer'}],toggle:false,count:0};
    handelToggle=()=>{this.setState({toggle:!this.state.toggle})}
    componentDidMount(){
      this.timerId=setInterval(()=>this.setState({count:this.state.count+1}),1000);}
    
        render() {
         
      return(
        <div>

<button onClick={this.handelToggle}> {this.state.toggle ?'hide':'Show'}</button>




{this.state.toggle ?

<>
  {this.Person.map(el=><div>
<h1>{el.FullName}</h1>
<h1>{el.bio}</h1>
<h1>{el.imgSrc}</h1>
<h1>{el.Profession}</h1>
</div>)}
{this.state.count}
</>
:null }    
</div> )
        }
 
      }

export default App;
