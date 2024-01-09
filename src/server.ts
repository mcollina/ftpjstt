import { FastifyPluginAsyncJsonSchemaToTs } from '@fastify/type-provider-json-schema-to-ts';
import fastify from 'fastify';
import { Http2Server } from 'http2'


const server = fastify();

const plugin: FastifyPluginAsyncJsonSchemaToTs<{}, Http2Server> = async function (fastify, _opts) {
  fastify.post(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            x: { type: 'string' },
            y: { type: 'number' },
            z: { type: 'boolean' },
          },
          required: ['x', 'y', 'z'],
        } as const,
      },
    },
    (req) => {
      /// The `x`, `y`, and `z` types are automatically inferred
      const { x, y, z } = req.body;
      return { x, y, z };
    }
  );
};

server.register(plugin);

server.listen({ port: 3000 });
