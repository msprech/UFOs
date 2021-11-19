//import the data from data.js 
const tableData = data;

//reference html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear existing data 
    tbody.html("");
    //loop through each object in data 
    //append row and cells for each value in the row 
    data.forEach((dataRow) => {
        //append row to table body 
        let row = tbody.append("tr");

        //loop through each field in dataRow and add each value as table cell 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td"); 
            cell.text(val);
        }
    );
});
}

function handleClick() {
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if date entered, filter using date
    if (date) {
        //apply filter to table data to keep only rows where dateimte value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
    
}
//event to listen for form button 
d3.selectAll("#filter-btn").on("change", handleClick); 

//build table when page loads
buildTable(tableData);


