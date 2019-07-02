<style>

</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="usuario">Usuario</label>
                <input type="text" id="usuario" class="form-control" placeholder="Digite o nome do usuário" required autofocus>
              </div>

              <div class="form-label-group">
                <label for="senha">Senha</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
              </div>
              
              <router-link :to="{name: 'sala', params: { }}" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Entrar</router-link>
              <hr class="my-4">
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Componente Login montado.');
        }
    }
</script>