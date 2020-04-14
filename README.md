
## To Run
```
docker-compose up -d
```

## View the website at 
[localhost:3000](http://localhost:3000)

## To View Logs
```
docker logs -f CSI2132_Postgres_container
```
## To access postgress cli
```
docker exec -it CSI2132_Postgres_container psql -U postgres

# View Tables
\dt
```

## Terminate / Cleanup
```
docker-compose down
docker system prune -a
```
