function createLink(url) {
  return 'https://embed.spco.xyz?url=' + encodeURIComponent(url);
}

browser.contextMenus.create({
  id: "create-embed-link",
  title: "Create embed link",
  contexts: ["image", "video"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "create-embed-link") {
    let link = createLink(info.srcUrl);
    navigator.clipboard.writeText(link);
    browser.notifications.create({
      "type": "basic",
      "title": "Link created",
      "message": "The link has been copied to your clipboard."
    });
  }
});
