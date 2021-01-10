/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("samples.json").then((bellyData => {
        var metadata = bellyData.metadata;

        // Check to make sure the metadata is correct in console
        console.log(metadata);

        // Parse and filter the data to get the sample's metadata
        var currentSample = metadata.filter(meta => meta.id.toString() === sample);
        console.log(currentSample);

        // Specify the location of the metadata and update it        
        var demoInfo = d3.select("#sample-metadata");

        // Clear the "demographic info" section before adding new data
        demoInfo.html("");

        // Pull the data from currentSample into the "demographic info" section
        Object.entries(currentSample).forEach((entry, value) => {
            demoInfo.append("h3").text("age: " + entry[1].age + "\n"
                                    + "bbtype: " + entry[1].bbtype + "\n"
                                    + "ethnicity: " + entry[1].ethnicity + "\n"
                                    + "gender: " + entry[1].gender + "\n"
                                    + "id: " + entry[1].id + "\n"
                                    + "location: " + entry[1].location + "\n"
                                    + "wfreq: " + entry[1].wfreq + "\n");
        });
    }));
}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data
    d3.json("samples.json").then((bellyData => {
    
        // Get the data needed for the Charts (10 samples)
        var ids = bellyData.samples[0].otu_ids.slice(0,10);
        console.log(ids);

        var sampleValues = bellyData.samples[0].sample_values.slice(0,10);
        console.log(sampleValues);

        var labels = bellyData.samples[0].otu_labels.slice(0,10);
        console.log(labels);

        // Create bar chart in correct location
        
        // Create bubble chart in correct location
        var trace2 = [{

            x: ids,
            y: sampleValues,
            text: labels,
            mode: 'markers',
            marker: {
              color: ids,
              size: sampleValues
            }}];

          var layout2 = {

            title: "Bubble chart for each sample",
            showlegend: false,
            height: 600,
            width: 1400 
          };
          
          Plotly.newPlot("bubble", trace2, layout2);
    }));
}

// Define function that will run on page load
function init() {

    // Select the dropdown object
    var dropdown = d3.select("#selDataset");

    // Read json data
    d3.json("samples.json").then((bellyData) => {

        // Initialize the data variable
        var data = bellyData;

        // Get the ids for the dropdown menu
        data.names.forEach(function(name){
            dropdown.append("option")
                    .text(name).property("value");
        });
    
        
    // Use first sample (index = 0) to build metadata and initial plots
    buildMetadata(data.names[0]);
    buildCharts(data.names[0]);

    });
}

function optionChanged(newSample){

    // Update metadata with newly selected sample
    buildMetadata(newSample);
    // Update charts with newly selected sample
    buildCharts(newSample);

}

// Handle event of changing dropdown menu value
d3.select("#selDataset")
  .on("change", function() {
    var newData = d3.select(this).property('value');
    updateLegend(newData);
});

// Initialize dashboard on page load
init();

