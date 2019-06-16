<template>
    <div>
      <h1>Postagens</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-success">Nova postagem</router-link>
            </div>
        </div>
        <br/>


        <div class="card" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.body }}</p>
                <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Editar</router-link>
                <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Remover</button>
            </div>
        </div>
  </div>
    
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/posts').then(response => {
                this.posts = response.data;
            })
        },

        methods: {
            deletePost(id) {
                this.axios.delete(window.apiUrl+'/posts/'+id).then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
            }
        }
    }
</script>