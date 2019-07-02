<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <ul class="navbar-nav" >
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/sala" class="nav-link">Salas</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/usuarios" class="nav-link">Usuários</router-link>
                </li>
                
            </ul>
        </nav>
        <div class="container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 1
    }
</style>

<script>

    export default{
    }
</script>