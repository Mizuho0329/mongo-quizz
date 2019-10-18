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

## CRUD
### User
```
http://localhost:3000/users
```

| HTTP | url | params | body | description |
| :--: | :---: | :----: | :--: | :---------: |
| **POST** | /users |  | {} | Create a user |
| **GET** | /users?limit=5&page=1&filters[username]=toto |  limit, page, filters | | Get users with option |
| **GET** | /users/12345 | user id | | Get a users by user id |
| **PUT** | /users/12345 | user id |{ } | Update a user by user id |
| **DELETE**| /users/12345 | user id | | Delete a user by user id |

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
| **POST** |  | | {} | Create a subject |
| **GET** |   | limit, page, filters |  | Get questions with option |
| **GET** |  | question id |  | Get a question by question id |
| **PUT** |  | question id | { } | Update a question by question id |
| **DELETE**|   | question id |  | Delete a question by question id |

