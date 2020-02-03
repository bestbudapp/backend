## bestBud API Documentation
Deployed here:
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
Returns a token
### Status Codes
bestBud returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
