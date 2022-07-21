import multer, { diskStorage } from 'multer'

import FileController from '@/modules/file/file.controller'
import FileService from '@/modules/file/file.service'

export default function register(router) {
  const storage = diskStorage({
    destination: (request, file, callback) => {
      callback(null, 'uploads/')
    },
    filename: (request, file, callback) => {
      callback(null, file.originalname)
    },
  })

  const upload = multer({ storage })
  const controller = new FileController(new FileService())

  router.post('/file', upload.single('file'), controller.saveFile)
}
