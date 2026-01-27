import { GoogleDrive } from "https://deno.land/x/google@0.0.8/drive.ts";

const gd = new GoogleDrive({
  client_id: "758460909195-kqji9nq1c4lgt5v13mnscv6k4du0vnoj.apps.googleusercontent.com",
  client_secret: "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",
  refresh_token: "null",
  logger: false,
});

try {
  // This step can be omitted, and it will reauthorize when requesting data
  await gd.authorize();
  // The default value of the path is "root"
  const metadata = await gd.index("");

  if (metadata.isFolder) {
    console.log(metadata.list());
  } else {
    // handle metadata.raw() or metadata.raw(range)
  }
} catch (e) {
  console.log(e);
}