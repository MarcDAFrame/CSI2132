
## To initialize
```
docker-compose up -d
```

## To View Logs
```
docker logs -f CSI2132_Postgres_container
```
## To access postgress cli
```
docker exec -it CSI2132_Postgres_container psql -U postgres
```