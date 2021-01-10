# Plotly_Challenge
Homework: 15 - Interactive Visualizations and Dashboards

# GitHub Pages:
https://ryanadamgonzalez1996.github.io/Plotly_Challenge/

# DataSet:
[Belly Button Biodiversity dataset], (http://robdunnlab.com/projects/belly-button-biodiversity/)

# Contents:
## samples (JSON)
  - Contains the dataset in a JSON format.
  
## index (HTML)
  - Contains the html code for the website used in the assignment.
  
## static (Folder)
  - Contains the js folder that contains the JavaScript code used in the assignment.
    
## README:
  - You're reading it now.
  
# Instructions:
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. 
  
## Step 1: Plotly
1. Populate a dropdown menu with all of the Sample ID's. When an option is selected, this will update all of the charts.

  * **N.B.** If you look in your index.html, the event function `optionChanged()` is already included. This function takes the `value` of each dropdown `option`. You need to define this function in your javascript. 

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

	* Use `sample_values` as the values for the bar chart.

		* **N.B.** For each sample, the OTU's are listed in descending order.
	
	* Use `otu_ids` as the labels for the bar chart.

		* HINT: Labels should be strings, not numbers.
	
	* Use `otu_labels` as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

	* Use `otu_ids` for the x values.
	
	* Use `sample_values` for the y values.
	
	* Use `sample_values` for the marker size.
	
	* Use `otu_ids` for the marker colors.
	
	* Use `otu_labels` for the text values.

4. Display sample metadata, i.e., an individual's demographic information.

	* Display each key-value pair from the metadata JSON object somewhere on the page.

We have provided an `index.html` with an example layout, but feel free to create your own.

* **N.B.** The sample `index.html` was created using an older version of Bootstrap.
## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

* **N.B. Your Gauge will NOT look like the example below. Plotly has updated its gauge code.**
## Super Advanced Challenge Assignment (Optional)
Create your own meaningful chart using plotly.

## How to Run Code:
 - Will be Deployed on GitHub pages, the link will be below:
 https://ryanadamgonzalez1996.github.io/Plotly_Challenge/
