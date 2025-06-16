# FROM node:18-alpine 
# FROM node:23
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /frontend


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install -g @angular/core
# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the Angular app
COPY . .

# Build the application
RUN npm run build -- --configuration production


# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx site and copy your built app
RUN chmod -R 755 /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /frontend/dist/frontend/browser /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
