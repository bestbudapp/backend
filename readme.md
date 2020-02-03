## Documentation
Deployed here:
### User Sign Up
`POST` /api/auth/signup  
Body:
```javascript
{
    username: 'username',
    password: 'password'
}
```
### User Sign In
`POST` /api/auth/signin  
Body:
```javascript
{
    username: 'username',
    password: 'password'
}
```
Returns a token
