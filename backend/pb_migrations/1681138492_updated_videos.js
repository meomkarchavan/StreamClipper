migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scwsmbyr",
    "name": "youtube_title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ls0xkd1z",
    "name": "duration",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "us5uc6w8",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // remove
  collection.schema.removeField("scwsmbyr")

  // remove
  collection.schema.removeField("ls0xkd1z")

  // remove
  collection.schema.removeField("us5uc6w8")

  return dao.saveCollection(collection)
})
