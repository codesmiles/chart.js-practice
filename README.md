# chart.js-practice

Understanding the use of Chart.js library can go a long way into figuring out how to build and design a chart, so we are going to learn how to install and for examples we will impiment the doughnut chart into our webpage

## STEPS

- Install chart.js library as a package into your file code with the use of npm (or you can use other methods [Click here](https://www.chartjs.org/docs/latest/getting-started/installation.html) to check out on more methods)

### Input

    npm install chart.js

### Output

![codes](images\t-write.PNG)

After this package is installed in the specified directory file some files will be added into the directory

![codes](images\Capture.PNG)

> NOTE It is for the sake of the chart's responsiveness it is advisable to use a canvas tag in the HTML file

      <div>
        <canvas id="myChart"></canvas>
      </div>

- add a script link into the header of our HTML file

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
