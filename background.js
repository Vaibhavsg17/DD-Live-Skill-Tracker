let activeTabId = null;
let activeTabUrl = null;
let startTime = null;

// Listen to tab activation changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    console.log("Tab activated", activeInfo);

    if (activeTabId !== null) {
        // Save the current tab's URL when switching to a new tab
        console.log("Saving visited site", activeTabUrl);
        await saveVisitedSite(activeTabUrl);
    }

    // Update active tab details
    activeTabId = activeInfo.tabId;
    const tab = await chrome.tabs.get(activeTabId);
    activeTabUrl = tab.url;
    startTime = Date.now();
    console.log("New active tab", activeTabUrl);
});

// Listen to tab updates (e.g., URL change)
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (tabId === activeTabId && changeInfo.url) {
        console.log("Tab URL updated", changeInfo.url);

        // Save the previously visited URL
        await saveVisitedSite(activeTabUrl);

        // Update the new URL
        activeTabUrl = changeInfo.url;
        startTime = Date.now();
    }
});

// Function to save the visited URL to storage
async function saveVisitedSite(url) {
    if (!url) return;

    let visitedSites = await chrome.storage.local.get(['visitedSites']);
    visitedSites = visitedSites.visitedSites || [];

    if (!visitedSites.includes(url)) {
        visitedSites.push(url);
        console.log("Visited site added:", url);
        chrome.storage.local.set({ visitedSites });
    } else {
        console.log("Site already tracked:", url);
    }
}

// Optional: clear data when the extension starts (for testing)
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed, clearing data.");
    chrome.storage.local.clear();
});
