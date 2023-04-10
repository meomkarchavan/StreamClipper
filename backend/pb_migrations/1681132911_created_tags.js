migrate((db) => {
  const collection = new Collection({
    "id": "5fv81dw0u19rh9a",
    "created": "2023-04-10 13:21:51.655Z",
    "updated": "2023-04-10 13:21:51.655Z",
    "name": "tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pwuycria",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("5fv81dw0u19rh9a");

  return dao.deleteCollection(collection);
})
