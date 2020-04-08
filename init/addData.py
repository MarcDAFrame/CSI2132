from faker import Faker
from cur import cur

fake = Faker(["en_US"])
Faker.seed(123)

print(fake.name())
print(fake.name())



def addRow():
    cur.execute("""
        INSERT
    """)
def getUser():
    """
    userID int NOT NULL,
	phoneNumber varchar(255),
	firstName varchar(255),
	middleName varchar(255),
	lastName varchar(255),
	emailAddress varchar(255),
	PRIMARY KEY (userID)
    """
    return {
        "userID" : 0,
        "phoneNumber" : fake.phone_number(),
        "firstName" : fake.first_name(),
        "middleName" : fake.first_name(),
        "lastName" : fake.last_name(),
        "emailAddress" : fake.email()
    }

print(getUser())