FROM node
WORKDIR /app
RUN npm install express mysql
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]