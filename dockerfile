FROM node:14-alpine
# install @angular/cli
RUN npm install -g @angular/cli
EXPOSE 4200
# set working directory
WORKDIR /ng-workspace
# copy project folder
COPY . .
# install project dependency
RUN npm install
# start material-flashcard
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--hmr", "--poll", "2000"]
