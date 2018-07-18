

const baseURL = "http://api.urbandictionary.com"
const randomUrl = baseURL + "/v0/random";

function getRandomWord(){
    var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';
    axios.get(randomUrl)
    .then(function(response){
        resultElement.innerHTML = generateSuccessHTMLOutput(response)
    })
    .catch(err=>console.log(err));
}


function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }