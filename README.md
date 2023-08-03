# Table data sets application

### React + TypeScript + Vite

#### Install dependencies

```bash
npm install
```

#### Run application in development mode

```bash
npm run dev
```

#### Build application

```bash
npm run build
```

#### Run application in Docker container

##### Build Docker image

```bash
docker build -t table-data-sets .
```

##### Run Docker container

```bash
docker run -d --rm -p 5173:5173 --name table-data-sets table-data-sets
```
