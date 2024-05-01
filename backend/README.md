## Ambisius - Backend Documentation

#### Storing Contact Info
>POST: /api/v1/store

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

#### Updating Contact Info
>PATCH: /api/v1/update

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
            "lastName": "{{$randomLastName}}",
            "email": "{{$randomEmail}}"
        }
    ]
}
```

</details>