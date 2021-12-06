# Prismagram

### Description

backend with Prisma and GraphQL

### Requirement

- npm
- postgres database server

### Setup Instructions

1. create a .env file at root path of the repository

2. In .env file save Database URL with your server information

   ```
   DATABASE_URL="postgresql://name:password@localhost:5432/dbname?schema=public"
   ```

3. install

   ```
   npm install
   ```

4. migrate
   ```
   npm migrate
   ```

### Run Instruction

1. run system

   ```
   npm run dev
   ```

2. Prisma Studio (for data view & modification)
   ```
   npm studio
   ```
