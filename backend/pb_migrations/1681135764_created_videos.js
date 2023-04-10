migrate((db) => {
  const collection = new Collection({
    "id": "ftw07gttaho0v2n",
    "created": "2023-04-10 14:09:24.455Z",
    "updated": "2023-04-10 14:09:24.455Z",
    "name": "videos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zjsvlosd",
        "name": "url",
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
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n");

  return dao.deleteCollection(collection);
})
