from cur import cur

def executeSQLFile(f):
    statement = open(f, "r").read()
    cur.execute(statement)


executeSQLFile("./statements/create/Users")
executeSQLFile("./statements/create/ContactInfo")
executeSQLFile("./statements/create/Address")
executeSQLFile("./statements/create/Host")
executeSQLFile("./statements/create/Guest")
executeSQLFile("./statements/create/Employee")
executeSQLFile("./statements/create/BranchManager")
executeSQLFile("./statements/create/Branch")
executeSQLFile("./statements/create/Property")
executeSQLFile("./statements/create/RentalAgreement")
executeSQLFile("./statements/create/Amenities")
executeSQLFile("./statements/create/Review")
executeSQLFile("./statements/create/Payment")
