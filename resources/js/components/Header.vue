<template>
    <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <router-link class="navbar-brand" :to="{name:'home'}">Site Logo</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link  class="nav-link" :to="{name:'home'}">Home <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'category-list'}">Category</router-link>
                        </li>
                  
                    </ul>
                
                </div>
            </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>