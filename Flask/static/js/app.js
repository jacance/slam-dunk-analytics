function init() {
d3.json('static/js/node_modules/combined.json').then(function(data) {
    console.log(data)
    drafted_player_data_2017 = data.filter(x => (x.round > 0) && (x.draft_year == 2017))
    drafted_player_data_2018 = data.filter(x => (x.round > 0) && (x.draft_year == 2018))
    drafted_player_data_2019 = data.filter(x => (x.round > 0) && (x.draft_year == 2019))
    var drafted_players_2017 = []
    var fg_pct_2017 = []
    var ft_pct_2017 = []
    var threept_pct_2017 = []
    var points_2017 = []
    var rebounds_2017 = []
    var assists_2017 = []
    var steals_2017 = []
    var blocks_2017 = []
    var drafted_players_2018 = []
    var fg_pct_2018 = []
    var ft_pct_2018 = []
    var threept_pct_2018 = []
    var points_2018 = []
    var rebounds_2018 = []
    var assists_2018 = []
    var steals_2018 = []
    var blocks_2018 = []
    var drafted_players_2019 = []
    var fg_pct_2019 = []
    var ft_pct_2019 = []
    var threept_pct_2019 = []
    var points_2019 = []
    var rebounds_2019 = []
    var assists_2019 = []
    var steals_2019 = []
    var blocks_2019 = []

    drafted_player_data_2017.forEach(function(data) {
        drafted_players_2017.push(data.player)
        fg_pct_2017.push(+data['FGPCT'])
        ft_pct_2017.push(+data['FTPCT'])
        threept_pct_2017.push(+data['3PPCT'])
        points_2017.push(+data['PTS'])
        rebounds_2017.push(+data['TRB'])
        assists_2017.push(+data['AST'])
        steals_2017.push(+data['STL'])
        blocks_2017.push(+data['BLK'])
    })

    drafted_player_data_2018.forEach(function(data) {
        drafted_players_2018.push(data.player)
        fg_pct_2018.push(+data['FGPCT'])
        ft_pct_2018.push(+data['FTPCT'])
        threept_pct_2018.push(+data['3PPCT'])
        points_2018.push(+data['PTS'])
        rebounds_2018.push(+data['TRB'])
        assists_2018.push(+data['AST'])
        steals_2018.push(+data['STL'])
        blocks_2018.push(+data['BLK'])
    })

    drafted_player_data_2019.forEach(function(data) {
        drafted_players_2019.push(data.player)
        fg_pct_2019.push(+data['FGPCT'])
        ft_pct_2019.push(+data['FTPCT'])
        threept_pct_2019.push(+data['3PPCT'])
        points_2019.push(+data['PTS'])
        rebounds_2019.push(+data['TRB'])
        assists_2019.push(+data['AST'])
        steals_2019.push(+data['STL'])
        blocks_2019.push(+data['BLK'])
    })

    console.log(threept_pct_2017)
    var fg_pct_2017_mean = math.mean(fg_pct_2017);
    var ft_pct_2017_mean = math.mean(ft_pct_2017)
    var threept_pct_2017_mean = math.mean(threept_pct_2017)
    var points_2017_mean = math.mean(points_2017)
    var rebounds_2017_mean = math.mean(rebounds_2017)
    var assists_2017_mean = math.mean(assists_2017)
    var steals_2017_mean = math.mean(steals_2017)
    var blocks_2017_mean = math.mean(blocks_2017)
    var fg_pct_2018_mean = math.mean(fg_pct_2018)
    var ft_pct_2018_mean = math.mean(ft_pct_2018)
    var threept_pct_2018_mean = math.mean(threept_pct_2018)
    var points_2018_mean = math.mean(points_2018)
    var rebounds_2018_mean = math.mean(rebounds_2018)
    var assists_2018_mean = math.mean(assists_2018)
    var steals_2018_mean = math.mean(steals_2018)
    var blocks_2018_mean = math.mean(blocks_2018)
    var fg_pct_2019_mean = math.mean(fg_pct_2019)
    var ft_pct_2019_mean = math.mean(ft_pct_2019)
    var threept_pct_2019_mean = math.mean(threept_pct_2019)
    var points_2019_mean = math.mean(points_2019)
    var rebounds_2019_mean = math.mean(rebounds_2019)
    var assists_2019_mean = math.mean(assists_2019)
    var steals_2019_mean = math.mean(steals_2019)
    var blocks_2019_mean = math.mean(blocks_2019)

    features = ['PTS', 'TRB', 'AST', 'STL', 'BLK']
    avg2017data = {"PTS": points_2017_mean, "TRB": rebounds_2017_mean, "AST": assists_2017_mean, "STL": steals_2017_mean, "BLK": blocks_2017_mean}
    avg2018data = {"PTS": points_2018_mean, "TRB": rebounds_2018_mean, "AST": assists_2018_mean, "STL": steals_2018_mean, "BLK": blocks_2018_mean}
    avg2019data = {"PTS": points_2019_mean, "TRB": rebounds_2019_mean, "AST": assists_2019_mean, "STL": steals_2019_mean, "BLK": blocks_2019_mean}
    console.log(avg2017data)
    console.log(avg2018data)
    console.log(avg2019data)

    var svg1 = d3.selectAll("#draftyear1").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    let radialScale = d3.scaleLinear()
        .domain([0,20])
        .range([0,120]);
    let ticks = [4, 8, 12, 16, 20];

    ticks.forEach(t =>
        svg1.append("circle")
        .attr("cx", 250)
        .attr("cy", 250)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("r", radialScale(t))
    );

    ticks.forEach(t =>
        svg1.append("text")
        .attr("x", 255)
        .attr("y", 250 - radialScale(t))
        .text(t.toString())
    );

    function angleToCoordinate(angle, value){
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return {"x": 250 + x, "y": 250 - y};
    }

    for (var i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        let line_coordinate = angleToCoordinate(angle, 25);
        let label_coordinate = angleToCoordinate(angle, 27);

        //draw axis line
        svg1.append("line")
        .attr("x1", 250)
        .attr("y1", 250)
        .attr("x2", line_coordinate.x)
        .attr("y2", line_coordinate.y)
        .attr("stroke","black");

        //draw axis label
        svg1.append("text")
        .attr("x", label_coordinate.x)
        .attr("y", label_coordinate.y)
        .text(ft_name);
    }

    let line = d3.line()
        .x(d => d.x)
        .y(d => d.y);
    let colors = ["darkorange"];

    function getPathCoordinates(data_point){
        let coordinates = [];
        for (var i = 0; i < features.length; i++){
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
        }
        return coordinates;
    }

    for (var i = 0; i < features.length; i ++){
        let d = avg2017data;
        let color = colors[i];
        let coordinates = getPathCoordinates(d);

        //draw the path element
        svg1.append("path")
        .datum(coordinates)
        .attr("d",line)
        .attr("stroke-width", 3)
        .attr("stroke", color)
        .attr("fill", "orange")
        .attr("stroke-opacity", 1)
        .attr("opacity", 0.5);
    }

    var svg2 = d3.selectAll("#draftyear2").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    let radialScale2 = d3.scaleLinear()
        .domain([0,20])
        .range([0,120]);
    let ticks2 = [4, 8, 12, 16, 20];

    ticks2.forEach(t =>
        svg2.append("circle")
        .attr("cx", 250)
        .attr("cy", 250)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("r", radialScale2(t))
    );

    ticks2.forEach(t =>
        svg2.append("text")
        .attr("x", 255)
        .attr("y", 250 - radialScale(t))
        .text(t.toString())
    );

    function angleToCoordinate2(angle, value){
        let x = Math.cos(angle) * radialScale2(value);
        let y = Math.sin(angle) * radialScale2(value);
        return {"x": 250 + x, "y": 250 - y};
    }

    for (var i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        let line_coordinate = angleToCoordinate2(angle, 25);
        let label_coordinate = angleToCoordinate2(angle, 27);

        //draw axis line
        svg2.append("line")
        .attr("x1", 250)
        .attr("y1", 250)
        .attr("x2", line_coordinate.x)
        .attr("y2", line_coordinate.y)
        .attr("stroke","black");

        //draw axis label
        svg2.append("text")
        .attr("x", label_coordinate.x)
        .attr("y", label_coordinate.y)
        .text(ft_name);
    }

    let line2 = d3.line()
        .x(d => d.x)
        .y(d => d.y);
    let colors2 = ["darkorange"];

    function getPathCoordinates2(data_point){
        let coordinates = [];
        for (var i = 0; i < features.length; i++){
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate2(angle, data_point[ft_name]));
        }
        return coordinates;
    }

    for (var i = 0; i < features.length; i ++){
        let d = avg2018data;
        let color = colors2[i];
        let coordinates = getPathCoordinates2(d);

        //draw the path element
        svg2.append("path")
        .datum(coordinates)
        .attr("d",line2)
        .attr("stroke-width", 3)
        .attr("stroke", color)
        .attr("fill", "orange")
        .attr("stroke-opacity", 1)
        .attr("opacity", 0.5);
    }

    var svg3 = d3.selectAll("#draftyear3").append("svg")
    .attr("width", 500)
    .attr("height", 500);

    let radialScale3 = d3.scaleLinear()
        .domain([0,20])
        .range([0,120]);
    let ticks3 = [4, 8, 12, 16, 20];

    ticks3.forEach(t =>
        svg3.append("circle")
        .attr("cx", 250)
        .attr("cy", 250)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("r", radialScale3(t))
    );

    ticks3.forEach(t =>
        svg3.append("text")
        .attr("x", 255)
        .attr("y", 250 - radialScale(t))
        .text(t.toString())
    );

    function angleToCoordinate3(angle, value){
        let x = Math.cos(angle) * radialScale3(value);
        let y = Math.sin(angle) * radialScale3(value);
        return {"x": 250 + x, "y": 250 - y};
    }

    for (var i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        let line_coordinate = angleToCoordinate3(angle, 25);
        let label_coordinate = angleToCoordinate3(angle, 27);

        //draw axis line
        svg3.append("line")
        .attr("x1", 250)
        .attr("y1", 250)
        .attr("x2", line_coordinate.x)
        .attr("y2", line_coordinate.y)
        .attr("stroke","black");

        //draw axis label
        svg3.append("text")
        .attr("x", label_coordinate.x)
        .attr("y", label_coordinate.y)
        .text(ft_name);
    }

    let line3 = d3.line()
        .x(d => d.x)
        .y(d => d.y);
    let colors3 = ["darkorange"];

    function getPathCoordinates3(data_point){
        let coordinates = [];
        for (var i = 0; i < features.length; i++){
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate3(angle, data_point[ft_name]));
        }
        return coordinates;
    }

    for (var i = 0; i < features.length; i ++){
        let d = avg2019data;
        let color = colors3[i];
        let coordinates = getPathCoordinates3(d);

        //draw the path element
        svg3.append("path")
        .datum(coordinates)
        .attr("d",line3)
        .attr("stroke-width", 3)
        .attr("stroke", color)
        .attr("fill", "orange")
        .attr("stroke-opacity", 1)
        .attr("opacity", 0.5);
    }
    })
    };

init()