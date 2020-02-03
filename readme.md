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
`POST` /api/auth/signin  
Returns a token  
Body:
```javascript
{
    username: 'username',
    password: 'password'
}
```
