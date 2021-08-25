# Data Model

Contents:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Notes](#notes)


## Summary


### Issue

We want to decide which backend technology to use fo this application.

#### REST vs GRAPHQL

##### **Comparison**

In one hand REST API, you would typically gather the data by accessing multiple endpoints. In GraphQL on the other hand, you’d simply send a single query to the GraphQL server that includes the concrete data requirements.

One of the most common problems with REST is that of **over- and underfetching**. This happens because the only way for a client to download data is by hitting endpoints that return **fixed data structures**. It’s very **difficult to design** the API in a way that it’s able to provide clients with their **exact data needs**.

##### **Requirements**

It must be a cloud solution because: 

* Reduced IT costs
* Scalability
* Security
* Access to automatic updates

#### **DGRAPH vs Neo4j**

##### **Comparison**

* **Performance**: Dgraph is 160x faster than Neo4j for loading graph data. Dgraph consumes 5x lesser memory compared to Neo4j and is at least 3x faster for intertwined reads and writes.
* **Features**: Dgraph supports most of the functionality that one needs to get the job done; though it doesn’t have all the functionality one might want.

#### **Why DGRAPH?**

* Free version is more than enough for this project and in case that we need to scale our backend, there will be no problem upgrading to a cluster.
* You can define the schema and Dgraph generates automatically mutations and everything you need to start working with your backend
* Security is important and Dgraph offers a authorization and authentication system for their cloud solution.

### Decision

Dgraph

### Status

Database proposed 


## Notes

Any notes here.