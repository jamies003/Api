
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('button').addEventListener("click", loadText);

  function loadText() {
    // console.log ('madeit');

    // alert ('I am a ginue in a bottle!');

    // 1. Step number 1 in the XHR API process
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
    const xhr = new XMLHttpRequest ()

    // troubleshooting
    console.log('1.xhr = new');
    console.log(xhr.readyState); // should == 4
    console.log(xhr.status); // 200 - 299
    console.log('-----------');


    // 2. Step num 2
    // iniatlize a request 
    // The XMHttpRequest method open() initializes a newly created request or re-initialize an exsitin one 
    // XMhttpRequeest.open(method, url,[, async[,user[,password]]])
    // method: the HTTPxzcxz43l;';
    // request method to use, such as "Get", "Post", "Put", "Delete", etc 
  
    xhr.open('Get', 'https://api.github.com/users', true); 
    // if step 3 are 4 successful the url data will be stored in xhr.responseTextr 
    
    console.log('1.xhr = open');
    console.log(xhr.readyState); // should == 4
    console.log(xhr.status); // 200 - 299
    console.log('-----------');


    // 3. Step Number
    // The XMLHttpRequestEventTarget.onload is the function called when an XMlHttpRequest transaction completes

    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        const responseJSON = JSON.parse(this.responseText)
        // typical action to be performed when the document is ready:

        console.log(responseJSON);
        document.getElementById('dataOutput').innerText = responseJSON[0].login;
        let html = `<ul><li>${responseJSON[0].login}</li></ul>`;
        document.getElementById('dataOutput').innerHTML

          
          // troubleshooting
        console.log('1.xhr = onload');
        console.log(xhr.readyState); // should == 4
        console.log(xhr.status); // 200 - 299
        console.log('-----------');

      }else if (this.status === 404) {
        document .getElementById("dataOutput").innertext = "404 Error: File Not Found";

      }

    }
     // 4. Step num
     xhr.send();

     console.log('1.xhr = send');
     console.log(xhr.readyState); // should == 4
     console.log(xhr.status); // 200 - 299
     console.log('-----------');



    }

});

// XMLHttpRequest.open("Get", "dataOutput", true);
  
