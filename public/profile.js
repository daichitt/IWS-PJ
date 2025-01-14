

async function getGitHubAvatar(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);
        
        // Check if the response is successful
        if (response.ok) {
            const userData = await response.json();
            console.log('User data:', userData);
            return userData; // Return the avatar URL
        } else {
            console.error('User not found or an error occurred:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}


// Example usage
const username = 'daichitt'; // Replace with the desired GitHub username
getGitHubAvatar(username).then(userData => {
    console.log('Avatar URL:', userData.avatar_url);
    if (userData.avatar_url) {
        // You can also set this URL to an image element in your HTML
        // document.getElementById('github-avatar').src = userData.avatar_url; // Assuming you have an <img> element with this ID
    }


    // Check if the image element exists
    const profilePhoto = document.getElementById('profilePhoto1');
    if (!profilePhoto) {
        // Set the src attribute to userData.avatar_url
        profilePhoto.src = userData.avatar_url;
    } else {
        console.error('Element with ID "profilePhoto1" not found.');
    }
});

