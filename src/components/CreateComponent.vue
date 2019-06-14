<template>
  <div class="row justify-content-center">
      <div>
        <h1>Novo post</h1>
        <form @submit.prevent="addPost">
            
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" v-model="post.title">
            </div>
            <div class="form-group">
                <label for="body">Conteúdo</label>
                <textarea class="form-control" id="body" rows="3" v-model="post.body"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                post:{}
            }
        },
    methods: {
        addPost(){
            let uri = 'http://localhost:3000/posts';
            this.axios.post(uri, this.post).then((response) => {
                this.$router.push({name: 'posts'});
            });
        }
    }
  }
</script>