<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Componente Create</div>

              <div class="card-body">
                  Eu sou o componente Create!
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Componente Create montado.');
        }
    }
</script>