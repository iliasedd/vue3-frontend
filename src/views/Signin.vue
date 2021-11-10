<template>
  <div>
    <h1>Signin</h1>
    <div class="row">
      <div class="col-md-6 mx-auto mt-3">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="email">email</label>
            <input v-model="user.email" type="email" id="email" class="form-control">
          </div>

          <div class="form-group">
            <label for="password">password</label>
            <input v-model="user.password" type="password" id="password" class="form-control">
          </div>

          <button type="submit" class="btn btn-primary btn-block">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        user: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      ...mapActions({
        'signIn': 'auth/signIn'
      }),
      submit() {
        this.signIn(this.user).then(() => this.$router.replace({ name: "Dashboard" }))
      }
    }
  }
</script>

<style scoped>

</style>