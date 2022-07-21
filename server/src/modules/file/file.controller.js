export default class FileController {
  constructor(fileService) {
    this.fileService = fileService
  }

  async saveFile(req, res) {
    res.status(200).json({
      message: 'File registered',
    })
  }
}
