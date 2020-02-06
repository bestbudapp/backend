<h2 align='center'>Grüvee</h2>
Deployed here: https://bestbudapp.herokuapp.com/
### Sign Up
```HTTP
POST /api/auth/signup
```
Body:
```javascript
{
    username: string,
    password: string
}
```
The `username` value must be unique for every user.

Upon successful sign up, the user's `id` and a `token` is returned.
### Sign In
```HTTP
POST /api/auth/signin
```
Body:
```javascript
{
    username: string,
    password: string
}
```
Upon successful sign in, the user's `id` and a `token` is returned.
### Fetch All Strains
```HTTP
POST /api/strains
```
Body:
```javascript
{
    limit: number,
    offset: number
}
```
There are about 1500 strains, so you don't want to load them all at once.

Example:
```javascript
{
    limit: 30,
    offset: 60
}
```
This will return 30 results, skipping the first 60. This is ideal for pagination.
### Query Strains
```HTTP
POST /api/strains/query
```
Body:
```javascript
{
    filter: string,
    query: string,
    limit: number,
    offset: number
}
```
You can filter by `name`, `flavors`, `race`, `positive_effects`, `negative_effects`, `medical_conditions`, and `rating`.

The `query` for `rating` is still a string.
### Fetch a Single Strain
```HTTP
GET /api/strains/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `:id` | `string` | Strain ID |
### Fetch User's Cabinet
```HTTP
GET /api/cabinet/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `:id` | `string` | User ID |
### Add Strain to User's Cabinet
```HTTP
POST /api/cabinet/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `:id` | `string` | User ID |

Body:
```javascript
{
    strain_id: number
}
```
### Delete Strain from User's Cabinet
```HTTP
DELETE /api/cabinet/:id
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `:id` | `string` | Cabinet ID |
### Strain Recommender
```HTTP
POST /api/recommender
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `:id` | `string` | User ID |

Body:
```javascript
{
    input: string
}
```
### Status Codes
bestBud returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 401 | `UNAUTHORIZED` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
