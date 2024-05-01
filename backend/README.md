# Ambisius - Backend Documentation

## Environment Sample (.env)

```shell
# USING AT DOCKER CONTAINER
# DATABASE_URL="mongodb://username:password@host.docker.internal:27017/ambisius?retryWrites=true&authSource=admin&directConnection=true"
# USING AT LOCALHOST
DATABASE_URL="mongodb://username:password@localhost:27017/ambisius?retryWrites=true&authSource=admin&directConnection=true"

SERVICE_LOCAL_PORT=4080
NODE_ENV="DEVELOPMENT"
```

## Populate Contacts Info
<details>
<summary>GET: /api/v1/contacts (Response Body)</summary>

```json
{
    "status": "OK",
    "code": 200,
    "data": [
        {
            "id": "6630eda8d2691e7e49fbe1ec",
            "firstName": "Sydney",
            "lastName": "Lehner",
            "position": "Designer",
            "phone": "541-737-8984",
            "email": "Modesta_Roberts77@hotmail.com"
        },
        {
            "id": "6630edb3d2691e7e49fbe1ed",
            "firstName": "Aletha",
            "lastName": "Wilkinson",
            "position": "Coordinator",
            "phone": "465-883-8433",
            "email": "Davin53@gmail.com"
        },
        {
            "id": "6631004c6b1c2b8566c4b626",
            "firstName": "Patsy",
            "lastName": "Rau",
            "position": "Planner",
            "phone": "884-851-3749",
            "email": "Monty_Ratke47@gmail.com"
        },
        {
            "id": "66310547ff4c8ece5adb1af8",
            "firstName": "Hassan",
            "lastName": "Gibson",
            "position": "Coordinator",
            "phone": "535-952-9937",
            "email": "Jedidiah_Hintz60@gmail.com"
        },
        {
            "id": "6631062511cea232933de349",
            "firstName": "Kenneth",
            "lastName": "Fay",
            "position": "Analyst",
            "phone": "492-592-2868",
            "email": "Therese.Zieme@gmail.com"
        }
    ]
}
```
</details>

## Storing Contact Info
>POST: /api/v1/store

<details>
<summary>Request Body</summary>

```json
{
    "payload": [
        {
            "firstName": "{{$randomFirstName}}",
            "lastName": "{{$randomLastName}}",
            "position": "{{$randomJobType}}",
            "phone": "{{$randomPhoneNumber}}",
            "email": "{{$randomEmail}}"
        },
        {
            "firstName": "{{$randomFirstName}}",
            "lastName": "{{$randomLastName}}",
            "position": "{{$randomJobType}}",
            "phone": "{{$randomPhoneNumber}}",
            "email": "{{$randomEmail}}"
        }
    ]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
    "status": "OK",
    "code": "200",
    "message": {
        "storing": "2 contacts"
    }
}
```

</details>

## Updating Contact Info
>PATCH: /api/v1/update

<details>
<summary>Request Body</summary>

```json
{
    "payload": [
        {
            "id": "6630eda8d2691e7e49fbe1ec",
            "firstName": "{{$randomFirstName}}",
            "phone": "{{$randomPhoneNumber}}"
        },
        {
            "id": "6630edb3d2691e7e49fbe1ed",
            "email": "{{$randomEmail}}",
            "position": "{{$randomJobTitle}}"
        }
    ]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
    "status": "OK",
    "code": 200,
    "details": [
        {
            "id": "6630eda8d2691e7e49fbe1ec",
            "firstName": "Esther",
            "phone": "883-853-8432"
        },
        {
            "id": "6630edb3d2691e7e49fbe1ed",
            "email": "Amalia.Denesik21@yahoo.com",
            "position": "Product Paradigm Orchestrator"
        }
    ]
}
```

</details>

## Removing Contact
>DELETE: /api/v1/contacts

<details>
<summary>Request Body</summary>

```json
{
    "ids": [
        "6631e6fb6aa21d0ff0aea31b", 
        "6631e6fb6aa21d0ff0aea31a", 
        "6631e6c16aa21d0ff0aea319"
    ]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
    "status": "OK",
    "code": 200,
    "message": {
        "removing": "3 contacts"
    }
}
```

</details>