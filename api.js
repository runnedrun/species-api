console.log("running")
$.ajax({
  url: "https://api.gbif.org/v1/species/suggest",
  data: {
    q: "cannis"
  },
  method: "GET",
  success: function() {    
    console.log(data)    
  }
})fail(function(err){
  console.error(err)
})
