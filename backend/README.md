## Ambisius - Backend

#### Storing Contact Info
<details>
<summary>POST: /api/v1/store</summary>

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
<details>
<summary>PATCH: /api/v1/update</summary>

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