FROM node:alpine

COPY . . 

EXPOSE 8000 

CMD [ "node", "server.js" ]