const Resource = require('../models/Resource')
const connection = require('./../loader/db')
const fs = require('promise-fs')
const uuidv4 = require('uuid/v4');
const resourcesPath = require('./../resources/path')
const FileType = require('file-type');

module.exports.get = (id) => Resource.find({}) 
module.exports.index = (id) => Resource.findById(id)
module.exports.create = (req) => setResourceFromRequest(req, new Resource())

module.exports.put = async (req) => {
  const query = Resource.findById(req.params.id)
  const resource = await query.exec()
  await fs.unlink(resource.path)
  return await setResourceFromRequest(req, resource)
}

module.exports.delete = async (id) => {
  const query = Resource.findById(id).exec()
  const resource = await query.exec()
  if (!resource) { return }
  await fs.unlink(resource.path)
  await resource.remove()
}

// Helpers
setResourceFromRequest = async (req, resource) => {
  const filePath = await writeToFile(req)
  resource.path = filePath
  const fileType = await FileType.fromFile(filePath)
  resource.extension = fileType.ext
  resource.mimeType = fileType.mime
  resource.name = req.query.name
  return await resource.save()
}

writeToFile = (req) => new Promise((resolve, reject) => {
    const filePath = resourcesPath.make(uuidv4())
    req.pipe(fs.createWriteStream(filePath))
      .on('close', () => { resolve(filePath) })
      .on('error', error =>  reject(error))
  })
