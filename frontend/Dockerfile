# Use the official Nginx image as base
FROM nginx:alpine

# Copy the static content into the Nginx server directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
