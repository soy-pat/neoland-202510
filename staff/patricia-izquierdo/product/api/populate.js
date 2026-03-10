import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('product')

        const users = db.collection('users')
        const pets = db.collection('pets')

        users.find({}).toArray()
            .then(users => console.table(users))
            .catch(error => console.error(error))

        pets.find({}).toArray()
            .then(pets => console.table(pets))
            .catch(error => console.error(error))

        // users.insertOne({ name: 'To Mate', email: 'to@mate.com', username: 'tomate', password: '123123123' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.updateOne({ _id: new ObjectId('69af2afb0ee7fe4bc0e45870') }, { $set: { password: '345345345' } })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.deleteOne({ _id: new ObjectId('69b06ed6b486761b89f6443b') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))

        // users.findOne({ _id: new ObjectId('69b06ee1cc11453fec3ba354') })
        //     .then(user => console.log(user))
        //     .catch(error => console.error(error))

        // users.find({ name: /l/i }).toArray()
        //     .then(users => console.table(users))
        //     .then(users => console.log(users))
        //     .catch(error => console.error(error))

        pets.insertOne({ userId: new ObjectId('69af22954d59c13ca7bf6889'), name: 'Salami', birthdate: new Date('2021-04-05'), weight: 4, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlnZzExdnhoNXY4NDZ2MnY1d2c4MWk0MzczNDJvMTJtd2sxMndvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YggtBfM5OkFsQ/giphy.gif' })
            .then(result => console.log(result))
            .catch(error => console.error(error))

        // pets.deleteMany({ userId: new ObjectId('69af21784d59c13ca7bf6888') })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))
    })
    .catch(error => console.error(error))