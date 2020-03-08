<template>
	<span>
		<span v-if="!loading">Hi </span>
		<span>{{ name }}</span>
	</span>
</template>

<script>
const axios = require('axios')

export default {
  data () {
      return {
          name: '...',
          loading: true
      }
  },
  beforeMount () {
    axios.get('https://uinames.com/api/')
    .then(response => {
       this.$data.name = response.data.name,
       this.$data.loading = false
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>