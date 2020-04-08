from faker import Faker
from cur import cur
from random import random, choice

# https://faker.readthedocs.io/en/master/providers/faker.providers.address.html
fake = Faker(["en_US"])
Faker.seed(123)

def randomNum(minN, maxN):
    return minN + (random() * (maxN - minN))
def randomPick(li):
    return choice(li)

def addRow():
    cur.execute("""
        INSERT INTO Users (userID, phoneNumber, firstName, middleName, lastName, emailAddress) 
        VALUES (%(userID)s, %(phoneNumber)s, %(firstName)s, %(middleName)s, %(lastName)s, %(emailAddress)s) RETURNING userID;
    """, getUser())
    # https://stackoverflow.com/questions/5247685/python-postgres-psycopg2-getting-id-of-row-just-inserted
    userID = cur.fetchone()[0]

    cur.execute("""
        INSERT INTO ContactInfo (userID, emailAddress, phoneNumber) 
        VALUES (%(userID)s, %(emailAddress)s, %(phoneNumber)s);
    """, getContactInfo(userID))

    cur.execute("""
        INSERT INTO Address (userID, houseNumber, street, city, province, postalCode,
        VALUES (%(userID)s, %(houseNumber)s, %(street)s, %(city)s, %(province)s, %(postalCode)s);
    """, getAddress(userID))

    cur.execute("""
        INSERT INTO Host (userID, phoneNumber, emailAddress)
        VALUES (%(userID)s, %(phoneNumber)s, %(emailAddress)s) RETURNING userID;
    """, getHost(userID))
    hostID = cur.fetchone()[0]


    cur.execute("""
        INSERT INTO Guest (userID, phoneNumber, emailAddress,)
        VALUES (%(userID)s, %(phoneNumber)s, %(emailAddress)s) RETURNING userID;
    """, getGuest(userID))
    guestID = cur.fetchone()[0]

    cur.execute("""
        INSERT INTO BranchManager (userID) 
        VALUES (%(userID)s);
    """, getBranchManager(userID))

    cur.execute("""
        INSERT INTO Branch (branchID, phoneNumber, country, emailAddress, branchManagerID)
        VALUES (%(branchID)s, %(phoneNumber)s, %(country)s, %(emailAddress)s, %(branchManagerID)s) RETURNING branchID;
    """, getBranch(userID))
    branchID = cur.fetchone()[0]

    cur.execute("""
        INSERT INTO Employee (userID, salary, position, branchID)
        VALUES (%(userID)s, %(salary)s, %(position)s, %(branchID)s);
    """, getEmployee(userID, branchID))


    cur.execute("""
        INSERT INTO Property (propertyID, hostID, accommodationType, roomType, maxGuests, numBathrooms, numBedrooms, numBeds, pricing, isOccupied, rules) VALUES (int NOT NULL, int, varchar(255), varchar(255), int, int, int, int, float, boolean, varchar(255));
        VALUES (%(propertyID)s, %(hostID)s, %(accommodationType)s, %(roomType)s, %(maxGuests)s, %(numBathrooms)s, %(numBeds)s, %(pricing)s, %(isOccupied)s, %(rules)s) RETURNING propertyID;
    """, getProperty())
    propertyID = cur.fetchone()[0]

    cur.execute("""
        INSERT INTO RentalAgreement (rentalAgreementID, startDate, endDate, hostID, guestID, propertyID)
        VALUES (%(rentalAgreementID)s, %(startDate)s, %(endDate)s, %(hostID)s, %(guestID)s, %(propertyID)s) RETURNING rentalAgreementID;
    """, getRentalAgreement(hostID, guestID, propertyID))
    rentalAgreementID = cur.fetchone()[0]


    cur.execute("""
        INSERT INTO Amenities (propertyID, type) 
        VALUES (%(propertyID)s, %(type)s);
    """, getAmenities(propertyID))


    cur.execute("""
        INSERT INTO Review (rentalAgreementID, reviewerID, rating, communications, cleanliness, value)
        VALUES (%(rentalAgreementID)s, %(reviewerID)s, %(rating)s, %(communications)s, %(cleanliness)s, %(value)s);
    """, getReview(rentalAgreementID, userID))


    cur.execute("""
        INSERT INTO Payment (paymentID, rentalAgreementID, paymentMethod, status,
        VALUES (%(paymentID)s, %(rentalAgreementID)s, %(paymentMethod)s, %(status)s);
    """, getPayment(rentalAgreementID))
    

    print(id_of_new_row)


def getUser():
    return {
        "userID" : 3,
        "phoneNumber" : fake.phone_number(),
        "firstName" : fake.first_name(),
        "middleName" : fake.first_name(),
        "lastName" : fake.last_name(),
        "emailAddress" : fake.email()
    }

def getContactInfo(userID):
    return {
        "userID" : userID,
        "phoneNumber" : fake.phone_number(),
        "emailAddress" : fake.email() 
    }

def getAddress(userID):
    return {
        "userID" : userID,
        "houseNumber": fake.building_number(),
        "street": fake.street_name(),
        "city" : fake.city(),
        "province" : randomPick(["on", "bc", "qc", "pe", "nt", "sk", "ab", "mb"]),
        "postalCode" : fake.postcode(),
    }

def getHost(userID):
    return {
        "userID" : userID,
        "phoneNumber" : fake.phone_number(),
        "emailAddress" : fake.email(),
    }

def getGuest(userID):
    return {
        "userID": userID,
        "phoneNumber" : fake.phone_number(),
        "emailAddress" : fake.email(),
    }

def getEmployee(userID, branchID):
    return {
        "userID" : userID,
        "salary" : randomNum(10000, 250123),
        "position" : randomPick(["Developer", "Manager", "Janitor", "HR", "Finances", "Accounting", "Office Dog"]),
        "branchID" : branchID,
    }

def getBranchManager(userID):
    return {
        "userID" : userID,
    }

def getBranch(branchManagerID):
    return {
        "phoneNumber" : fake.phone_number(),
        "country" : fake.country(),
        "emailAddress" : fake.email_address(),
        "branchManagerID" : branchManagerID
    }

def getProperty():
    return {
        "accommodationType" : fake.text()[0:100],
        "roomType" : fake.text()[0:50],
        "maxGuests" : randomNum(2, 15),
        "numBathrooms" : randomNum(1, 5),
        "numBedrooms" : randomNum(1, 10),
        "numBeds" : randomNum(1, 20),
        "pricing" : randomNum(80, 550),
        "isOccupied" : randomPick([True, False]),
        "rules" : fake.text()[0:150],
    }

def getRentalAgreement(hostID, guestID, propertyID):
    return {
        "startDate": fake.date(),
        "endDate" : fake.date(),
        "hostID" : hostID,
        "guestID" : guestID,
        "propertyID" : propertyID
    }

def getAmenities(propertyID):
    return {
        "propertyID" : propertyID,
        "type": fake.text()[0:50],
    }


def getReview(rentalAgreementID, reviewerID):
    return {
        "rentalAgreementID" : rentalAgreementID,
        "reviewerID" : reviewerID,
        "rating" : randomNum(1,5),
        "communications": fake.text()[0:250],
        "cleanliness" : fake.text()[0:250],
        "value" : randomNum(1,10)
    }


def getPayment(rentalAgreementID):
    return {
        "rentalAgreementID": rentalAgreementID,
        "paymentMethod" : fake.credit_card_provider(),
        "status" : randomPick([True, False, True, True, True]),   
    }

# print(getUser())
print(getEmployee(0, 0))
# addRow()