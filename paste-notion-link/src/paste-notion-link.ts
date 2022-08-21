import { 
    open, Clipboard,
    showToast, Toast
} from "@raycast/api";

export default async () => {
    const clipboardText = await Clipboard.readText();

    if (clipboardText.includes('notion.so')) {
        const newText = clipboardText.replace('https:', 'notion:');

        await Clipboard.paste(newText);
    } else {
        await showToast({
            style: Toast.Style.Failure,
            title: "Not a Notion URL",
            message: "The url in the clipboard does not point to a Notion page.",
        });
    }
};