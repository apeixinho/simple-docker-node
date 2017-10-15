FROM mhart/alpine-node

RUN addgroup -S app && adduser -S -g app app && \
    apk update && apk upgrade && \
    apk add --no-cache build-base && \
    npm i -g pm2 && \
    npm i express && \
    rm -f /var/cache/apk/*

WORKDIR /home/app

COPY processes.json app.js $WORKDIR/

RUN chown -R app:app /home/app

USER app

EXPOSE 10001

CMD ["pm2", "start","processes.json","--no-daemon"]
