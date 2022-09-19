Book API Service 
===================
This is a Book API service example used for testing with Cucumber in the [cucumber](../cucumber) project.

## Install Modules
To install all the dependencies of the project, cd into the home directory and execute the following command,
```
yarn install
```

## Endpoints

### Health 
To check the health of the service,
```
curl --request GET \
  --url http://localhost:8081/health
```

Expected response,
```json
{
	"status": "UP"
}
```

### Create a Book
Here's an example request for creating a book,

```
curl --request POST \
  --url http://localhost:8081/books \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Indra'\''s Chronicle"
}'
```

You should expect a response as shown below,
```json
{
  "id": "15e4917d-c2e3-4e48-b7ef-ea915470aa55",
  "name": "Indra's Chronicle"
}
```

### Retrieve a Book
Here's an example for retrieving the book based on the ID retruned during the creation of a book,
```
curl --request GET \
  --url http://localhost:8081/books/15e4917d-c2e3-4e48-b7ef-ea915470aa55
```

You should expect a response as shown below,
```json
{
  "id": "15e4917d-c2e3-4e48-b7ef-ea915470aa55",
  "name": "Indra's Chronicle"
}
```

### Timeout endpoint
This endpoint is used for testing axios retry module. The endpoint only returns immediately
for every third request.

```
curl --request GET \
  --url http://localhost:8081/timeout
```

## Lint
To run lint on the whole project, execute the following command from a terminal,
```
yarn lint
```

## Formatting
To format a specify file using the standard for this project, execute the following command from a terminal,
```
yarn eslint --fix <path to file>
