import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT # <-- ADD THIS LINE

try:
    conn = psycopg2.connect(dbname='postgres', host='localhost', port='54320', user='postgres')
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
except Exception as e:
    print(e)
    print("UNABLE TO CONNECT TO DATABASE")
finally:
    cur = conn.cursor()