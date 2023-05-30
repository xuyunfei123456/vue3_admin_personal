import { createApp } from 'vue'
import App from './App.vue'

const speak = () => {const a = 123

  console.log('咕咕咕', a)
}
console.log(speak())
createApp(App).mount('#app')
