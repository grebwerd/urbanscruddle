var _ = require('underscore');
var axios = require('axios')
const baseApiURL = "http://api.urbandictionary.com";
const apiURLDefine = baseApiURL + "/v0/define?term=";
const randomUrl = baseApiURL + "/v0/random";


function getRandomWord(){
    var resultElement = document.getElementById('getResult1');
  
  resultElement.innerHTML = '';
    axios.get(randomUrl)
    .then(function(response){
       console.log(response);
        resultElement.innerHTML = generateSuccessHTMLOutput(response)
    })
    .catch(err=>console.log(err));
}


global.getWord = function (){
    var resultElement = document.getElementById('getResult1');
    
    resultElement.innerHTML = '';
    var word = document.getElementById('defineWord').value
      axios.get(apiURLDefine+word)
      .then(function(response){
         console.log(response);
          resultElement.innerHTML = generateSuccessHTMLOutput(response, word)
      })
      .catch(err=>console.log(err));
}

function generateSuccessHTMLOutput(response, word) {
var maxThumbsUpDefinition = _.max(response.data.list, 'thumbs_up');
    return  '<h4>Result for: ' + word + ' </h4>' + 
            '<pre>'+ JSON.stringify(maxThumbsUpDefinition, null, '\t') + '</pre>'
  }


 global.clearField = function() {
        document.getElementById("defineWord").value = "";
  }

  global.keyPressEnter = function(event) {
    if(event.keyCode === 13){
        document.getElementById("submitButton").click();
    }
  }

  