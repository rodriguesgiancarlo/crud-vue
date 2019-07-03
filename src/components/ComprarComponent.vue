<template>
  <div class="row justify-content-center">
      <div>
        <h1>Comprar ingresso</h1>
        <form @submit.prevent="sendCompra">
            <p>
             <label for="emcartaz_id">Filme </label>
             <select
               id="emcartaz_id"
               v-model="compra.emcartaz_id"
               name="emcartaz_id"
               >
               <option v-for="cartaz in emcartaz" :key="cartaz.id"
               v-if="cartaz.ativo">{{(filmes.filter( element => element.id == cartaz.id))[0].titulo}}</option>
             </select>
           </p>

           <p>
            <label for="ingresso">Tipo do ingresso </label>
            <select
              id="ingresso"
              v-model="compra.ingresso"
              name="ingresso"
              >
              <option v-for="tipo in tipoingresso" :key="tipo.id">{{ tipo.descricao }}</option>
            </select>
          </p>

          <p>
            <label for="quantidade">Quantidade </label>
              <input
                v-model.number="compra.quantidade"
                type="number"
                name="quantidade"
              >
            </p>
            <p>Unidade: R${{ precoUnidade }}</p>
            <p>Total: R${{ precoTotal }}</p>

           <p>
            <input
              type="submit"
              value="Comprar"
            >
          </p>

        </form>
    </div>
  </div>
</template>

<!--
{
  "id": 1,
  "emcartaz_id": 1,
  "tipoingresso_id": 1,
  "quantidade": 2
}
-->

<script>
    export default {
        data() {
            return {
                emcartaz: [],
                filmes: [],
                tipoingresso: [],
                salas: [],
                compra: {}
            }
        },
        created() {
            this.axios.get(window.apiUrl+'/emcartaz').then(response => {
                this.emcartaz = response.data;
            }),
            this.axios.get(window.apiUrl+'/filmes').then(response => {
                this.filmes = response.data;
            }),
            this.axios.get(window.apiUrl+'/tipoingresso').then(response => {
                this.tipoingresso = response.data;
            }),
            this.axios.get(window.apiUrl+'/salas').then(response => {
                this.salas = response.data;
            })
        },

        computed: {
          precoUnidade: function() {
            let ingresso_tmp = (this.tipoingresso.filter( element => element.descricao == this.compra.ingresso))[0];
            if (ingresso_tmp != null) {
              return ingresso_tmp.valor;
            }else {
              return '';
            }
          },
          precoTotal: function() {
            let ingresso_tmp = (this.tipoingresso.filter( element => element.descricao == this.compra.ingresso))[0];
            if (ingresso_tmp != null && this.compra.quantidade != null) {
              return ingresso_tmp.valor * this.compra.quantidade;
            }else {
              return '';
            }
          }
        },

        methods: {
        sendCompra(){
            let filmeid = (this.filmes.filter( element => element.titulo == this.compra.emcartaz_id))[0].id;
            this.compra.emcartaz_id = this.emcartaz.filter(element => element.filme_id == filmeid)[0].filme_id;

            let tipoid = this.tipoingresso.filter(element => element.descricao == this.compra.ingresso)[0].id;
            this.compra.ingresso = tipoid;

            let uri = window.apiUrl + '/bilheterias';
            this.axios.post(uri, this.compra).then((response) => {
                this.$router.push({name: 'bilheterias'});
            });

            let salaid = (this.emcartaz.filter( element => element.id == this.compra.emcartaz_id))[0].sala_id;
            let sala_alvo = this.salas.filter( element => element.id == salaid)[0];
            sala_alvo.lotacao_maxima = sala_alvo.lotacao_maxima - this.compra.quantidade;


            uri = window.apiUrl+'/salas/'+salaid;
            this.axios.put(uri, sala_alvo).then((response) => {
                this.$router.push({name: 'lotacao_maxima'});
            });
        }
        
    }
  }
</script>
