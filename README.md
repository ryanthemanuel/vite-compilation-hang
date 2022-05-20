# vite-compilation-hang

Steps to reproduce:

1. Run `yarn`
2. Run `yarn cypress:run:ct`

Notice that the cypress runner hangs.

vite logs:

```
objc[71262]: Class WebSwapCGLLayer is implemented in both /System/Library/Frameworks/WebKit.framework/Versions/A/Frameworks/WebCore.framework/Versions/A/Frameworks/libANGLE-shared.dylib (0x7ffb54c23948) and /Users/ryanm/Library/Caches/Cypress/beta-10.0.0-10.0-release-8d79472b/Cypress.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libGLESv2.dylib (0x1127b09c8). One of the two will be used. Which one is undefined.
  vite:config no config file found. +0ms
  vite:config using resolved config: {
  vite:config   root: '/Users/ryanm/playground/vite-compilation-hang',
  vite:config   base: '/__cypress/src/',
  vite:config   configFile: undefined,
  vite:config   optimizeDeps: {
  vite:config     entries: [
  vite:config       'src/App.cy.jsx',
  vite:config       'src/AppCompilationError.cy.jsx',
  vite:config       'src/MissingReact.cy.jsx',
  vite:config       'src/MissingReactInSpec.cy.jsx',
  vite:config       '/Users/ryanm/playground/vite-compilation-hang/cypress/support/component.ts'
  vite:config     ],
  vite:config     esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  vite:config   },
  vite:config   server: {
  vite:config     preTransformRequests: true,
  vite:config     fs: { strict: true, allow: [Array], deny: [Array] }
  vite:config   },
  vite:config   plugins: [
  vite:config     'vite:pre-alias',
  vite:config     'alias',
  vite:config     'cypress:main',
  vite:config     'vite:modulepreload-polyfill',
  vite:config     'vite:resolve',
  vite:config     'vite:optimized-deps',
  vite:config     'vite:html-inline-proxy',
  vite:config     'vite:css',
  vite:config     'vite:esbuild',
  vite:config     'vite:json',
  vite:config     'vite:wasm',
  vite:config     'vite:worker',
  vite:config     'vite:asset',
  vite:config     'vite:define',
  vite:config     'vite:css-post',
  vite:config     'vite:worker-import-meta-url',
  vite:config     'vite:client-inject',
  vite:config     'vite:import-analysis'
  vite:config   ],
  vite:config   configFileDependencies: [],
  vite:config   inlineConfig: {
  vite:config     root: '/Users/ryanm/playground/vite-compilation-hang',
  vite:config     base: '/__cypress/src/',
  vite:config     configFile: null,
  vite:config     optimizeDeps: { entries: [Array] },
  vite:config     server: { fs: [Object] },
  vite:config     plugins: [ [Object], null ]
  vite:config   },
  vite:config   resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  vite:config   publicDir: '/Users/ryanm/playground/vite-compilation-hang/public',
  vite:config   cacheDir: '/Users/ryanm/playground/vite-compilation-hang/node_modules/.vite',
  vite:config   command: 'serve',
  vite:config   mode: 'development',
  vite:config   isWorker: false,
  vite:config   isProduction: false,
  vite:config   build: {
  vite:config     target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
  vite:config     polyfillModulePreload: true,
  vite:config     outDir: 'dist',
  vite:config     assetsDir: 'assets',
  vite:config     assetsInlineLimit: 4096,
  vite:config     cssCodeSplit: true,
  vite:config     cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
  vite:config     sourcemap: false,
  vite:config     rollupOptions: {},
  vite:config     minify: 'esbuild',
  vite:config     terserOptions: {},
  vite:config     write: true,
  vite:config     emptyOutDir: null,
  vite:config     manifest: false,
  vite:config     lib: false,
  vite:config     ssr: false,
  vite:config     ssrManifest: false,
  vite:config     reportCompressedSize: true,
  vite:config     chunkSizeWarningLimit: 500,
  vite:config     watch: null,
  vite:config     commonjsOptions: { include: [Array], extensions: [Array] },
  vite:config     dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  vite:config   },
  vite:config   preview: {
  vite:config     port: undefined,
  vite:config     strictPort: undefined,
  vite:config     host: undefined,
  vite:config     https: undefined,
  vite:config     open: undefined,
  vite:config     proxy: undefined,
  vite:config     cors: undefined,
  vite:config     headers: undefined
  vite:config   },
  vite:config   env: {
  vite:config     BASE_URL: '/__cypress/src/',
  vite:config     MODE: 'development',
  vite:config     DEV: true,
  vite:config     PROD: false
  vite:config   },
  vite:config   assetsInclude: [Function: assetsInclude],
  vite:config   logger: {
  vite:config     hasWarned: false,
  vite:config     info: [Function: info],
  vite:config     warn: [Function: warn],
  vite:config     warnOnce: [Function: warnOnce],
  vite:config     error: [Function: error],
  vite:config     clearScreen: [Function: clearScreen],
  vite:config     hasErrorLogged: [Function: hasErrorLogged]
  vite:config   },
  vite:config   packageCache: Map(0) {},
  vite:config   createResolver: [Function: createResolver],
  vite:config   worker: {
  vite:config     format: 'iife',
  vite:config     plugins: [
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object], [Object],
  vite:config       [Object]
  vite:config     ],
  vite:config     rollupOptions: {}
  vite:config   }
  vite:config } +6ms
  vite:deps scanning for dependencies... { timestamp: true } +0ms
  vite:deps Crawling dependencies using entries:
  vite:deps   /Users/ryanm/playground/vite-compilation-hang/src/App.cy.jsx
  vite:deps   /Users/ryanm/playground/vite-compilation-hang/src/AppCompilationError.cy.jsx
  vite:deps   /Users/ryanm/playground/vite-compilation-hang/src/MissingReact.cy.jsx
  vite:deps   /Users/ryanm/playground/vite-compilation-hang/src/MissingReactInSpec.cy.jsx
  vite:deps   /Users/ryanm/playground/vite-compilation-hang/cypress/support/component.ts +0ms
✘ [ERROR] Expected ")" but found "}"

    src/AppCompilationError.cy.jsx:9:0:
      9 │ })
        │ ^
        ╵ )

Build failed with 1 error:
src/AppCompilationError.cy.jsx:9:0: ERROR: Expected ")" but found "}"
  vite:resolve 2.68ms react -> /Users/ryanm/playground/vite-compilation-hang/node_modules/react/index.js +0ms
  vite:resolve 1.26ms cypress/react -> /Users/ryanm/playground/vite-compilation-hang/node_modules/cypress/react/dist/cypress-react.esm-bundler.js +2ms
  vite:resolve 0.48ms ./App -> /Users/ryanm/playground/vite-compilation-hang/src/App.jsx +1ms
  vite:resolve 0.48ms ./MissingReact -> /Users/ryanm/playground/vite-compilation-hang/src/MissingReact.jsx +0ms

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        10.0.0                                                                         │
  │ Browser:        Electron 100 (headless)                                                        │
  │ Node Version:   v16.5.0 (/Users/ryanm/.nvm/versions/node/v16.5.0/bin/node)                     │
  │ Specs:          4 found (App.cy.jsx, AppCompilationError.cy.jsx, MissingReact.cy.jsx, MissingR │
  │                 eactInSpec.cy.jsx)                                                             │
  │ Searched:       **/*.cy.{js,jsx,ts,tsx}                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  App.cy.jsx                                                                      (1 of 4)
  vite:resolve 0.41ms /@vite/client -> /Users/ryanm/playground/vite-compilation-hang/node_modules/vite/dist/client/client.mjs +0ms
  vite:load 1.67ms [fs] /@vite/client +0ms
  vite:resolve 0.31ms @vite/env -> /Users/ryanm/playground/vite-compilation-hang/node_modules/vite/dist/client/env.mjs +9ms
  vite:resolve 0.23ms /node_modules/vite/dist/client/env.mjs -> /Users/ryanm/playground/vite-compilation-hang/node_modules/vite/dist/client/env.mjs +1ms
  vite:import-analysis 3.82ms [1 imports rewritten] node_modules/vite/dist/client/client.mjs +0ms
  vite:transform 7.51ms /@vite/client +0ms
  vite:time 16.01ms /@vite/client +0ms
  vite:load 3.88ms [fs] /node_modules/vite/dist/client/env.mjs +16ms
  vite:import-analysis 0.06ms [no imports] node_modules/vite/dist/client/env.mjs +9ms
  vite:transform 0.62ms /node_modules/vite/dist/client/env.mjs +7ms
  vite:resolve 0.20ms /cypress/support/component.ts -> /Users/ryanm/playground/vite-compilation-hang/cypress/support/component.ts +14ms
  vite:load 0.98ms [fs] /cypress/support/component.ts +7ms
  vite:cache [memory] /node_modules/vite/dist/client/env.mjs +0ms
  vite:time 0.69ms /node_modules/vite/dist/client/env.mjs +16ms
  vite:import-analysis 0.05ms [no imports] cypress/support/component.ts +11ms
  vite:transform 4.05ms /cypress/support/component.ts +11ms
  vite:time 6.97ms /cypress/support/component.ts +1ms
  vite:resolve 0.21ms /src/App.cy.jsx -> /Users/ryanm/playground/vite-compilation-hang/src/App.cy.jsx +11ms
  vite:load 0.56ms [fs] /src/App.cy.jsx +11ms
  vite:resolve 0.52ms react -> /Users/ryanm/playground/vite-compilation-hang/node_modules/.vite/deps/react.js?v=6895c34e +3ms
  vite:resolve 0.05ms /node_modules/.vite/deps/react.js?v=6895c34e -> /Users/ryanm/playground/vite-compilation-hang/node_modules/.vite/deps/react.js?v=6895c34e +0ms
  vite:resolve 0.28ms cypress/react -> /Users/ryanm/playground/vite-compilation-hang/node_modules/.vite/deps/cypress_react.js?v=551e88aa +1ms
  vite:resolve 0.04ms /node_modules/.vite/deps/cypress_react.js?v=551e88aa -> /Users/ryanm/playground/vite-compilation-hang/node_modules/.vite/deps/cypress_react.js?v=551e88aa +0ms
  vite:resolve 0.18ms ./App -> /Users/ryanm/playground/vite-compilation-hang/src/App.jsx +0ms
  vite:resolve 0.12ms /src/App.jsx -> /Users/ryanm/playground/vite-compilation-hang/src/App.jsx +0ms
  vite:import-analysis 2.19ms [3 imports rewritten] src/App.cy.jsx +10ms
  vite:load 2.75ms [fs] /src/App.jsx +7ms
  vite:import-analysis 0.30ms [1 imports rewritten] src/App.jsx +5ms
```
