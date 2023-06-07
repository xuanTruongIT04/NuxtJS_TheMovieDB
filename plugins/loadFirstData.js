export default async ({
  store
}) => {
  await store.dispatch("loadNowPlaying");
  await store.dispatch("loadGenres");
}

