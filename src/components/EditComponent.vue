<template>
  <div class="row justify-content-center">
      <div>
        <h1>Alterar post</h1>
        <form @submit.prevent="updatePost">
            
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" v-model="post.title">
            </div>
            <div class="form-group">
                <label for="body">Conteúdo</label>
                <textarea class="form-control" id="body" rows="3" v-model="post.body"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Salvar alterações</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            var uri = 'http://localhost:3000/posts/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.post = response.data;
            });
        },
        methods: {
            updatePost() {
                var uri = 'http://localhost:3000/posts/'+this.$route.params.id;
                this.axios.put(uri, this.post).then((response) => {
                    this.$router.push({name: 'posts'});
                });
                
            }
        }
    }
</script>