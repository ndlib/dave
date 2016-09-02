let loadImage = (src) => new Promise(function (resolve, reject) {
  var img = document.createElement('img')
  img.addEventListener('load', function () { resolve(img) })
  img.src = src
})

export default loadImage
