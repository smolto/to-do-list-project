#!/usr/bin/env bash

FILE=.env
if test -f "$FILE"; then
  API_URL=`cat .env | grep API_URL | cut -d' ' -f2`
  API_KEY=`cat .env | grep API_KEY | cut -d' ' -f2`

  jq -n --rawfile schema schema.graphql '{ query: "mutation updateGQLSchema($sch: String!) { updateGQLSchema(input: { set: { schema: $sch }}) { gqlSchema { schema } } }", variables: { sch: $schema }}' | 
    curl "https://${API_URL}/admin" \
      -H "Content-Type: application/json" \
      -H "X-Auth-Token: ${API_KEY}" \
      --data-binary @- \
      --compressed
else
  echo "$FILE is required to run this script."
fi
