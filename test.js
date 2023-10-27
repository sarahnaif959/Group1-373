let availableKeywords = [
  'java',
  'Software enginnering  ',
  'Operation system ',


];

const resultbox = document.querySelector(".result-box");

const inputBox = document.getElementById(".input-box");

 function inputBox2(value){
  let result = [];
  let input = value;
  if(input.length){
    result =availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick =selectInput(list)>" + list +"</li>";
  });

  resultbox.innerHTML = "<ul>"+ content.join('') +"</ul>";
}

function selectInput(list){
  value = list.innerHTML();
}





// let dataPro;
// if(localStorage != null){
//   datapro= JSON.parse(localStorage)
// }else{
//   dataPro = [
//     sarah , 
//     lol ,
//     nora ,
//     amal ,
//   ];
// }

// let searchMood = 'title';

// function getSearchMood(id)
// {
//   let search = document.getElementById('search');
//   if(id == 'searchTitle'){
//     search.placeholder='Search by title';
//   }
//   search.focus();
// }

// function searchData(value)
// {
//   if(searchMood == 'title')
//   {
//     for(let i =0 ; i< dataPro.lenght ; i++){
//       if(dataPro[i].includes(value)){
//         console.log(i)
//       }
//     }










//   }else{

//   }
// }