# Letterbooksd

App for book readers tu upload their books reviews and see another reviews from another users.

![dog reading](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2IwZnlrM2tsaXRkYjlpanIyZWo0Ynk0aW4yOXU0dTZjanBveng0ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dB6ogWRDUsMKuAWrqi/giphy.gif)

## Functional

### User
- register
- login
- add review
- search books
- see reviews from another users after search a book
- see user reviews
- update profile (password, username, email, image)
- delete review
- logout

## UI/UX design

[Figma](https://www.figma.com/design/rbRI4FbDXlYEQMBrBne3PU/Letterbooksd?node-id=0-1&t=9U4FpiLBEj2ZgdKF-1)

# Technical description

## Blocks

- App (React)
- API (Expess)
- DB (Mongo)

## Packages

- api (handlers, logic, data)
- app (components, logic, data)
- com (errors, regex)
- doc (readme, images)

## Data Model
UserData
- id (unique, string)
- name (required, string)
- email (required, unique, string)
- username (required, unique, string)
- password (required, hashed, string)
- image (string)

ReviewData
- id (unique, string)
- title (required, string)
- image (required, string)
- stars (required, string)
- subject (required, string)
- body (required, string)

## Techs

- HTML / JavaScript / CSS / Tailwind / React / React Router
- Node / Express / Mongo / Mongoose / BCrypt / JWT / curl / Mocha / Chai / Morgan
- Git / Markdown / VSCode / Sublime Merge

## Tracking

[PR](https://github.com/b00tc4mp/neoland-202510/pull/29)