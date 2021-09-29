const Person = require('./models/person');
const Product = require('./models/person');

const personsData = [
    {
        name: 'Sahil',
        email: 'sahil@gmail.com',
        contact: 9876512322,
        address: 'location1',
        inTime:'11:00 AM',
        outTime:'02:30 PM',
        dateAndDay:'Sept 22 Wednesday'
    },
    {
        name: 'Akhil',
        email: 'akhil@gmail.com',
        contact: 9845273920,
        address: 'location2',
        inTime:'10:00 AM',
        outTime:'05:30 PM',
        dateAndDay:'Sept 22 Wednesday'
        
    },
    {
        name: 'Vishal',
        email: 'vishal@gmail.com',
        contact: 9888815903,
        address: 'location3',
        inTime:'11:00 AM',
        dateAndDay:'Sept 23 Thursday'

    },
    {
        name: 'Vinayak',
        email: 'vinayak@gmail.com',
        contact: 9056370848,
        address: 'location4',
        inTime:'10:00 AM',
        dateAndDay:'Sept 23 Thursday'

    }
]

const seedDB = async () => {

    await Person.deleteMany({});

    await Person.insertMany(personsData);
    console.log('DB Seeded');
}


module.exports=seedDB;