import React, {Component}  from 'react';
// import Serieslist from '..serieslist/serieslist'


class Series extends Component{
    state = {
        series : []
      }
      
      onchangeSeriesEvent = e =>{

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series : json}));
        console.log(e)
       
      }
     render(){
         return(
           

             <div>the length = {this.state.series.length}
             <div>
             <input type="text" onChange={this.onchangeSeriesEvent} />
           </div>
             <ul>             
               {this.state.series.map(series=> (
                 <li>{series.show.name}</li>
               ))}
             </ul>
             </div>
         )
     }
}

export default Series;