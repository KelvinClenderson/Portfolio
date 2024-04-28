
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/KelvinClenderson/Dio-portfolioJs/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
