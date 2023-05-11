# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["nest", "start"]
EXPOSE 3000