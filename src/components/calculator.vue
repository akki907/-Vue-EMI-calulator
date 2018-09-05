
<template>
  <div>
    <div class="page-header">
      <h1>
        Calculator
      </h1>
    </div>
    <hr>
    <div class="form marginTop  cardTransision">
  
      <div class="form-group">
        <label>Loan Amount ₹</label>
        <input v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" v-model="sliderCustomzie.val" placeholder="Loan Amount" name="loan" type="text" class="form-control">
        <br>
        <div class="slidecontainer">
          <input v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" type="range" v-model="sliderCustomzie.val" min="1" max="1000000" value="50" class="slider" id="myRange">
        </div>
        <span class="badge ">{{sliderCustomzie.val}}</span>
     
      </div>
      <hr>
      <div class="form-group">
        <label>Interest Rate %</label>
        <input v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" v-model="rateCustomzie.val" placeholder="Loan Rate" name="rate" type="text" class="form-control">
        <br>
        <div class="slidecontainer">
          <input type="range" v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" v-model="rateCustomzie.val" min="0" max="100" value="0" class="slider" id="myRange1">
        </div>
        <span class="badge ">{{rateCustomzie.val}}</span>
       
      </div>
      <hr>
      <div class="form-group">
        <label>Loan Tenure /Months</label>
        <input v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" v-model="tenureCustomzie.val" placeholder="Loan Tenure" name="tenure" type="text" class="form-control">
        <br>
        <div class="slidecontainer">
          <input type="range" v-on:change="calculateTotalCompoundInterest(sliderCustomzie.val,rateCustomzie.val,tenureCustomzie.val)" v-model="tenureCustomzie.val" min="0" max="12" value="0" class="slider" id="myRange2">
        </div>
        <span class="badge ">{{tenureCustomzie.val}}</span>
      
      </div>
  
  
    </div>
  
    <div v-if="sliderCustomzie.val != 0 " class="marginTop cardTransision">
      <h1>Calculated Amount</h1>
      <hr>
      <p>Loan Amount : {{sliderCustomzie.val}}</p>
      <p>Loan EMI : {{calculateData}}</p>
      <!-- <p>Total Amount : {{sliderCustomzie.val + }}</p> -->
  
      <p>Total Interest Payable : {{calculateData * tenureCustomzie.val - sliderCustomzie.val}}</p>
    </div>
  
  
  
    <div class="col-xs-12 marginTop cardTransision ">
  
      <div>
        <line-chart id="line" :data="lineData" xkey="year" ykeys='["a"]' resize="true" labels='[ "Serie A" ]' line-colors='[ "#FF6384" ]' grid="true" grid-text-weight="bold">
        </line-chart>
      </div>
  
    </div>
  
  
  </div>
</template>

<script>
  // import LineChart from "./charts/lineChart.js";
  import PieChart from "./charts/barChart.js";
  import Raphael from "raphael/raphael";
  global.Raphael = Raphael;
  
  import {
    DonutChart,
    BarChart,
    LineChart
  } from "vue-morris";
  
  export default {
    name: "Calculator",
    props: {
      userDetail: {
        type: Object
      }
    },
    components: {
      LineChart,
      PieChart,
      BarChart,
      DonutChart
    },
    methods: {
      calculateTotalCompoundInterest: function(principal, annual_rate, t_years) {
        annual_rate = annual_rate / 1200;
        this.calculateData =
          principal *
          annual_rate /
          (1 - Math.pow(1 / (1 + annual_rate), t_years));
        this.graphHandle()
      },
      graphHandle: function() {
        var totalPayable = parseInt(this.calculateData);
        const emi = parseInt(totalPayable / this.tenureCustomzie.val);
        let count = this.tenureCustomzie.val;
        if (totalPayable == 0) this.lineData.unshift({
          year: 0,
          a: 0
        });
        while (totalPayable > 0) {
          totalPayable = totalPayable - emi;
          count = count - 1;
          if (totalPayable < 0) break;
          this.lineData.unshift({
            year: count,
            a: totalPayable
          });
        }
      },
      rand(limit) {
        return Math.round(Math.random() * limit);
      },
      time() {
        // thnew Array(this.tenureCustomzie.val)
      }
    },
    data: function() {
      return {
        datacollection: {
          labels: [],
          datasets: [{
            label: "Line Chart",
            backgroundColor: "#f87979",
            data: []
          }]
        },
        timex: [],
        calculateData: 0,
        lineData: [],
        isMonth: true,
        sliderCustomzie: {
          val: 0,
          lineHeight: 10,
          processStyle: {
            backgroundColor: "#42b883"
          },
          tooltipStyles: {
            backgroundColor: "#42b883",
            borderColor: "#42b883"
          }
        },
        rateCustomzie: {
          val: 1,
          lineHeight: 10,
          processStyle: {
            backgroundColor: "#42b883"
          },
          tooltipStyles: {
            backgroundColor: "#42b883",
            borderColor: "#42b883"
          }
        },
        tenureCustomzie: {
          val: 2,
          lineHeight: 10,
          processStyle: {
            backgroundColor: "#42b883"
          },
          tooltipStyles: {
            backgroundColor: "#42b883",
            borderColor: "#42b883"
          }
        }
      };
    },
    mounted() {
      this.sliderCustomzie.val = this.userDetail.bikeModal.price;
      this.graphHandle();
    },
    beforeMount() {}
  };
</script>

<style>
  cardTransision {
    transition: 0.3s !important;
  }
  
  .cardTransision:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  .slidecontainer {
    width: 100%;
    /* Width of the outside container */
  }
  
  
  /* The slider itself */
  
  .slider {
    -webkit-appearance: none;
    /* Override default CSS styles */
    appearance: none;
    width: 100%;
    /* Full-width */
    height: 25px;
    /* Specified height */
    background: #d3d3d3;
    /* Grey background */
    outline: none;
    /* Remove outline */
    opacity: 0.7;
    /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s;
    /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }
  
  
  /* Mouse-over effects */
  
  .slider:hover {
    opacity: 1;
    /* Fully shown on mouse-over */
  }
  
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 25px;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #4CAF50;
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #4CAF50;
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
  }
</style>

