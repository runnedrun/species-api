console.log("running")
$.ajax({
  url: "https://api.gbif.org/v1/species/suggest",
  data: {
    q: "cannis"
  },
  method: "GET",
  success: function(data) {         
    console.log(data[0])
  }
})
