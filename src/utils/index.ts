export let previewImage = (src: string) => {
  console.log('previewImage', src)
  uni.previewImage({
    urls: [src],
    success: (res) => {
      console.log('π ~ file: index.vue ~ line 104 ~ previewImage ~ res', res)
    },
    fail: (err) => {
      console.log('π ~ file: index.vue ~ line 107 ~ previewImage ~ err', err)
    },
  })
}

export let baseUrl = (imagePath: string = '') => {
  let site = import.meta.env.VITE_BASE_URL || ''
  if (site[site.length - 1] !== '/') {
    site = `${site}/`
  }
  if (imagePath[0] === '/') {
    imagePath = imagePath.replace('/', '')
  }
  return `${site}/${imagePath}`
}

export let upload = (filePath: string, token: string) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      filePath,
      name: 'file',
      url: `${import.meta.env.VITE_BASE_URL}/api/common/upload`,
      formData: {
        token,
      },
      success: (res) => {
        let resBody = JSON.parse(res.data);
        resolve(resBody.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export let download = (path: string) => {
  uni.showToast({
    title: 'ζδ»ΆδΈθ½½δΈ­',
  })
  uni.downloadFile({
    url: baseUrl(path),
    success: (res) => {
      if (res.statusCode == 200) {
        uni.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (res) {
            var savedFilePath = res.savedFilePath
            uni.openDocument({
              filePath: savedFilePath,
              showMenu: true,
              success: function (res) {
                console.log('ζεΌζζ‘£ζε')
              },
            })
          },
        })
      }
    },
  })
}

export let makePhoneCall = (phoneNumber: string) => {
  uni.makePhoneCall({
    phoneNumber,
  })
}
