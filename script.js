// names = "Silvanus Misiga Okindo".toLocaleLowerCase()
// console.log(names.includes("Okindo"))

// console.log(names.search("s"))
// console.log(names[0]);

// console.log(names.slice(6, 8).toUpperCase());

// if (names.startsWith("S".toLocaleLowerCase())) {
//     console.log(names.replace("Misiga".toLocaleLowerCase(), ''))
// }

// const schools = ['itumbe', 'tambacha', 'nyakoora']

// let search = document.getElementById('search')

// let btn = document.getElementById('btn')
// const searched = document.getElementsByClassName("searched")[0]

// btn.addEventListener('click', ()=> {
//     const searchedSchool = search.value
//     for (let i = 0; i < schools.length; i++) {
//         if (schools[i] === searchedSchool) {
//             console.log(searchedSchool)
//             searched.textContent = searchedSchool
//         } else {
//             searched.textContent = "No item found"
//         }
//     }
// })

const schools = ["itumbe", "tambacha", "nyakoora"];

let search = document.getElementById("search");
let resultsContainer = document.getElementById("results");

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();

  if (searchTerm.trim() === "") {
    resultsContainer.innerHTML = ""; // Clear results if search term is empty
    return;
  }

  const matchingSchools = schools.filter((school) =>
    school.toLowerCase().includes(searchTerm)
  );
  displayResults(matchingSchools, searchTerm);
});

function displayResults(results, searchTerm) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "No matching schools found.";
    return;
  }

  results.forEach((result) => {
    const resultElement = document.createElement("p");
    resultElement.innerHTML = highlightMatchingChars(result, searchTerm);
    resultsContainer.appendChild(resultElement);
  });
}

function highlightMatchingChars(result, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return result.replace(regex, "<strong>$1</strong>");
}
