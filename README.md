# Odyssey Voyage II - Server (Airlock)

**Apollo GraphQL Developer - Professional Certificate**

Welcome to the companion repository for Odyssey's *Voyage II: Federating the Monolith*, part of the **Apollo GraphQL Developer - Professional Certificate** program. This repository includes exercises and practical applications for building and managing federated graphs using Apollo's tools. The server backend, dubbed **Airlock**, supports the companion app as we transform a monolithic GraphQL API into a federated architecture.

> This codebase represents hands-on exercises completed throughout the course, demonstrating Apollo Federation, supergraph design, subgraph management, and advanced concepts like schema registries, CI/CD schema checks, and more.

---

## Table of Contents
- [Apollo Router Core](#apollo-router-core)
- [Concepts](#concepts)
- [How to Use this Repository](#how-to-use-this-repository)
- [Running the Project](#running-the-project)
- [Resetting the Database](#resetting-the-database)
- [Getting Help](#getting-help)
- [License](#license)

---

## Apollo Router Core

The **Apollo Router Core** is a high-performance, configurable graph router written in Rust, designed to support federated supergraphs with Apollo Federation 2. This router replaces Apollo Gateway with enhanced scalability, observability, and a focus on reliability. Key features include:

- **Hot-reloading** configurations and supergraph files
- **Built-in logging** and telemetry options
- **Customizable** via user-defined extensions

### Key Usage Commands
- **Log level**: `--log <LOG_LEVEL>` (default: info)
- **Development mode**: `--dev` for rapid testing
- **Schema polling**: `--apollo-uplink-poll-interval <INTERVAL>` to fetch the latest supergraph schema
- **Listening Address**: `--listen <LISTEN_ADDRESS>` to define the router's address

---

## Concepts

This project explores various concepts and tools central to building and managing a federated graph:

- **Supergraph**: The unified API endpoint aggregating multiple subgraphs, allowing organizations to scale and manage their GraphQL services as a single, distributed network.
- **Subgraph**: Independent GraphQL services within the supergraph that represent distinct domains, enhancing modularity and service autonomy.
- **Schema Registry**: The schema registry, integrated with Apollo’s **GraphOS**, maintains schema versions for all subgraphs, allowing for centralized schema management and validation.
- **Apollo Uplink**: A system for distributing schema updates from GraphOS to the router, enabling efficient schema polling and quick synchronization across environments.
- **GraphOS Router**: A production-grade graph router that delivers API performance and scalability for federated supergraphs, while offering extensibility for unique application needs.
- **Entities and Value Types**: GraphQL entities allow linking between subgraphs through reference fields, while value types capture non-referential, immutable data shared across the supergraph.
- **CI/CD Integration with Schema Checks**: Schema changes are validated against the registry in a CI/CD pipeline, ensuring new subgraphs or updates don't introduce breaking changes or conflicts.

---

## How to Use this Repository

This repository serves as the starting point for the **Odyssey Voyage II** course. Follow the instructions in the course materials to transform this monolithic API into a federated graph, learning how to split services, configure the Apollo Router, and deploy a scalable API infrastructure.

1. **Setup**:
   - Clone this repository.
   - Navigate to the `monolith` directory in your terminal.

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the API Server**:
   ```bash
   npm start
   ```
   This will start the GraphQL API server on `http://localhost:4000`.

4. **Run Local Services**:
   - In a separate terminal within the `monolith` directory, run:
     ```bash
     npm run launch
     ```
   - This will start four local services essential for the API's functionality.

---

## Running the Final Version of the Project

After completing the course, you can view and run the final version of the code:

1. **Navigate to the Final Router Directory**:
   ```bash
   cd final/router
   ```

2. **Run the Router**:
   ```bash
   APOLLO_KEY=<APOLLO_KEY> APOLLO_GRAPH_REF=<APOLLO_GRAPH_REF> ./router --config config.yaml
   ```
   Replace `<APOLLO_KEY>` and `<APOLLO_GRAPH_REF>` with the values provided in the course.

3. **Launch the Subgraphs**:
   - **Monolith Subgraph**:
     ```bash
     cd final/monolith && npm start
     ```
   - **Accounts Subgraph**:
     ```bash
     cd final/subgraph-accounts && npm install && npm start
     ```

4. **Run Supporting Services**:
   - Return to `final/monolith` and execute:
     ```bash
     npm run launch
     ```

---

## Resetting the Database

To reset the database to its initial state after testing or modifications, run:
```bash
npm run db:reset
```

---

## Getting Help

For additional assistance or questions regarding the course material, please refer to the **Odyssey topic in the Apollo Community forums**.

---
