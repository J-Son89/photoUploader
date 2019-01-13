FROM node:8
#App directory
WORKDIR /Users/jamie/Projects/photoUploader
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3010
CMD ["npm", "start"]