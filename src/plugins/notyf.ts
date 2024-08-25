import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' 

const notyf = new Notyf({
  duration: 3000, 
  position: { x: 'right', y: 'top' }, 
  ripple: true, 
})

export default {
  install(app: any) {
    app.config.globalProperties.$notyf = notyf
  }
}

export { notyf }
