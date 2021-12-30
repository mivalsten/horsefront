#!/bin/sh
JSON_STRING="window.configs = { \
  \"VUE_APP_API_PATH\": \"${VUE_APP_API_PATH}\", \
  \"VUE_APP_BASE_PATH\": \"${VUE_APP_BASE_PATH}\" \
}"
sed -i "s@// CONFIGURATIONS_PLACEHOLDER@${JSON_STRING}@g" /usr/share/nginx/html/index.html
exec "$@"