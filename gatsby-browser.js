// import ReactDOM from 'react-dom'
// import { loadableReady } from '@loadable/component'
import Provider from './provider'

export const wrapRootElement = Provider

// export const replaceHydrateFunction = () => {
//   return (element, container, callback) => {
//     loadableReady(() => {
//       ReactDOM.render(element, container, callback)
//     })
//   }
// }
