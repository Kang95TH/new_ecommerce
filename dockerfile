FROM node:16.15.1-alpine

RUN mkdir -p /home/user/app
RUN cd /home/user/app
WORKDIR /home/user/app

# COPY package.json ./
# COPY package-lock.json ./
COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]