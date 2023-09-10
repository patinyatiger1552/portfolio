import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faEnvelope,
  faMoon,
  faSun,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faNode,
  faPhp,
  faPython,
  faSlack,
  faDocker,
  faUbuntu,
  faFigma,
  faSquareGit,
  faLinux,
  faYarn,
  faBootstrap,
  faReact,
  faNpm,
  faDev
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
  faMoon,
  faSun,
  faEnvelope,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faNode,
  faPhp,
  faPython,
  faSlack,
  faDocker,
  faUbuntu,
  faFigma,
  faSquareGit,
  faGithub,
  faLinux,
  faYarn,
  faBootstrap,
  faReact,
  faNpm,
  faDev
);

const app = createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

