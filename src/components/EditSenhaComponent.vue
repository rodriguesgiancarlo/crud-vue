<template>
  <div class="row justify-content-center">
      <div>
        <h1>Alterar Senha</h1>
        <form @submit.prevent="updateSenha">
            
            <div class="form-group">
                <label for="senha">Informe a senha:</label>
                <input type="password" class="form-control" id="senha" v-model="usuario.senha" required>
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
                usuario: {}
            }
        },
        created() {
            var uri = 'http://localhost:3000/usuarios/'+this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.usuario = response.data;
            });
        },
        methods: {
            updateSenha() {
                var uri = 'http://localhost:3000/usuarios/'+this.$route.params.id;
                this.axios.put(uri, this.usuario).then((response) => {
                    this.$router.push({name: 'usuarios'});
                });
                
            }
        }
    }
</script>