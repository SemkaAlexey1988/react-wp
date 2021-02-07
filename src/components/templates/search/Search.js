import React, { Component } from 'react'


export default class Search extends Component {

constructor() {
    super();
        this.state = {
        searchUrl: '',  
        formStatus: false
        };
      }  
      
      
  
changeInput() {   
      }   
submitFormSearch(event) {
    event.preventDefault()    
window.location = `https://${window.location.hostname}?s=${this.search.value}`  
}  
openForm() { 
this.setState({
formStatus: true    
})
}  
closeForm() { 

this.setState((state) => {
        return{    
        formStatus: !state.formStatus
        } 
        })  
}  
    


    render(){
let { formStatus } = this.state        
        return(

<div className="search">
<form onSubmit={this.submitFormSearch.bind(this)} className={formStatus ? `show` : `hide`} onMouseLeave={this.closeForm.bind(this)}>
<input ref={(search) => this.search = search } tupe="text"  onKeyDown={this.changeInput.bind(this)} className="search__input"/>
<button className="search__button"></button>    
</form>
<button className={formStatus ? `search__open hide` : `search__open show`}  onMouseEnter={this.openForm.bind(this)} ></button>   
</div>
        )     
    }    

}

