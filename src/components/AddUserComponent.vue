<template>
  <div class="row justify-content-center">
      <div>
        <h1>Novo Usuário</h1>
        <form @submit.prevent="addUsuario">
            
            <div class="form-group">
                <label for="usuario">Informe o nome do Usuário:</label>
                <input type="text" class="form-control" id="usuario" v-model="usuario.usuario" required>
            </div>
            <div class="form-group">
                <label for="senha">Informe a senha:</label>
                <input type="password" class="form-control" id="senha" v-model="usuario.senha" required>
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
                 usuario:{}
            }
        },
    methods: {
        addUsuario(){
            let uri = 'http://localhost:3000/usuarios';
            this.axios.post(uri, this.usuario).then((response) => {
                this.$router.push({name: 'usuarios'});
            });
        }
    }
  }
</script>