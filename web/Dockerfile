FROM node:alpine as build-stage

WORKDIR /app
COPY web/package*.json ./
COPY nginx/nginx.conf ./
COPY ./web ./
RUN npm ci
RUN npm run build
#CMD ["npm", "run", "build"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /app/build/ .

# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]