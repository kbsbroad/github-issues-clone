export const getIssuesUri = (owner, repo, q) => {
  const buff = [`https://github.com/${owner}/${repo}/issues`]

  if (q) {
    buff.push(`q=${encodeURIComponent(q)}`)
  }

  return buff.join('?')
}
