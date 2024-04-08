console.log("Ismael");

const obtainValue = () => {
  let textInput = document.getElementById("inputSearch");
  let id = textInput.value;
  requestAPI(id);
};

const requestAPI = (id) => {
  const baseURL = "https://rickandmortyapi.com/api/";
  const endpoint = `character/${id}`;
  const url = `${baseURL}${endpoint}`;
  console.log(url);

  axios
    .get(url)
    .then((res) => printData(res.data))
    .then((err) => console.log(err));
};

const printData = (data) => {
  let response = document.getElementById("characterInfo");
  response.innerHTML = `
        <img src='${data.image}' class='image'>
        <h3 class="titles">NAME</h3>
        <h3>${data.name}</h3>
        <h3 class="titles">SPECIES</h3>
        <h3>${data.species}</h3>
        <h3 class="titles">ORIGIN</h3>
        <h3>${data.origin.name}</h3>
        <h3 class="titles">STATUS</h3>
        <h3>${data.status}</h3>
    `;
};
