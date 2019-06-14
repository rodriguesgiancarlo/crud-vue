<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Componente Index</div>

              <div class="card-body">
                  Eu sou o componente Index!
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Componente Index montado.');
        }
    }
</script>