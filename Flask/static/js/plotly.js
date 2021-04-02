// 2017 data
d3.json("/2017data").then(data => {
    console.log(data);
    var points2017 = []
    var rebounds2017 = []
    var assists2017 = []
    var picks2017 = []
    var blks2017 = []
    var stls2017 = []

    data.forEach(x => {
        Object.entries(x).forEach(([key, value]) => {
            if(key === "PTS") {
                points2017.push(value);
            }else if (key === "TRB") {
                rebounds2017.push(value);
            }else if (key === "AST") {
                assists2017.push(value);
            }else if (key === "pick") {
                picks2017.push(value)
            }else if (key === "BLK") {
                blks2017.push(value)
            }else if (key === "STL") {
                stls2017.push(value)
            }
        })
    })
    
    // console.log(picks);

    var trace1 = {
        x: picks2017,
        y: rebounds2017,
        name: 'Rebounds',
        type: 'bar'
      };
      
      var trace2 = {
        x: picks2017,
        y: assists2017,
        name: 'Assists',
        type: 'bar'
      };

      var trace3 = {
        x: picks2017,
        y: points2017,
        name: 'Points',
        type: 'bar'
      };

      var trace10 = {
          x: picks2017,
          y: blks2017,
          name: 'Blocks',
          type: 'bar'
      }

      var trace11 = {
        x: picks2017,
        y: stls2017,
        name: 'Steals',
        type: 'bar'
    }
      
      
      var data = [trace1, trace2, trace3, trace10, trace11];
      
      var layout = {
          barmode: 'stack',
          yaxis: {
              title: {
                  text: 'Stat Count'
              }
          },
          xaxis: {
            title: {
                text: 'Draft Pick',
                },
            tickmode: "linear",
            tick0: 1,
            dtick: 4
            }
          }
      
      Plotly.newPlot('stacked1', data, layout);
});

// 2018 data
d3.json("/2018data").then(data => {
    console.log(data);
    var points2018 = []
    var rebounds2018 = []
    var assists2018 = []
    var picks2018 = []
    var blks2018 = []
    var stls2018 = []

    data.forEach(x => {
        Object.entries(x).forEach(([key, value]) => {
            if(key === "PTS") {
                points2018.push(value);
            }else if (key === "TRB") {
                rebounds2018.push(value);
            }else if (key === "AST") {
                assists2018.push(value);
            }else if (key === "pick") {
                picks2018.push(value)
            }else if (key === "BLK") {
                blks2018.push(value)
            }else if (key === "STL") {
                stls2018.push(value)
            }
        })
    })
    
    // console.log(picks);

    var trace4 = {
        x: picks2018,
        y: rebounds2018,
        name: 'Rebounds',
        type: 'bar'
      };
      
      var trace5 = {
        x: picks2018,
        y: assists2018,
        name: 'Assists',
        type: 'bar'
      };

      var trace6 = {
        x: picks2018,
        y: points2018,
        name: 'Points',
        type: 'bar'
      };

      var trace12 = {
        x: picks2018,
        y: blks2018,
        name: 'Blocks',
        type: 'bar'
    }

    var trace13 = {
      x: picks2018,
      y: stls2018,
      name: 'Steals',
      type: 'bar'
  }
      
      
      var data2 = [trace4, trace5, trace6, trace12, trace13];
      
      var layout2 = {
        barmode: 'stack',
        yaxis: {
            title: {
                text: 'Stat Count'
            }
        },
        xaxis: {
          title: {
              text: 'Draft Pick',
              },
            tickmode: "linear",
            tick0: 1,
            dtick: 4
          }
        }
      
      Plotly.newPlot('stacked2', data2, layout2);
});

// 2019 data
d3.json("/2019data").then(data => {
    console.log(data);
    var points2019 = []
    var rebounds2019 = []
    var assists2019 = []
    var picks2019 = []
    var blks2019 = []
    var stls2019 = []

    data.forEach(x => {
        Object.entries(x).forEach(([key, value]) => {
            if(key === "PTS") {
                points2019.push(value);
            }else if (key === "TRB") {
                rebounds2019.push(value);
            }else if (key === "AST") {
                assists2019.push(value);
            }else if (key === "pick") {
                picks2019.push(value)
            }else if (key === "BLK") {
                blks2019.push(value)
            }else if (key === "STL") {
                stls2019.push(value)
            }
        })
    })
    
    // console.log(picks);

    var trace7 = {
        x: picks2019,
        y: rebounds2019,
        name: 'Rebounds',
        type: 'bar'
      };
      
      var trace8 = {
        x: picks2019,
        y: assists2019,
        name: 'Assists',
        type: 'bar'
      };

      var trace9 = {
        x: picks2019,
        y: points2019,
        name: 'Points',
        type: 'bar'
      };

    var trace13 = {
        x: picks2019,
        y: blks2019,
        name: 'Blocks',
        type: 'bar'
        }

    var trace14 = {
        x: picks2019,
        y: stls2019,
        name: 'Steals',
        type: 'bar'
        }
      
      
      
      var data3 = [trace7, trace8, trace9, trace13, trace14];
      
      var layout3 = {
        barmode: 'stack',
        yaxis: {
            title: {
                text: 'Stat Count'
            }
        },
        xaxis: {
          title: {
              text: 'Draft Pick',
              },
            tickmode: "linear",
            tick0: 1,
            dtick: 4
          }
        }
      
      Plotly.newPlot('stacked3', data3, layout3);
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