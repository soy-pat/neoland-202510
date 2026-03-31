# MyPet

App for pet owners register their pets an their medical information, to have control on their health history.

![galgo](https://media.tenor.com/8-ijypdfQ3gAAAAM/cute-dog.gif)

## Functional

User
- register
- login
- update credentials (username, password)
- update profile (name, email, city, role, licensing number)

Owner (user)
- add pet
- remove pet
- list pets
- add comment log for pet
- remove comment log from pet
- modify comment log from pet
- list logs for pet
- filter veterinaries
- assign veterinary for pet
- unassign veterinary for pet

Veterinary (user)
- add action log for pet
- remove action log for pet
- modify action log for pet
- list logs for pet

## UI/UX design

[Figma](https://www.figma.com/proto/ZwLnEJEH5p6QMUYnwlbOvx/MyPet?node-id=1-82&p=f&t=ORFim7ql53X8Z3o0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A82)

# Technical description

## Blocks
- App (React)
- API (Expess)
- DB (Mongo)
## Packages
- api (handlers, logic, data)
- app (components, logic, data)
- com (errors, validate, regex)
- doc (readme, images)
## Data Model
### UserData

- id (unique, string)
- name (required, string)
- email (required, unique, string)
- username (required, unique, string)
- pasword (required, hashed, string)
- image (string)
- role (required, string, regular | administrator)
### PetData

- id (unique, string)
- owner (UserData.id, string)
- name (required, string)
- birthdate (required, date)
- weight (required, number)
- image (required, string)
### Techs
- HTML / JavaScript / CSS / Tailwind / React / React Router
- Node / Express / Mongo / Mongoose / BCrypt / JWT / curl / Mocha / Chai / Morgan
- Git / Markdown / VSCode / Sublime Merge

# Tracking
[PR](https://github.com/b00tc4mp/neoland-202510/pull/17)
