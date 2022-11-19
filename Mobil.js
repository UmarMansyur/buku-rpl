function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data");
        }, 2000);
    });
}
async function fetchData() {
    const data = await getData();
    console.log(data);
} 
fetchData();