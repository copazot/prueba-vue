<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="mb-5 text-center">{{ msg }}</h3>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-4">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2 mx-auto"
                >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
            <div class="col-md-4">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2 mx-auto"
                >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
            <div class="col-md-4">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2 mx-auto"
                >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-8 mx-auto">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.food"
                      :options="foods"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                      <b-form-checkbox value="that">Check that out</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-8 mx-auto">
                <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                  <!-- Modal Component -->
                  <b-modal id="modal-1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                  </b-modal>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-8 mx-auto">
                <button-counter ></button-counter>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <card-test 
                    title="chao" 
                    content="Este es un test de card para probar componentes de Vue + Bootstrap"
                    textButton = "Continuar"
                    >
                </card-test>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenido a Mi Test Boostrap + Vue',
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
    }
  }
}
</script>