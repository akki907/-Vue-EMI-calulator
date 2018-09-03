<template>
    <div class="container marginTop card" >
        <div class="page-header">
            <h1>
                User Detail
            </h1>
        </div>
        <hr>
        <div class="form">
        <div class="form-group">
            <label>First name</label>
            <input v-model="user.firstName" placeholder="john" name="firstname"  v-validate="'required'" type="text" class="form-control">
             <span v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
        </div>
        <div class="form-group">
            <label>Last name</label>
            <input v-model="user.lastName" placeholder="show" name="lastname" type="text" class="form-control">
             <span v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
        </div>
        
        <div class="form-group">
            <label>Email</label>
            <input v-model="user.email" name="email" placeholder="john.snow@gmail.com"  v-validate="'required|email'" type="email" class="form-control">
            <span v-show="errors.has('email')">{{ errors.first('email') }}</span>

        </div>
        <div class="form-group">
            <label>Contact</label>
            <input v-model="user.contact" name="contact" placeholder="1111111111" v-validate="'required'" type="text" class="form-control">
             <span v-show="errors.has('contact')">{{ errors.first('contact') }}</span>
        </div>
        <div class="form-group">
            <label>Bike Model</label>
            <input v-model="user.bikeModal" name="bike" placeholder="dragons" v-validate="'required'" type="text" class="form-control">
             <span v-show="errors.has('bike')">{{ errors.first('bike') }}</span>
        </div>
        <div>
            <button class="btn btn-primary" @click="userHandle">Create Account</button>
        </div>
        <div class="err" v-if="isError">
            <p>Please try again</p>
            <p>{{errorMsg}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import Calculator from './calculator';

export default {
  name: `Main`,
  data: function() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        contact:"",
        bikeModal:""
      },
      isError: false,
      errorMsg: {},
      isLoading:false
    };
  },
  methods: {
    userHandle: function() {

    }
  }
};
</script>

<style scoped>
.marginTop {
  margin: 25px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

