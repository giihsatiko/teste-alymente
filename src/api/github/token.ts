export async function githubFetcher(url: string) {
  const GITHUB_TOKEN = '???';

  const res = await fetch(url, {
    headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {},
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    if (res.status === 403 && errorData.message.includes('rate limit')) {
      throw new Error('Limite de requisições atingido');
    }
    throw new Error(errorData.message || `Erro ao buscar dados: ${res.status}`);
  }

  return res.json();
}
