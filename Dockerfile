# Select base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy dependency files inside of the directory
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install

# Copy everything else inside working directory
COPY ./ ./

# Run the app
CMD [ "npm", "start" ]