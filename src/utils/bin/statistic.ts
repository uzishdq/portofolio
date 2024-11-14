import { getGithubFollowers, getProjects } from "@/api"

export const statistic = async (args: string[]): Promise<string> => {
  const repo = await getProjects()
  const githubFollower = await getGithubFollowers()

  return `
    - GitHub Followers: ${githubFollower} 👤💻  
    - GitHub Repo: ${repo.length} 📦
    - GitHub Stars: ${repo.reduce(
      (acc: any, cur: { stargazers_count: any }) => acc + cur.stargazers_count,
      0
    )} ⭐`
}
