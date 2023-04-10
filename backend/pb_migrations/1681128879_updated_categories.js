migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ox9umzrwakidwb")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ox9umzrwakidwb")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
