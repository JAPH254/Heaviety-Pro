# 1. Use a lightweight Node.js image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy dependency-related files first
COPY package.json package-lock.json /app/

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application's code
COPY . /app/

# 6. Expose the Vite development server's port
EXPOSE 5173

# 7. Run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
