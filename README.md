## Groupe

- Geoffrey CARPENTIER
- Yannik GUILLODO 
- Mizuho TOXE


## Installation

```
git clone https://github.com/Mizuho0329/mongo-quizz.git

cd mongo-quizz

npm install
```
## Usage

Rename '.env.exemple' to '.env'  
and set environment variables 
```
PORT=3000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=mongo-quizz
```

## Authentication

If Authentication exists 
set environment variables in '.env'
```
DB_USER=
DB_PASS=
```

Else update the url for the connection in the 'www' file :

```
//if you use authentication
var url_with_auth = 'mongodb://' + process.env.DB_USER +':'+ process.env.DB_PASS +'@'+ process.env.DB_HOST +':'+ process.env.DB_PORT+  '/' + process.env.DB_NAME + '?authSource=admin';

// else
var url_without_auth = 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME ;

// replace the url if necessary
app.locals.db = mongoose.connect(url_with_auth, { useNewUrlParser: true, useUnifiedTopology: true });
```

## CRUD
### User
```
http://localhost:3000/users
```

| HTTP | url | params | body | description |
| :--: | :---: | :----: | :--: | :---------: |
| **POST** | /users |  | {}* | Create a user |
| **GET** | /users?limit=5&page=1&filters[username]=toto |  limit, page, filters | | Get users with option |
| **GET** | /users/12345 | user id | | Get a users by user id |
| **PUT** | /users/12345 | user id |{}* | Update a user by user id |
| **DELETE**| /users/12345 | user id | | Delete a user by user id |
```
*
{
    "firstname": "Henry",
    "lastname": "Legrand",
    "username": "HLegrand",
    "email": "hlegrand@monastic.uk"
}
```
### Subject
```
http://localhost:3000/subjects
```

| HTTP | url | params | body | description |
| :--: | :---: | :----: | :--: | :---------: |
| **POST** | /subjects |  | { "name" : "subject 1" } | Create a subject |
| **GET** | /subjects?limit=5&page=1&filters[name]=PHP | limit, page, filters |  | Get subjects with option |
| **GET** | /subjects/12345 | subject id |  | Get a subject by subject id |
| **PUT** | /subjects/12345 | subject id | { "name": "subject 10"} | Update a subject by subject id |
| **DELETE**| /subjects/12345 | subject id |  | Delete a subject by subject id |

### Question
```
http://localhost:3000/subjects/questions
```

| HTTP | url | params | body | description |
| :--: | :---: | :----: | :--: | :---------: |
| **POST** |  | | {}* | Create a subject |
| **GET** |   | limit, page, filters |  | Get questions with option |
| **GET** |  | question id |  | Get a question by question id |
| **PUT** |  | question id | {}* | Update a question by question id |
| **DELETE**|   | question id |  | Delete a question by question id |

```
*
{
	"question" : "Question ?",
	"answers": [
		{
			"answer": "VRAI",
			"is_correct": true
		},
		{
			"answer": "FAUX",
			"is_correct": false
		}
		],
		 "user_id": "5dc9802680e25f57149501e4",
		 "subject_id": "5da862a5e07d934a1c2efd65"
		 
}
```


## POSTMAN

You can import the "Mongo-quizz.postman_collection.json" (in the the root folder) in Postman to have all the path of the API

