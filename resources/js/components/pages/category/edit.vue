<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Edit Product Category - {{categoryForm.name}}</div>

                    <div class="card-body">
                        <div class="">
                            <form @submit.prevent="updateCategory">
                                <div class="form-group">
                                    <label>Category Name</label>
                                     <input v-model="categoryForm.name" type="text" name="name"
        class="form-control" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
      <has-error :form="categoryForm" field="name"></has-error>
                                </div>
                                <div class=" form-group">
                                    <label for="">Description</label>
                                    <textarea v-model="categoryForm.description" class="form-control" name="description" id="" placeholder="Enter Category Description..." rows="3" :class="{ 'is-invalid': categoryForm.errors.has('description') }"></textarea>
                                     <has-error :form="categoryForm" field="description"></has-error>
                                </div>
                                <!-- <div class=" form-group">
                                    <label for="">Status</label><br>
                                    <label><input v-model="categoryForm.status" class="" name="status" type="checkbox" value="1"> Publish</label>
                                </div> -->
                                  <div class="form-group">
                                   <button class="btn btn-success" type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform';
    export default {
        data(){
            return {
                categoryForm: new Form({
                    name: '',
                    description: '',
                    status: 0,
                }),
              

            }
        
        },

        methods: {
            updateCategory(){
                let id = this.$route.params.id;

                 this.categoryForm.put(`/api/category/${id}`)
                     .then(() => {
                     this.$toast.success({
                            title:'success',
                            message:'Category Updated Successful'
                        }) 
                     console.log(data) 
                     
                     })

                console.log('Form Submitted');
            },


            loadCategory(){
                let id = this.$route.params.id;
                console.log('This is Load Category Function');
                console.log(id);
                axios.get(`/api/category/${id}/edit`).then(response=>{
                    this.categoryForm.name = response.data.name;
                    this.categoryForm.description = response.data.description;
                    console.log(response);
                })
            },
        },





        mounted() {
            this.loadCategory();
            console.log('Component mounted.')
        }
    }
</script>
