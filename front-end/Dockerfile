FROM node

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'client' folder the current working directory
WORKDIR /front-end

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /front-end/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'client' folder)
COPY . /front-end/


EXPOSE 3000
CMD [ "npm", "start" ]