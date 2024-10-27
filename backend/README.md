Database: Postgres DB momententan Digital Ocean in einem Dokku Droplet gehostet

Tables:
Drugs
Users




Endpoints: 
GET
/api/drug/all   
#returns a list of all saved Drugs
GET
api/drug/?name=word     
#returns all Drugs which name or common_name starts with word, not case sensitive

GET
/api/user 
#returns a list of all users(only shows usernames)

POST
/api/user
body:
{"username":"domi","firstName":"Dominique","lastName":"Jud","password":"1234"}
#creates a new User, usernames are unique, the server will return an 400 Error if duplicate username


Server auf Render gehostet:
Render as Project hosting

