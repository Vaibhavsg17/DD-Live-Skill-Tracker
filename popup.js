document.getElementById('showSitesBtn').addEventListener('click', async () => {
    console.log("Show Visited Sites button clicked");

    let data = await chrome.storage.local.get(['visitedSites']);
    console.log("Retrieved visited sites:", data);

    let visitedSites = data.visitedSites || [];

    let siteListElement = document.getElementById('siteList');
    siteListElement.innerHTML = ''; // Clear any previous content

    if (visitedSites.length > 0) {
        visitedSites.forEach(site => {
            let listItem = document.createElement('li');
            listItem.textContent = site;
            siteListElement.appendChild(listItem);
        });
    } else {
        siteListElement.innerHTML = '<li>No sites visited yet.</li>';
    }
});

document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent form from submitting the traditional way

    let name = document.getElementById('name').value;
    let skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

    // Save the name and skills to storage
    await chrome.storage.local.set({ userDetails: { name, skills } });

    alert('Details saved successfully!');
});

document.getElementById('showDetailsBtn').addEventListener('click', async () => {
    let data = await chrome.storage.local.get(['userDetails']);
    let userDetails = data.userDetails || { name: 'No name', skills: [] };

    let detailsDiv = document.getElementById('savedDetails');
    detailsDiv.innerHTML = `<p><strong>Name:</strong> ${userDetails.name}</p>`;
    detailsDiv.innerHTML += `<p><strong>Skills:</strong> ${userDetails.skills.join(', ')}</p>`;
});
