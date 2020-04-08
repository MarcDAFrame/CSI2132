FROM python:3
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
CMD [ "python", "./empty.py" ]
CMD [ "python", "./createTables.py" ]
CMD [ "python", "./addData.py" ]