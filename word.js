// requiring the letter.js file
var Letter = require('./letter.js');

var alphabet = /[a-z] | [0-9]/i;

function Country(target){
    this.target = target;
    this.targetCountry = target.toUpperCase().split('');

    this.createDisplayCoun = function(){
        var countryArray = [];

        for(var i =0; i < this.target.length; i++){
            if(alphabet.test(this.target[i])){
                countryArray.push(new Letter(this.target[i].toUpperCase()));
            } else{
                countryArray.push(this.target[i]);
            }
        }
        return countryArray;
    };

    this.displayCountry = this.createDisplayCoun();
    this.checkAlphaInput = function(letter){
        var youIsRight = false;

        for(var index in this.targetCountry){
            if(letter.toUpperCase()=== this.targetCountry[index]){
                this.displayCountry[index].guessed= true;
                youIsRight = true;
            }
        }
        return youIsRight;
    };

    this.guitarGetCoun = function(){
        return this.targetCountry.join('');
    };
}

