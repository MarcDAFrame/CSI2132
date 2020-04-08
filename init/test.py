from cur import cur

# test = cur.execute("""
# CREATE TABLE Test (
# 	ID int NOT NULL,
# 	number int,
# 	text varchar(255)
# );
# """)
# INSERT INTO Test (ID, number, text) VALUES(0, 0, 'hello')

test = cur.execute("""
SELECT * FROM TEST;
""")
mobile_records = cur.fetchall() 


print(mobile_records)