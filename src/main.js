// bootstrap
import BootstrapVue from 'bootstrap-vue'
//global stylesheet
import '~/assets/style/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import { metadata } from "./data/metadata.json";

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI(
      'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap',
    ),
  })
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI(
      'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
    ),
    integrity: 'sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP',
    crossorigin: 'anonymous'
  })
  for (const meta of metadata) {
    head.meta.push(meta)
  }
}
