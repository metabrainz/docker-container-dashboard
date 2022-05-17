# docker-container-dashboard

A [DataTables](https://www.npmjs.com/package/react-bs-datatable) based dashboard providing a means to visualise
the Docker containers running across the MetaBrainz infrastructure.

## DataTables

Datatables loads the Docker container information from a JSON file.

The JSON file will be periodically generated by a separate script.

### Data format

Table data is loaded from the "data" key of the JSON object, which contains an array
of rows:

```json
{
  "data": [
    {
      "host": "aphex",
      "name": "musicbrainz-website-prod",
      "started": 1650261733000,
      "image": "metabrainz/musicbrainz-website:production"
    }
  ]
}
```

The values contained in each row is as follows:

1. Container host
2. Container name
3. Container start time in JS epoch (milliseconds since 1971/01/01)
4. Container image

The JSON will also include an "errors" key, containing an array of hostnames where the
script failed to retrieve Docker container information.

## Planned changes

- [ ] Remove the sub-header containing the "last updated" text
- [ ] Add a "reload" button
- [ ] Add support for the "errors" key in the JSON data that adds an alert to
  the top of the page