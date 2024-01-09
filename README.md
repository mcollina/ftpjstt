# Type instantiation is excessively deep and possibly infinite bug

To reproduce:

1. `npm i`
2. `npx tsc`


This will generate the following error:


```
src/server.ts:9:3 - error TS2589: Type instantiation is excessively deep and possibly infinite.

  9   fastify.post(
      ~~~~~~~~~~~~~
 10     '/',
    ~~~~~~~~
...
 28     }
    ~~~~~
 29   );
    ~~~


Found 1 error in src/server.ts:9
```
