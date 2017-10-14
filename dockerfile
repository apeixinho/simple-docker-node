FROM mhart/alpine-node

RUN addgroup -S app && adduser -S -g app app && \
    apk update && apk upgrade && \
    apk add --no-cache build-base && \
    chown -R app:app /home/app && \
    npm i -g express pm2 && \
    rm -f /var/cache/apk/*

WORKDIR /home/app

COPY processes.json app.js $WORKDIR/

USER app

EXPOSE 10001

CMD ["pm2", "start","processes.json","--no-daemon"]
