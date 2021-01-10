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
        Object.entries(currentSample).forEach((entry) => {
            demoInfo.append("h3").text(entry[0]);
        });

    }));
        

}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data
    d3.json("samples.json").then((bellyData => {

        // Parse and filter the data to get the sample's OTU data
        
        // Pay attention to what data is required for each chart
        var ids = bellyData.samples[0].out_ids;
        console.log(ids);

        var sampleValues = bellyData.samples[0].sample_values.slice(0,10);
        console.log(sampleValues);

        var labels = bellyData.samples[0].otu_labels.slice(0,10);
        console.log(labels);
        // Create bar chart in correct location

        // Create bubble chart in correct location
    
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
    buildCharts(data.names[0]);
    buildMetadata(data.names[0]);

    });
}

function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

