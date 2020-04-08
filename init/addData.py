from faker import Faker
from cur import cur
from random import random, choice


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
    userID = cur.fetchone()[0]
    cur.execute("""
        INSERT INTO ContactInfo (userID, emailAddress, phoneNumber) 
        VALUES (%(userID)s, %(emailAddress)s, %(phoneNumber)s);
    """, getContactInfo(userID))

    cur.execute("""
        INSERT INTO Address (userID, houseNumber, street, city, province, postalCode,
        VALUES (%(userID)s, %(houseNumber)s, %(street)s, %(city)s, %(province)s, %(postalCode)s);
    """, getAddress(userID))

    
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
        "userID" : userId,
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

def getBranch():
    return {
        "phoneNumber" : fake.phone_number(),
        "country" : fake.country(),
        "emailAddress" : fake.email_address(),
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

print(getUser())
# addRow()