<template>
    <div class=" marginTop" >
        <div class="page-header">
            <h1>
                EMI Calculator
            </h1>
        </div>
        <hr>
        <div class="form marginTop card">
            <div class="form-group">
                <label>First name</label>
                <input :disabled="initialDetail" v-model="user.firstName" placeholder="john" name="firstname"  v-validate="'required'" type="text" class="form-control">
                <span class="text-danger" v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
            </div>
            <div class="form-group">
                <label>Last name</label>
                <input :disabled="initialDetail" v-model="user.lastName" placeholder="show" v-validate="'required'"  name="lastname" type="text" class="form-control">
                <span class="text-danger" v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input :disabled="initialDetail" v-model="user.email" name="email" placeholder="john.snow@gmail.com"  v-validate="'required|email'" type="email" class="form-control">
                <span class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>

            <div class="form-group">
                <label>Contact</label>
                <input :disabled="initialDetail" v-model="user.contact" name="contact" placeholder="1111111111" v-validate="'required'" type="text" class="form-control">
                <span class="text-danger" v-show="errors.has('contact')">{{ errors.first('contact') }}</span>
            </div>
            <div class="form-group">
                <label>Bike Model</label>
                  <label for="sel1">Select list:</label>
                        <select :disabled="initialDetail" v-model="user.bikeModal"  placeholder="Bikes"  class="form-control" id="sel1">
                            <option   v-bind:value="item" v-for="(item, index) in bikesInfo.bikes" :key="index" v-validate="'required'"  name="bike">{{item.name}}</option>
                        </select>

                <!-- <input :disabled="initialDetail" v-model="user.bikeModal" name="bike" placeholder="dragons" v-validate="'required'" type="text" class="form-control"> -->
                <span  class="text-danger" v-show="errors.has('bike')">{{ errors.first('bike') }}</span>
            </div>
            <div v-if="!initialDetail">
                <button :disabled="!user.bikeModal"  class="btn btn-primary" @click="userHandle">Create Account</button>
            </div>
            
    </div>

    <div v-if="initialDetail">
        <Calculator :userDetail= "user"></Calculator>
    </div>
   
    </div>
    
</template>

<script>
import Calculator from "./calculator";
import bikeData from './../assets/data.js'
export default {
  name: `Main`,
  components: {
    Calculator
  },
  data: function() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        bikeModal: ""
      },
      isError: false,
      errorMsg: "",
      isLoading: false,
      initialDetail: false,
      bikesInfo :bikeData
    };
  },
  methods: {
    userHandle: function() {
         this.$validator.validate().then(result => {
             if(!result) return 
             this.initialDetail = true;
         })
    }
  },
  mounted() {
    
  }
};
</script>

<style >
.marginTop {
  margin: 25px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

