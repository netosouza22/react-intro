import { useEffect, useState } from "react";

interface IGithubData {
  name: string;
  bio: string;
  html_url: string;
}
export default function GitHubData() {
  const [userData, setUserData] = useState<IGithubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/netosouza22")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.bio}</p>
      <a href={userData.html_url}>View Profile</a>
    </div>
  );
}
