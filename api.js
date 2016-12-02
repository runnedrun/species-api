console.log("running")
$.ajax({
  url: "http://api.gbif.org/v1/species",
  method: "GET"
}).then(function(data) {
  console.log(data)
})