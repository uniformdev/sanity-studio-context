# Sanity Studio with Uniform plugin

## Bring powerful edge-side personalization into Sanity

This Sanity Studio is based on v3 and is wired up with the Uniform plugin that is compatible with the latest Uniform Context.

## Prerequisites

1. Uniform project created (start for free at https://uniform.app)
2. Sanity.io project.

## Getting started

1. `npm install`
2. Create `.env.development` (for local dev) or `.env.production` (for prod deployment), depending on your needs.
   > See `.env.example` as a reference
3. Fill out your env vars (for Sanity and Uniform).
4. `npm start`.
5. Configure project id and dataset settings in `sanity.cli.ts`

## Import sample content into your dataset (optional)

1. Install sanity CLI with `npm install -g @sanity/cli`
1. Login to Sanity.io with `sanity login` to be able to run some admin commands later
1. Import content structure and content into your Sanity dataset:
   ```
   sanity dataset import ./content-export.ndjson <DATASET_NAME>
   ```

## How is the plugin installed?

1. Open `sanity.config.ts` and import Uniform plugin:

    ```bash
    import {uniformPlugin} from '@uniformdev/sanity-plugin-uniform'
    ```

1. Add Uniform plugin with configuration sourcing values from your environment variables:

    ```js
    plugins: [
        uniformPlugin({
        apiHost: import.meta.env.SANITY_STUDIO_UNIFORM_HOST || 'https://uniform.app',
        apiKey: import.meta.env.SANITY_STUDIO_UNIFORM_API_KEY!,
        projectId: import.meta.env.SANITY_STUDIO_UNIFORM_PROJECT_ID!,
        }),
    ],
    ```

## Sample schema

The sample schema is included in `schemas/uniform` but you don't have to use it.

There are two sides of Uniform Context - personalization criteria that configure criteria when a particular piece of content is supposed to be shown, and enrichment tags - the ability to decorate your content (typically, pages) with Uniform Enrichments, allowing to collect behavior and personalize on it.

If you are not using the sample schema, you will need to at least add one field of type `uniform.personalizationCriteria` to any content type in order to personalize a given content type (see `schemas/uniform/hero.ts` for reference):

```js
{
    name: 'personalizationCriteria',
    type: 'uniform.personalizationCriteria',
    title: 'Personalization Criteria',
}
```

Optionally, you can also add enrichments to any content type, which allows to collect behavioral information when such content is visited during a visitor session.
To use this feature, you will need to add at least one field of type `uniform.enrichmenttags` to any content type in order to personalize a given content type (see `schemas/uniform/page.ts` for reference):

```js
{
    name: 'enrichmentTag',
    type: 'uniform.enrichmenttags',
    title: 'Enrichments',
}
```

## About Environment Variables

The `.env` files _must_ be suffixed with either `.development` or `.production` for Sanity to use them. The environment suffix is determined by the following:

- `process.env.SANITY_ACTIVE_ENV` takes precedence
- `process.env.NODE_ENV` is fallback
- if neither of the above are defined, then `development` is using for `sanity start` and `production` is used for `sanity build` and `sanity deploy`.
