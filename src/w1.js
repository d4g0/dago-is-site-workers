addEventListener("fetch", (event) => {
  console.log(KEY)
  event.respondWith(new Response("Hello Miniflare!"));
});
