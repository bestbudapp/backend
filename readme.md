## bestBud API Documentation
Deployed here:
### User Sign Up
```HTTP
POST /api/auth/signup
```
Body:
```javascript
{
    username: 'username',
    password: 'password'
}
```
### User Sign In
```HTTP
POST /api/auth/signin
```
Body:
```javascript
{
    username: 'username',
    password: 'password'
}
```
Returns a token
### Status Codes
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
