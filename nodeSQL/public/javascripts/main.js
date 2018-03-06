(() => {
  // variables always on top of js file
  let getButtons = document.querySelectorAll('.getButton'),
      postButton = document.querySelector('.postButton'),
      deleteButton = document.querySelector('.deleteButton');

  function fetchData(){
    let url = "api/" + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function deleteRecord() {
    let url = "api/" + this.id;

    fetch(url, {method : 'delete'})
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function insertRecord(){
    let url = "api/" + this.id;

    fetch(url, {
      method : 'post',
      headers : {
        'Accept' : 'application/json, text-plain, */*',
        'Content-type' : 'application/json'
      },

      body : JSON.stringify({
        model : "F56",
        modelName : "Mini Cooper F56",
        pricing : "22, 190",
        modelDetails : "lots and lots of text",
        imgPath: "F56.jpg"
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getButtons.forEach (button => button.addEventListener('click', fetchData, false));
  deleteButton.addEventListener('click', deleteRecord, false);
  postButton.addEventListener('click', insertRecord, false);

})();
