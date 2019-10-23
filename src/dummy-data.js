export default {
    "planners": [
        {
            'id': '1',
            'firstName': 'Mulan',
            'lastName': 'Fa',
            'email': 'FaMulan1998@gmail.com',
            'budget': '$42,500',   
        }
    ],
    "guests": [
        {
            'id': '1',
            'firstName': 'Li',
            'lastName': 'Shang',
            'email': 'Down2Business@gmail.com',
            'plannerId': '1',
        },
        {
            'id': '2',
            'firstName': 'Zu',
            'lastName': 'Fa',
            'email': 'WarriorZu202@gmail.com',
            'plannerId': '1',
        }
    ],
    "expenses": [
        {
            'name': `Chien Po's Dumplings`,
            'type': 'Catering',
            'note': 'Pork, beef, chicken',
            'price': '$1000',
            'plannerId': '1'
        },
        {
            'name': `Emporer's Palace`,
            'type': 'Venue',
            'note': 'Tea Ceremony Location',
            'price': '$2500',
            'plannerId': '1'
        }
    ]
}