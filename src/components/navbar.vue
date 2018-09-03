<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul>
    <router-link :to="{name: 'Start'}" tag="li" active-class="active" exact><a>Main</a></router-link>
     <router-link :to="{name:'list'}" tag="li" active-class="active"><a>List</a></router-link>
    </ul>
  </nav> -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <!-- <li class="nav-item ">
         <router-link :to="{name: 'Start'}" tag="li" active-class="active" exact><a>Main</a></router-link>
      </li>
      
      <li class="nav-item">
            <router-link :to="{name:'list'}" tag="li" active-class="active"><a>List</a></router-link>
      </li>  -->
    </ul>
  </div>
</nav>
</template>


<script>
export default {};
</script>

<style scoped>
</style>
