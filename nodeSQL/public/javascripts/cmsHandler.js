(() => {
  //cms handler stub
  console.log('cms handler loaded');

  let submitButton = document.querySelector('.add-data');
    targetForm = document.querySelector('form');

  function addRecord(e){
    e.preventDefault(); //kill the default submit action

    var formData = new FormData(targetForm);
      strData = {};

      for (var [key, value] of formData.entries()) {
        console.log(key, value);

        strData[key] = value;
      }
      // run a fetch statement and do a post
      let url ="/api";

      fetch(url, {
        method : 'post',
        headers : {
          'Accept' : 'application/json, text/plain, */*',
          'Content-type' : 'application/json'
        },

        body : JSON.stringify(strData)
      })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    // debugger;
  }

  submitButton.addEventListener('click', addRecord);

})();
