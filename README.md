# hiperkon-frontend
Obecnie biega na https://sesje.konwent.online

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Adding new environmental variables
1. edit entrypoint.sh, add variable name to `JSON_STRING`
1. [optional] add `import getEnv from "@/utils/env";` to your .vue file
1. read variable with `getEnv("VUE_APP_XXX_XXX")`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
