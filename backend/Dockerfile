# Use the official Node.js image as base
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to start the backend server when the container starts
CMD ["node", "server.js"]
