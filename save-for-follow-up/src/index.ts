import { open, Clipboard } from "@raycast/api";

export default async function main() {
  const clipboardText = await Clipboard.readText();
  const encodedText = encodeURIComponent(clipboardText);


  await open(
    `drafts://x-callback-url/create?text=${encodedText}&tag=follow%20up`
  );
}