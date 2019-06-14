<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Componente Home</div>

              <div class="card-body">
                  Eu sou o componente Home!
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Componente Home montado.');
        }
    }
</script>