console.log("running")
$.ajax({
  url: "https://api.gbif.org/v1/species/suggest",
  data: {
    q: "cannis"
  },
  method: "GET"
}).then(function(data) {
  console.log(data)
}).fail(function(err){
  console.error(err)
})

function getAnimalData(args) {
}

animalData("dog")