FROM node:16-alpine

# Set working directory
WORKDIR /usr/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

COPY . .


# Build app
RUN npm run build

USER node
# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image

# Launch app with PM2
CMD ["npm", "run", "start"]