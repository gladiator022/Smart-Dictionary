
import React,{Component , Fragment }  from 'react';
//import Textbox from './Textbox'



class Language extends Component{


        state = {
            word:'',
            dic: {
                bonjour :"good-morning",
                venir :"come",
                partir :"go",
                bien:"good",
                manger:"eat",
                boire:"drink"
            },
            language:'',
            add:false,
            translated:'',
            newword:'',
            select: true
        }
    
    
    handleinput = (even) =>{
        this.setState({
            word: even.target.value,
        })
    }

    handleselect = (even) =>{
        if(even.target.value !== ''){
            this.setState({
                language: even.target.value,
                select:false
            }) 
        }
     }

     translate = (e) =>{
         let dic = this.state.dic
         let word = this.state.word
         let key = Object.keys(dic)
         let value = Object.values(dic)
         for(let i=0;i<key.length;i++){
            if(word===key[i]){
                this.setState({
                    translated : value[i]
                }) 
            }
            
            if(word===value[i]){ 
                this.setState({
                    translated : key[i]
                })
            }
         }
     }
     addtodic = ()=>{
         this.setState({
             add:true
         })
     }
     handlenewword = (e)=>{
        this.setState({
            newword:e.target.value
        })
     }
     addword = ( )=> {
         let word = this.state.word
         let newword = this.state.newword
        this.setState((prevState) => ({
            
            dic: {                   
                ...prevState.dic,    
                [word] : newword   
            },
            add:false
        }))
     }

    render(){
        var form
        if(!this.state.add){
            form = <button className='form-control' disabled={this.state.add} onClick={this.addtodic} >add to dictionary</button>
        }
        else{
            form = <Fragment>
                        <label className='form-control'>meaning of new word </label>
                        <input className='form-control' disabled={!this.state.add} onChange={this.handlenewword} type='text'></input>
                        <button className='form-control' disabled={!this.state.add} onClick={this.addword}>Add</button>
                    </Fragment>
        }
        

        const inp = <input className='form-control' disabled = {this.state.select} type='text' onChange = {this.handleinput} value = {this.state.word}></input>
        return(
                <div className='box'>
                    <h2> Smart Translator  </h2>
                    <select className='form-control'  onChange = {this.handleselect} value = {this.state.language}>
                    <option value=""></option>
                        <option  value="Traduire en Anglais">French-English</option>
                        <option  value="Translate to French">English-French</option>
                    </select><br/>
                    {inp}<br/>
                    {!this.state.select? <button  className='form-control' onClick={this.translate} >{ this.state.language}  </button>:<></>}
                    <div className='translated'>
                    {this.state.translated}
                    </div>
                    {form}
                </div>
            )
    } 
}

export default Language;
        