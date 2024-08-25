import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faMessage, faLinkedin, faGithub, faInstagram, faCode, faEnvelope);

export { FontAwesomeIcon }