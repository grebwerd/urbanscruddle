


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


function getWord(){
    
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
    return  '<h4>Result for ' + word + ' </h4>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }