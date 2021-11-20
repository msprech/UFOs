# UFO Sightings with JavaScript 

## Purpose 

Through the use of JavaScript and HTML, we were able to create an interactive webpage that allowed users to explore recorded UFO sightings in more depth. [This webpage](https://msprech.github.io/UFOs/) displays the data within a table that can be manipulated through filter criteria. 

## Results 

![table](https://github.com/msprech/UFOs/blob/e17b56511b142d6dab4605f86aa6031c5837badf/Screen%20Shot%202021-11-19%20at%206.49.01%20PM.png) 

Through the use of functions, the JavaScript D3 library, if-else statements, and forEach loops, we were able to create the above interactive filter table. Each category, including date, city, state, country, and shape, can be filled in using a similar form to the placeholder text. The chosen parameters will then be reflected in the data itself, showing only UFO sighting that meet the input requirements. 

For example, inputting 'nc' for state, 'us' for country, and 'other' for shape results in a single object output, which is far more targeted than the initial data.   

![example](https://github.com/msprech/UFOs/blob/4630a0ac9f5ae5399f16e8c1943b64b58a76bbd0/Screen%20Shot%202021-11-19%20at%206.54.09%20PM.png)

You can also widen your search criteria by targeting a few or even a single parameter, such as the example given below when only 'light' for shape is entered. 

![light](https://github.com/msprech/UFOs/blob/913de22a086a4a79d4a2c6114acaa0bf81802c93/Screen%20Shot%202021-11-19%20at%206.57.28%20PM.png)

You can continue experimenting with the table by changing each parameter individually, or click on the 'UFO Sightings' tab at the top of the page to reset all of the choices. 

## Summary 

A drawback of this design is that you often don't know what options will and won't have data without trial and error. It is unclear just from looking at the table what the exact options are for each category. In particular, the shape category is not as intuitive as many of the others. 

This page could benefit from dropdown menus that provide all of the possible options so that it is a more streamlined process. A message alerting the user to the fact that there are no results would also provide additional clarity. Another category of 'duration' could also be provided within the interactive table. 
