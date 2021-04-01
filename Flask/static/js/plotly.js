d3.json("/2017data").then(data => {
    console.log(data);
    var points = []
    var rebounds = []
    var assists = []
    var picks = []

    data.forEach(x => {
        Object.entries(x).forEach(([key, value]) => {
            if(key === "PTS") {
                points.push(value);
            }else if (key === "TRB") {
                rebounds.push(value);
            }else if (key === "AST") {
                assists.push(value);
            }else if (key === "pick") {
                picks.push(value)
            }
        })
    })
    
    console.log(picks);

    var trace1 = {
        x: picks,
        y: rebounds,
        name: 'Rebounds',
        type: 'bar'
      };
      
      var trace2 = {
        x: picks,
        y: assists,
        name: 'Assits',
        type: 'bar'
      };

      var trace3 = {
        x: picks,
        y: points,
        name: 'Points',
        type: 'bar'
      };
      
      
      var data = [trace1, trace2, trace3];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('stacked1', data, layout);
});


// $.getJSON("/2017data", function(data){
//     console.log("HI");
//     console.log(data);
// }

// );
// var jqxhr = $.getJSON( "/2017data", function() {
//     console.log( "success" );
//   })
//     .done(function() {
//       console.log( "second success" );
//     })
//     .fail(function() {
//       console.log( "error" );
//     })
//     .always(function() {
//       console.log( "complete" );
//     });
//   // Perform other work here ...
//   // Set another completion function for the request above
//   jqxhr.always(function() {
//     console.log( "second complete" );
//   });