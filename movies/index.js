const moviesData = async (prop) => {
  const res = await axios.get(
    `http://www.omdbapi.com/?apikey=f9d6b91f&s=${prop}`
  );

  if(res.data.Error){
    return [];
  }
  return res.data.Search;
  //   i=tt3896198&
};
// moviesData();
/*let timeOutId;
const onInput = function (e) {
  if (timeOutId) {     // in first input timeOutId is undefined 
    clearTimeout(timeOutId);
  }

 timeOutId = setTimeout(() => {
    moviesData(e.target.value);
  }, 1000);
};
*/

// use deboucing

const debounce = (func, delay) => {
  let setTimeoutId;
  return (...args) => {
    // func has multiple arguments so collet all into array using rest
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay); // apply extracts all elements of array and invoke the function
  };
};

const root = document.querySelector('.container');
root.innerHTML = `
<label><b>Search For a Movie </b> <label>
<input class="input"/>
<div class = "dropdown">
  <div class = "dropdown-menu">
    <div class= "dropdown-content results"> </div>
  <div>
<div>
`;
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector('.results')
const onInput = async(e) => {  
  const movies = await moviesData(e.target.value);
  // const div1 = document.querySelector('#container1');
  dropdown.classList.add('is-active');

  for(const movie of movies){
    const option = document.createElement('a');
    option.classList.add('dropdown-item');
    // const div = document.createElement('div');
    option.innerHTML = `<img src="${movie.Poster}"/>
    <h1>${movie.Title}</h1>
    `

    
    resultWrapper.appendChild(option)
  }

  
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 1000));
// console.log(input.target.value);
