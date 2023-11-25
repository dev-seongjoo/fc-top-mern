FROM node:18
            
WORKDIR /usr/src/app
                    
COPY . .
RUN yarn install --frozen-lockfile
EXPOSE 5050
           
CMD [ "yarn", "start" ]
