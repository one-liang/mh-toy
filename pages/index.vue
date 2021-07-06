<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title" style="margin-bottom: 1000px">mh-toy</h1>
      <button type="button" class="bg-rose-600 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <!-- ... -->
        </svg>
        Processing
      </button>
      <ul class="space-y-8">
        <li
          v-for="(product, index) in products"
          :key="product.id"
          class="flex space-x-2"
        >
          {{ index + 1 }} -- {{ product.title }}
          <img v-lazy="product.imageUrl" class="object-cover w-40 h-40" />
        </li>
        <li v-for="(product, index) in 10" :key="index" class="flex space-x-2">
          {{ index + 1 }}
          <img
            v-lazy="`https://picsum.photos/id/${index + 100}/200/300`"
            class="object-cover w-40 h-40"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const products = await context.$axios(
      `${process.env.apiUrl}/api/${process.env.API_PATH}/products/all`
    )
    console.log('products.data: ', products.data)
    return products.data
  },
  data() {
    return {
      products: {},
    }
  },
  created() {
    // const api = `${process.env.apiUrl}/api/${process.env.API_PATH}/products/all`
    // this.$axios.get(api).then((res) => {
    //   console.log(res.data)
    //   this.products = res.data.products
    // })
    // console.log('api: ', api)
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
