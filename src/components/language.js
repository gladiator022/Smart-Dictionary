
import React  from 'react';
import { Fragment as div } from 'react';
import { Component } from 'react';
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
            language:''
            //dictionaryFR:["bonjour","venir","partir" ,"bien","manger","boire","courir","pleurer","dormir"],
            //dictionaryEN:["good-morning","come","go","good","eat","drink", "run","cry","sleep"] 
        }
    
    
    handleinput = (even) =>{
        this.setState({
            word: even.target.value,
        })
    }

    handleselect = (even) =>{
        this.setState({
            language: even.target.value,
        })
     }

     translate = () =>{
         let dic = this.state.dic
         let word = this.state.word
         let key = Object.keys(dic)
         let value = Object.values(dic)
         let translated = ''
         for(let i=0;i<key.length;i++){
            if(word===key[i]){
                translated = value[i]
            }
            
            if(word===value[i]){ 
                translated = key[i]
            }
         }
         return <p>{translated}</p>
     }
     addtodic = ()=>{
         
     }

    render(){
        
        const inp = <input type='text' onChange = {this.handleinput} value = {this.state.word}></input>
        return(
                <div className='box'>
                    <h2> Translate  </h2>
                    <select  onChange = {this.handleselect} value = {this.state.language}>
                    <option value=""></option>
                        <option value="French">French-English</option>
                        <option value="English">English-French</option>
                    </select><br/>
                    {inp}
                    <button onClick={this.addtodic} >add to dictionary</button>
                    <div>
                    {this.translate()}
                    </div>
                </div>
            )
    } 
}

export default Language;
        