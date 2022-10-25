const newFunction = async () => {
    const response = await fetch("files/tech.json");
    const data = await response.json();
    return data;
};

console.log(1);

newFunction()
    .then(data => console.log(data));

console.log(2);