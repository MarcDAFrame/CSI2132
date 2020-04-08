from cur import cur

tables = ["users", "contactinfo", "address", "host", 
    "guest", "employee", "branchmanager", 
    "branch", "property", "rentalagreement",
    "amenities", "review", "payment"]
tables.reverse()
for i in tables:
    try:
        cur.execute("DROP TABLE %s"%i)
    except:
        print("failed on", i)