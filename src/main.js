// bootstrap
import BootstrapVue from 'bootstrap-vue'
import '~/assets/style/style.css'
//global stylesheet
import '~/assets/style/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI(
      'https://fonts.googleapis.com/css?family=Muli:400,400i,700|Roboto:700&display=swap',
    ),
  })
}
