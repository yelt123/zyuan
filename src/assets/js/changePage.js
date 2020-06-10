function changePage (name) {
  this.$router.push({
    path: `/${name}`
  })
}
export {
  changePage
}

//   changePage (name) {
//     switch (name) {
//       case 'agent':
//         this.$router.push({
//           path: '/agent'
//         })
//         break
//       case 'address':
//         this.$router.push({
//           path: '/address'
//         })

//         break
//       case 'wallet':
//         this.$router.push({
//           path: '/wallet'
//         })

//         break
//       case 'security-center':
//         this.$router.push({
//           path: '/security-center'
//         })

//         break
//       case 'extension':
//         this.$router.push({
//           path: '/extension'
//         })

//         break
//       case 'Message':
//         this.$router.push({
//           path: '/Message'
//         })

//         break
//     }
//   }
