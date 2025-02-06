INSTALL NEXT
npx create-next-app@15 layer-caker --typescript --tailwind --eslint --app --src-dir --import-alias="@/\*" --turbopack

RUN DEV SERVER
npm run dev

INIT SANITY
npx sanity@latest init

bun i next-sanity

SEED SANITY DATASET
npx sanity dataset import production.tar.gz production

UPDATE ENV VALUES
npx sanity@latest init --env

SHOW PROJECT DETAILS
npx sanity@latest debug

EXTRACT SCHEMA
npx sanity@latest schema extract --path=./src/sanity/extract.json
