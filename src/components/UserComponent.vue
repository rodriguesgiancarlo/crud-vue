<template>
    <div>
      <h1>Usuários</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'addusuario' }" class="btn btn-danger">Novo Usuário</router-link>
            </div>
        </div>
        <br/>


        <div class="card" v-for="usuario in usuarios" :key="usuario.id">
            <div class="card-body">
                <p class="card-text">{{ usuario.id }}</p>
                <p class="card-text">{{ usuario.usuario }}</p>
                
                <router-link :to="{name: 'editsenha', params: { id: usuario.id }}" class="btn btn-primary">Alterar Senha</router-link>
                <button class="btn btn-danger" @click.prevent="deleteUser(usuario.id)">Remover</button>
            </div>
        </div>
  </div>
    
</template>

<script>
    export default {
        data() {
            return {
                usuarios: []
            }
        },
        created() {
            let uri = 'http://localhost:3000/usuarios';
            this.axios.get(uri).then(response => {
                this.usuarios = response.data;
            })
        },

        methods: {
            deleteUser(id) {
                let uri = 'http://localhost:3000/usuarios/'+id;
                this.axios.delete(uri).then(response => {
                    this.usuarios.splice(this.usuarios.indexOf(id), 1);
                });
            }
        }
    }
</script>