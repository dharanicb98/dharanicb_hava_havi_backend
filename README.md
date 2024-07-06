backend 

a database with three tables, “Airport”, “City” and  “Country”. 
Here are the tables in this spreadsheet. Database(https://docs.google.com/spreadsheets/d/1CLIUfiw2MduzIXNUXNKLR7e8h8JBikqyfJwmGutt7Kw/edit?gid=835620982#gid=835620982)

Below are the tasks for guidence above code what thing i completed.
Create this database on postgres or mysql, using typeORM
Create a GET api with request parameter being the “iata_code”, use only one query to create API using relations
Accurate input of “iata_code” should give a response in the following format.
{
  "airport": {
    "id": 145,
    "icao_code": "VIAG",
    "iata_code": "AGR",
    "name": "Agra Airport / Agra Air Force Station",
    "type": "medium_airport",
    "latitude_deg": 27.157683,
    "longitude_deg": 77.960942,
    "elevation_ft": 551,
    "address": {
      "city": {
        "id": 436,
        "name": "Agra",
        "country_id": 76,
        "is_active": true,
        "lat": 27.18,
        "long": 78.02
      },
      "country": {
        "id": 76,
        "name": "India",
        "country_code_two": "IN",
        "country_code_three": "IND",
        "mobile_code": 91,
        "continent_id": 1
      }
    }
  }
}
