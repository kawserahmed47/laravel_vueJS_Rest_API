<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Product Category</div>

                    <div class="card-body">
                        <router-link class="btn btn-secondary btn-sm mb-2" :to="{name:'category-create'} ">Create</router-link>
                        <table class="table">
                            <tr>
                                <td>#SL</td>
                                <td>Name</td>
                                <td>Description</td>
                                <!-- <td>Status</td> -->
                                <td>Action</td>
                            
                            </tr>
                             <tr v-for="category in categories " :key="category.id">
                                <td>{{category.id}}</td>
                                <td>{{category.name}}</td>
                                <td>{{category.description}}</td>
                                <!-- <td> <p class="badge badge-info text-light">Published</p> </td> -->
                                <td><router-link class="btn btn-primary btn-sm" :to="{name:'category-edit',params:{id:category.id}}">Edit</router-link> | <a @click.prevent="deleteCategory(category)" class="btn btn-danger btn-sm" href="#">Delete</a></td>
                            
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                categories:[],
            }
        },

        methods: {
            loadCategories(){
                axios.get('/api/category').then(response=>{
                    this.categories = response.data;
                    console.log(response.data);
                });
            },
            deleteCategory(category){
                axios.delete(`/api/category/${category.id}`).then( ()=> {
                    this.$toast.success({
                            title:'success',
                            message:'Category Delete Successful'
                        }) ;

                });

                let index = this.categories.indexOf(category);
                this.categories.splice(index,1);


            }
        },

        mounted() {
            this.loadCategories();
            console.log('Component mounted.');
        }
    }
</script>
