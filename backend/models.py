import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT # <-- ADD THIS LINE

try:
    conn = psycopg2.connect(dbname='postgres', host='CSI2132_Postgres_container', port='5432', user='postgres')
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
except Exception as e:
    print(e)
    print("I am unable to connect to the database")
finally:
    cur = conn.cursor()