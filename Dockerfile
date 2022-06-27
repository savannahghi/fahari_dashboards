ARG APP_HOME=/app
ARG PORT=8080


FROM node:alpine as app_build_stage
ARG APP_HOME
ARG PORT
EXPOSE ${PORT}
WORKDIR ${APP_HOME}

COPY ./package.json ${APP_HOME}
RUN npm install && npm cache clean --force
COPY . ${APP_HOME}
RUN npm run build


COPY ./entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint"]
