import React, { Component} from 'react';


import Goal from "./GoalMeter.js";



export default class Ingredientresults extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //stores the recipes from the apicall for breakfast/ also updates when confirm selection is clicked
        breakfast: null,
        //stores the recipes from the apicall for lunch/ also updates when confirm selection is clicked
        lunch: null,
        //stores the recipes from the apicall for dinner/ also updates when confirm selection is clicked
        dinner: null,

        
        //increases and decreses when consumed boxes are checked and unchecked
        consumed: 0,
        
      };
     
    }


    //method to only allow user to click on selection in Breafast div
    //method to only allow user to click on selection in Lunch div
    //method to only allow user to click on selection in Dinner div

    //method to update consumed either increase or decrease based on checks in the consumed box

    //method to update the breakfast/lunch/dinner states above once the confirm selection button is clicked. Need conditional to send an alert if the 


    componentDidMount() {
      //event listener connected to the find recipe button on the ingredient selector component. will make api call and set results to the breakfast/lunch/dinner states above
        // we need to make three separate fetch request one for breakfast lunch and dinner.

        // we need to see what are our response back from API.

        // 



      
    }
  
    render() {
      //conditional to update with render with goal meter <Goal {this.state.consumed}/>


      return (
        <div id={"results"}>
       <Goal/>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }