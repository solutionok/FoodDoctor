<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <div class="btn-group mb3">
      <button class="button history">HISTORY</button>
      <button class="button account">ACCOUNT</button>
      <button class="button about">ABOUT</button>
    </div>


    <div class="btn-group mb3">
      <router-link to="add-product" class="button register" >Register new product</router-link>
    </div>


    <div class="btn-group mb3">
      <button class="button scan">Scan Barcode</button>
      <button class="button search">Search</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Main',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.hello .btn-group {
  background-color: #E97676;
}

.history {
  background-color: white;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float:none;
}

.history:hover {background-color:yellow}

.history:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}


.account {
  background-color: white;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float:none;
}

.account:hover {background-color:yellow}

.account:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}

.about {
  background-color: white;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  float:none;
}
.about:hover {background-color:yellow}

.about:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}

.register {
  background-color: whitesmoke;
  border: none;
  color: black;
  padding: 20px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.register:hover {background-color:yellow}

.register:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}

.scan {
  background-color: #whitesmoke;
  border: none;
  color: black;
  padding: 25px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin:15px;
}
.scan:hover {background-color:yellow}

.scan:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}

.search {
  background-color: #whitesmoke;
  border: none;
  color: black;
  padding: 25px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin:15px;
}
.search:hover {background-color:yellow}

.search:active {
  background-color: orange;
  box-shadow: 0 5px red;
  color: white;
  transform: translateY(4px);
}
</style>
