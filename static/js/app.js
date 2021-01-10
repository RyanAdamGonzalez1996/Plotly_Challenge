/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("samples.json").then((bellyData => {
        var data = bellyData;

        // Parse and filter the data to get the sample's metadata
        console.log(bellyData);
        // Specify the location of the metadata and update it        
    }))
        

}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
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
    })
        
    // Use first sample (index = 0) to build metadata and initial plots
    buildCharts(data.names[0]);
    buildMetadata(data.names[0]);
}

function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

