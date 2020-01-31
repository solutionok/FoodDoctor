<template>
  <div class="root">
    <div class="top-btn-tox">
      <div class="btn-row">
        <div v-on:click="triggerFileBtn()" class="picture-box box-btn">
          Product Picture
        </div>
        <div class="scan-barcode box-btn">Scan Barcode</div>
      </div>
    </div>
    <form>
      <div>
        <label for="pname">Product</label>
        <input name="pname" v-model="ddata.pname" class="input-block" placeholder="enter product name">
      </div>
      <div>
        <label for="ingredients">Ingredients</label>
        <textarea name="ingredients" v-model="ddata.ingredients" class="input-block" placeholder="enter product ingredient here"></textarea>
      </div>
      <h6>Natural Values</h6>
      <div>
        <label for="categories">Categories</label>
        <input name="categories" v-model="ddata.categories" class="input-block" placeholder="00kj">
      </div>
      <div>
        <label for="totalfat">Total Fat</label>
        <input name="totalfat" v-model="ddata.totalfat" class="input-block" placeholder="00.0g">
      </div>
      <div>
        <label for="glucids">Glucids</label>
        <input name="glucids" v-model="ddata.glucids" class="input-block" placeholder="00.0g">
      </div>
      <div>
        <label for="sugar">Sugar</label>
        <input name="sugar" v-model="ddata.sugar" class="input-block" placeholder="00.0g">
      </div>
      <div>
        <label for="proteins">Proteins</label>
        <input name="proteins" v-model="ddata.proteins" class="input-block" placeholder="00.0g">
      </div>
      <div>
        <label for="fiber">Fiber</label>
        <input name="fiber" v-model="ddata.fiber" class="input-block" placeholder="00.0g">
      </div>
      
      <div>
        <button onclick="return false;" v-on:click="AddProduct()" class="input-block">Save</button>
        <input type="file" id="filter-trigger" accept="image/*" style="display:none;">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  
  data () {
    return {
      ddata: {pname:'',ingredients: '',categories: '',totalfat: '',glucids : '',sugar: '',proteins: '',fiber: '',picture:''},
      pdatas: [],
      storageKey: 'fooddoctor_products',
    }
  },
  methods: {
    triggerFileBtn(){
      var fileEle = document.querySelector('#filter-trigger')
      fileEle.click()
    },
    async AddProduct(){
      for(var k in this.ddata){
        if(!this.ddata[k]){
          if(k!='picture'){

            alert('Please fill ' + k);
          }else{
            alert('Please take a picture');
          }

          return;
        }
      }

      if(!this.pdatas.length){

        var item = await localStorage.getItem(this.storageKey)
        this.pdatas = await JSON.parse(item ? item : '[]');
      }
      
      this.pdatas.push(this.ddata);

      await localStorage.setItem(this.storageKey, JSON.stringify(this.pdatas)); 
      alert('A product successfully added!');
      for(var kd in this.ddata){
        this.ddata[kd] = ''
      }
      var box = document.querySelector('.picture-box');
          box.style = '';
          box.innerHTML = 'Product Picture'
      this.$router.push('/')

    },
  },
  mounted(){
    let vm = this;
    var fileEle = document.querySelector('#filter-trigger')
    fileEle.onchange = function(evt){
      var box = document.querySelector('.picture-box');
      var tgt = evt.target || window.event.srcElement;
      var files = tgt.files;

      if (FileReader && files && files.length) {
          var fr = new FileReader();
          fr.onload = function () {
              box.style='background-size: cover;background-image:url('+fr.result+')';
              box.innerHTML = '.'
              vm.ddata['picture'] = fr.result
          }
          fr.readAsDataURL(files[0]);
      } else {
          box.style = '';
          box.innerHTML = 'Product Picture'
          vm.ddata['picture'] = ''
      }

    }

    
  }
}

</script>
<style scoped>
.input-block{
  display: block;
  width: 100%;
}
.root{
  background-color:thistle;
  padding: 20px;
}
.top-btn-tox{
  display: table;
  margin: 0 auto;
}
.btn-row{
  display: table-row;
}
.box-btn{
  display: table-cell;
  height:150px;
  width:150px;
  margin-right: 20px;
  cursor:pointer;
  border: solid 1px;
  display: inline-block;
  background-color:white;
}
</style>