// Chart.js is available under the MIT license

// Documentation is copyright © 2014-2022 Chart.js contributors.
//doughnut

var htmlChart = document.getElementById("htmlDoughnutChart").getContext('2d');
var myLineChart = new Chart(htmlChart, {
    type: 'doughnut',
    data: {
    datasets: [{
        labels: ["HTML"],

        data: [100],
        backgroundColor: ["#7f2f50", "#040315"],
        hoverBackgroundColor: ["#2219aa", "#040315"],
    }]
    },
    options: {
    responsive: true
    }
});

var cssChart = document.getElementById("cssDoughnutChart").getContext('2d');
var myLineChart = new Chart(cssChart, {
    type: 'doughnut',
    data: {
    datasets: [{
        labels: ["CSS"],

        data: [90,10],
        backgroundColor: ["#7f2f50", "#040315"],
        hoverBackgroundColor: ["#2219aa", "#040315"],
    }]
    },
    options: {
    responsive: true
    }
});

var jsChart = document.getElementById("jsDoughnutChart").getContext('2d');
var myLineChart = new Chart(jsChart, {
    type: 'doughnut',
    data: {
    datasets: [{
        labels: ["JS"],

        data: [70,30],
        backgroundColor: ["#7f2f50", "#040315"],
        hoverBackgroundColor: ["#2219aa", "#040315"],
    }]
    },
    options: {
    responsive: true
    }
});

var mongoChart = document.getElementById("mongoDoughnutChart").getContext('2d');
var myLineChart = new Chart(mongoChart, {
    type: 'doughnut',
    data: {
    datasets: [{
        labels: ["Mongo"],

        data: [50,50],
        backgroundColor: ["#7f2f50", "#040315"],
        hoverBackgroundColor: ["#2219aa", "#040315"],
    }]
    },
    options: {
    responsive: true
    }
});