// 1. Define a function that uses one parameter
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2. Define a function that uses two parameters
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3. Define a function with a parameter that has a default value
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
