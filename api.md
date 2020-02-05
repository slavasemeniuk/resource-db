# API Documentation

## Create Resource

```
api/resources?name=test
```

**Method**: POST

**Query Parameters**:
  - name: file name

**Body**: Bynary data

**Responce**:
```json
{
    "_id": "5e380d6d45e498cc8d2cc51f",
    "path": "/Users/***/nodejs/DbFile/resources/1b6000ad-4cf2-4ab0-871f-105d57a78c9c",
    "extension": "mp4",
    "mimeType": "video/mp4",
    "name": "test",
    "__v": 0
}
```

## Get Resource

```
api/resources/:id
```

**Method**: GET

**Responce**:
```json
{
    "_id": "5e380d6d45e498cc8d2cc51f",
    "path": "/Users/***/nodejs/DbFile/resources/1b6000ad-4cf2-4ab0-871f-105d57a78c9c",
    "extension": "mp4",
    "mimeType": "video/mp4",
    "name": "test",
    "__v": 0
}
```

## Delete Resource

```
api/resources/:id
```

**Method**: Delete

**Responce**: Empty

## Get Resources

```
api/resources
```

**Method**: GET

**Responce**:
```json
[{
    "_id": "5e380d6d45e498cc8d2cc51f",
    "path": "/Users/***/nodejs/DbFile/resources/1b6000ad-4cf2-4ab0-871f-105d57a78c9c",
    "extension": "mp4",
    "mimeType": "video/mp4",
    "name": "test",
    "__v": 0
}]
```

## Update Resources

```
api/resources/:id
```

**Method**: PUT

**Responce**:
```json
{
    "_id": "5e380d6d45e498cc8d2cc51f",
    "path": "/Users/***/nodejs/DbFile/resources/1b6000ad-4cf2-4ab0-871f-105d57a78c9c",
    "extension": "mp4",
    "mimeType": "video/mp4",
    "name": "test",
    "__v": 0
}
```