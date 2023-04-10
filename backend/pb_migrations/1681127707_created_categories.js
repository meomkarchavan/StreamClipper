migrate((db) => {
  const collection = new Collection({
    "id": "1ox9umzrwakidwb",
    "created": "2023-04-10 11:55:07.498Z",
    "updated": "2023-04-10 11:55:07.498Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qixutqmr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1ox9umzrwakidwb");

  return dao.deleteCollection(collection);
})
