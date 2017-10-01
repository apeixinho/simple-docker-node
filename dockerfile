FROM mhart/alpine-node

RUN addgroup -S app && adduser -S -g app app && \
    apk update && apk upgrade && \
    apk add --no-cache build-base python curl ca-certificates && \
    update-ca-certificates && \
    chown -R app:app /home/app && \
    npm i -g pm2 && \
    rm -f /var/cache/apk/*

WORKDIR /home/app

COPY app.js $WORKDIR

USER app

EXPOSE 10001
 
CMD ["pm2", "start","app.js"]
