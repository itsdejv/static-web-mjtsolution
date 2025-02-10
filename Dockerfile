# Stage 1: Build
FROM node:20-slim AS build

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy the application files into the container (including package.json)
COPY package*.json ./

# Debug: Output the value of ENV_TYPE to verify it's being set correctly
ARG ENV_TYPE
RUN echo "The environment type is: $ENV_TYPE"

# Install PNPM manually to bypass Corepack issues
RUN npm install -g pnpm@8

# Install dependencies
RUN pnpm install

# Copy the rest of the application code into the container
COPY . .

# Run build script based on ENV_TYPE
RUN pnpm build

# Stage 2: Production
FROM nginx:alpine AS production

# Copy the built application from the build stage to the Nginx directory for static files
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Debug: Verify the Nginx configuration
RUN echo "Content of /etc/nginx/conf.d after copying Nginx configuration:" && ls -la /etc/nginx/conf.d

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx with the daemon off option to keep the container running in the foreground
CMD ["nginx", "-g", "daemon off;"]