// The Primitive Data types - 7
// The Non-Primitive Data types - object
// Check type of variable
console.log(typeof(5));

// Exceptions
console.log(typeof(null)); //object
console.log(typeof(console.log)); //function


// 1. string
const favoriteLanguage = "JS";
console.log(favoriteLanguage);
// 2. number
const numberOfExperience = 1;
console.log(numberOfExperience);
// 3. boolean
const knowledgeExpertLevel = false;
console.log(knowledgeExpertLevel);
// 4. null empty or uknow
const experienceWithTypScrip = null;
console.log(experienceWithTypScrip);
// 5. undefined Value has not been assigned
const currentCompany;
console.log(currentCompany);
// 6. object
const portfolio ={
    favoriteLanguage: "JavaScript",
    numberOfExperience: 2,
    knowledgeExpertLevel: true,
}
console.log(portfolio);
// 7. symbol Needed to create unique object keys
const id = Symbol('id')
console.log(id);
// 8. bigint huge number !>2^53
const bigIntNumber = BigInt(15);
console.log(bigIntNumber);
