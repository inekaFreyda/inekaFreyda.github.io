const jsonString = '{"name": "Ineke", "age": 24, "hobby": "Sleeping"}';

const jsonObject = JSON.parse(jsonString);

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 