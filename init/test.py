from cur import cur
from addData import getUser 
# test = cur.execute("""
# CREATE TABLE Test (
# 	ID int NOT NULL,
# 	number int,
# 	text varchar(255)
# );
# """)
# INSERT INTO Test (ID, number, text) VALUES(0, 0, 'hello')

# test = cur.execute("""
# SELECT * FROM TEST;
# """)
# mobile_records = cur.fetchall() 

cur.execute("""
    INSERT INTO Users (userID, phoneNumber, firstName, middleName, lastName, emailAddress) 
    VALUES (%(userID)s, %(phoneNumber)s, %(firstName)s, %(middleName)s, %(lastName)s, %(emailAddress)s) RETURNING userID;
""", getUser())
print(mobile_records)